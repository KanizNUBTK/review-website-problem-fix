import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo1.png'
import './Header.css';

const Header = () => {
    return (
        <div className="bg-gray-100 w-full flex justify-between p-2 fixed">
            <div className="pl-4">
                <img src={logo} alt="" />
            </div>
            <div className="text-2xl px-4 font-bold py-4">
                <NavLink className="pr-4" to='/home'>Home</NavLink>
                <NavLink className="pr-4" to='/about'>About</NavLink>
                <NavLink className="pr-4" to='/service'>Services</NavLink>
                <NavLink to='/campusLife'>Campus Life</NavLink>
            </div>
        </div>
    );
};

export default Header;