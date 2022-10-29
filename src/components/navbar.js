import React from 'react';
import { Link } from 'react-router-dom';
import {FaRegPaperPlane } from 'react-icons/fa';

export const Navigation = () => {
    return (
        <nav className='links'>
            <div className='navButtons'>
                <ul>
                    <li><Link to="/"><button className='home'><FaRegPaperPlane /></button></Link></li>
                </ul>
            </div>
        </nav>

    );
};

export default Navigation;