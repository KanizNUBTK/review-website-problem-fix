import React from 'react';
import engn from '../../images/engn.jpg';
import bba from '../../images/bba.jpg';
import hum from '../../images/hum.jpg';
import amc from '../../images/amc.jpg';
import './ShowSchool.css';
import { Link } from 'react-router-dom';

const ShowSchool = () => {

    return (
        <>
            <div>
                <div>
                    <img className="w-full h-2/3" src={engn} alt="" />
                </div>
                <button className="btn w-full text-2xl border-solid border-2 border-light-blue-500 px-4 py-4 font-bold "><Link to="/service"> Show details</Link></button>

            </div>
            <div>
                <div>
                    <img className="w-full h-2/3" src={bba} alt="" />
                </div>
                <button className="btn w-full text-2xl px-4 py-4 font-bold border-solid border-2 border-light-blue-500"><Link to="/service"> Show details</Link></button>
            </div>
            <div>
                <div>
                    <img className="w-full h-2/3" src={hum} alt="" />
                </div>
                <button className="btn w-full text-2xl px-4 py-4 font-bold border-solid border-2 border-light-blue-500"><Link to="/service"> Show details</Link></button>
            </div>
            <div>
                <div>
                    <img className="w-auto h-12 other-img" src={amc} alt="" />
                    <div className="others-prg">
                        <p className="py-1 text-white text-2xl text-center">Others servics for student</p>
                    </div>
                </div>
                <button className="btn other w-full text-2xl px-4 py-4 font-bold border-solid border-2 border-light-blue-500"><Link to="/service"> Show details</Link></button>
            </div>
        </>
    );
};

export default ShowSchool;