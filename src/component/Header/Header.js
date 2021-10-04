import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo1.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header-color w-full flex justify-between py-2 pl-8 ">
            <div className="pl-4">
                <img src={logo} alt="" />
            </div>
            <div className="text-2xl text-white pr-10 font-bold py-4">
                <NavLink className="pr-4 activeStyle" activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                    }}to='/home'>Home</NavLink>
                <NavLink className="pr-4 activeStyle"activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                    }} to='/about'>About</NavLink>
                <NavLink className="pr-4 activeStyle"activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                    }} to='/service'>Services</NavLink>
                <NavLink activeStyle={{
                            fontWeight: "bold",
                            color: "Black"
                        }} to='/campusLife'>Campus Life</NavLink>
            </div>
        </div>
    );
};

export default Header;