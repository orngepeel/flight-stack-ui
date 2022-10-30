import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navigation from '../components/navbar';
import Swipe from './swipe';

export const Search = () => {
    const URL = ""
    const navigate = useNavigate();
    const [dep_airport, setDep_airport] = useState('');
    const [arr_airport, setArr_airpoirt] = useState('');
    const [dep_date, setDep_date] = useState('');
    const [ret_date, setRet_date] = useState('');
    const [num_passengers, setNum_passengers] = useState(1);
    const [round_trip, setRound_trip] = useState(false);
    const [searchParams, setSearchParams] = useState({});

    const searchFunc = async () => {
        const response = await fetch(`${URL}/`, {
            method: 'POST',
            body: round_trip,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status !== 200) {
            alert(`Oops! Something went wrong.`)
        }
        setSearchParams({
            dep_airport: dep_airport,
            arr_airport: arr_airport,
            dep_date: dep_date,
            ret_date: ret_date,
            num_passengers: num_passengers,
            round_trip: round_trip
        })
        navigate('/swipe');
        return (
            <Swipe searchParams={searchParams} />
        )
    };

    return (
        <div>

            <header>
                <h1 className='title'>Flight Stack</h1>
                <Navigation />
            </header>
            <div>
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
                <input type="radio" id="one_way" name="round_trip" value={false} onSelect={e => setRound_trip(e.target.value)}/>
                <label htmlFor="one_way">One Way</label>
                <input type="radio" id="round_trip" name="round_trip" value={true} onSelect={e => setRound_trip(e.target.value)}/>
                <label htmlFor="round_trip">Round Trip</label>
                <button
                    onClick={searchFunc}
                >Go!</button>
            </div>
        </div>
    );
}

export default Search;