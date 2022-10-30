import React, { useState } from "react";
import TinderCard from '@nhoon2002/react-tinder-card';
import Navigation from "../components/navbar";
import { useEffect } from "react";


const formatDate = (dateString) => {
    const options = { month: "long", day: "numeric", hour: "numeric", minute: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}

export function Swipe ({searchParams}) {

    console.log('searchResult ==>\n\n\n\n\n', searchParams)


    const [isComp, setIsComp] = useState(false);
    const [flightCompare, setFlightCompare] = useState([]);
    
    const [data, setData] = useState([]);
    
    const URL = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights';
    
    const loadFlights = async () => {
        const response = await fetch(`${URL}`, searchParams);
        setData(response);
        console.log(data)
    }

    const saveFlight = (flight) => {
        setFlightCompare(current => [...current, flight])
    }

    const swiped = (direction, flight) => {
        console.log("removing: " + flight.purchaseLinks[0].purchaseLinkId);
        console.log(direction)
        if (direction === 'right') {
            saveFlight(flight)
        }
    };

    const outOfFrame = (flight) => {
        console.log(flight.purchaseLinks[0].purchaseLinkId + " left the screen!");  
    };

    const toggleComp = () => {
        setIsComp(isComp ? false : true);
        console.log(flightCompare)
    }

    useEffect(() => {
        loadFlights();
    }, [data]);

    if(!isComp) {
        return (
            <div className="wrapper">
                <header>
                    <h1 className="title">Flight Stack</h1>
                    <Navigation />
                </header>
                <div className='cardContainer'>
                    {searchParams.data.flights.map((flight) => (
                    <TinderCard
                    className='swipe'
                    key={flight.purchaseLinks[0].purchaseLinkId}
                    onSwipe={(dir) => swiped(dir, flight)}
                    onCardLeftScreen={() => outOfFrame(flight)}
                    >
                        <div
                        className='card'
                        >
                            <div>
                                <h2>{`Total Price: $${flight.purchaseLinks[0].totalPrice}`}</h2>
                                <h2>{`Price per Passenger: $${flight.purchaseLinks[0].totalPricePerPassenger}`}</h2>
                                <h2 className="date">{`Depart: ${formatDate(flight.segments[0].legs[0].departureDateTime)}`}</h2>
                                <h2 className="date">{`Arrive: ${formatDate(flight.segments[0].legs[flight.segments[0].legs.length - 1].arrivalDateTime)}`}</h2>
                                <img src={flight.segments[0].legs[0].operatingCarrier.logoUrl} alt={`${flight.segments[0].legs[0].operatingCarrier.displayName} logo.`}></img>
                            </div>
                            <div>
                                <h3>{`${flight.segments[0].legs[0].originStationCode} -> ${flight.segments[0].layovers.length} connections -> ${flight.segments[0].legs[flight.segments[0].legs.length - 1].destinationStationCode}`}</h3>
                            </div>
                        </div>
                    </TinderCard>
                    ))}
                </div>
                <button className="toggle" onClick={() => toggleComp(isComp)}>Compare</button>
            </div>
        )
    } else {
        const flights = flightCompare;
        return (
            <>
            <div className='comparison'>
                <header>
                    <h1 className="title">Flight Stack</h1>
                    <Navigation />
                </header>
                {flights.map((flight, i) => (
                    <div className="listCard" key={flight.purchaseLinks[0].purchaseLinkId}>
                        <div>
                                <h2>{`Total Price: $${flight.purchaseLinks[0].totalPrice}`}</h2>
                                <h2>{`Price per Passenger: $${flight.purchaseLinks[0].totalPricePerPassenger}`}</h2>
                                <h2 className="date">{`Depart: ${formatDate(flight.segments[0].legs[0].departureDateTime)}`}</h2>
                                <h2 className="date">{`Arrive: ${formatDate(flight.segments[0].legs[flight.segments[0].legs.length - 1].arrivalDateTime)}`}</h2>
                                <img src={flight.segments[0].legs[0].operatingCarrier.logoUrl} alt={`${flight.segments[0].legs[0].operatingCarrier.displayName} logo.`}></img>
                                {/*eslint-disable-next-line*/}
                                <a className="aLink" href={`${flight.purchaseLinks[0].url}`} target="_blank"><button>Buy</button></a>
                            </div>
                            <div>
                                <h3>{`${flight.segments[0].legs[0].originStationCode} -> ${flight.segments[0].layovers.length} connections -> ${flight.segments[0].legs[flight.segments[0].legs.length - 1].destinationStationCode}`}</h3>
                            </div>
                    </div>
                ))}
                <button className="toggle" onClick={() => toggleComp()}>Swipe</button>
            </div>
            </>
        )
    }
  }

export default Swipe;