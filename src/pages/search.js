import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navigation from '../components/navbar';

export const Search = ({setSearchParams}) => {
    const navigate = useNavigate();
    const [dep_airport, setDep_airport] = useState('');
    const [arr_airport, setArr_airpoirt] = useState('');
    const [dep_date, setDep_date] = useState('');
    const [ret_date, setRet_date] = useState('');
    const [num_passengers, setNum_passengers] = useState(1);
    const [round_trip, setRound_trip] = useState(false);

    const searchFunc = (e) => {
        e.preventDefault()
        let rt_param;
        round_trip ? rt_param = 'ROUND_TRIP' : rt_param = 'ONE_WAY';
        const request = {
            method: 'GET',
            params: {
                sourceAirportCode: dep_airport,
                destinationAirportCode: arr_airport,
                date: dep_date,
                itineraryType: rt_param,
                sortOrder: 'PRICE',
                numAdults: num_passengers,
                numSeniors: '0',
                classOfService: 'ECONOMY',
                returnDate: ret_date,
                currencyCode: 'USD'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_X_RapidAPI_Key,
                'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
            }
        };
        setSearchParams(request);
        console.log(request)
        navigate('/swipe')
    };

    return (
        <div>

            <header>
                <h1 className='title'>Flight Stack</h1>
                <Navigation />
            </header>
            <form className='form' onSubmit={e => searchFunc(e)}>
                <p>Search for flights</p>
                <label htmlFor='dep_air'>Depart From: </label>
                <input
                    id='dep_air'
                    type="text"
                    placeholder="Enter airport code here"
                    value={dep_airport}
                    onChange={e => setDep_airport(e.target.value)} />
                <label htmlFor='arr_air'>Fly To: </label>
                <input
                    id='arr_air'
                    type="text"
                    placeholder="Enter airport code here"
                    value={arr_airport}
                    onChange={e => setArr_airpoirt(e.target.value)} />
                <label htmlFor='dep_date'>Leave On: </label>
                <input
                    id='dep_date'
                    type="date"
                    placeholder="departure date"
                    value={dep_date}
                    onChange={e => setDep_date(e.target.value)} />
                <label htmlFor='ret_date'>Return On: </label>
                <input
                    id='ret_date'
                    type="date"
                    placeholder="return date"
                    value={ret_date}
                    onChange={e => setRet_date(e.target.value)} />
                <label htmlFor='num_passengers'>Number of Passengers: </label>
                <input
                    id='num_passengers'
                    type="number"
                    placeholder="# Passengers"
                    value={num_passengers}
                    onChange={e => setNum_passengers(e.target.value)} />
                <label className='radioLabel' htmlFor="one_way">One Way
                    <input type="radio" id="one_way" name="round_trip" value={false} onSelect={e => setRound_trip(e.target.value)}/>
                </label>
                <label className="radioLabel" htmlFor="round_trip">Round Trip
                    <input type="radio" id="round_trip" name="round_trip" value={true} onSelect={e => setRound_trip(e.target.value)}/>
                </label>
                <button type='submit'>Go!</button>
            </form>
        </div>
    );
}

export default Search;