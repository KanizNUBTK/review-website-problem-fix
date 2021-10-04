import React from 'react';
import logo from '../../images/logo2.jpg';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-color flex justify-around p-12">
            <div className="footer-left">
                <img className="w-40 h-40" src={logo} alt="" />
            </div>
            <div className="footer-middle">
                <h2 className="text-white text-2xl font-bold">Usefull Link</h2>
            <ul className="text-white text-1xl">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/services'>Services</Link></li>
            </ul>
            </div>
            <div className="footer-left">
            <h2 className="text-white text-2xl font-bold">Get in Touch</h2>
            <p className="text-white text-1xl font-bold">Mobile Number:+88 01755 514 662,</p>
            <p className="text-white text-1xl font-bold">Email:info@nubtkhulna.ac.bd</p>
                <address  className="text-white text-1xl font-bold">
                Shib Bari Circle, Sonadanga, Khulna-9100
                </address>
            </div>
        </div>
    );
};

export default Footer;