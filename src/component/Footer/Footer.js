import React from 'react';
import logo from '../../images/logo1.png';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-gray-100 flex justify-between p-12">
            <div className="footer-left">
                <img src={logo} alt="" />
            </div>
            <div className="footer-middle">
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/services'>Services</Link></li>
            </ul>
            </div>
            <div className="footer-left">
                <address>
                Shib Bari Circle, Sonadanga, Khulna-9100
                </address>
            </div>
        </div>
    );
};

export default Footer;