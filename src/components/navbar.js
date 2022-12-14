import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome } from 'react-icons/fa';

export const Navigation = () => {
    return (
        <nav className='links'>
            <div>
                <ul className='navButtons'>
                    <li><Link to="/"><button className='home'><FaHome size={30}/></button></Link></li>
                </ul>
            </div>
        </nav>

    );
};

export default Navigation;