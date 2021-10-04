import React from 'react';
import './CampusLife.css';
import cafe from '../../images/cafe.jpg';
import libr from '../../images/libr.jpg';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';
import img9 from '../../images/img9.jpg';

const CampusLife = () => {
    return (
        <div className="m-10">
            <div className="grid grid-cols-2">
                <div className="cafe-info">
                    <h2 className="text-5xl font-bold text-right mt-20 mr-10">CAFETERIA</h2>
                </div>
                <div className="cafe-ing">
                    <img className="w-3/4 h-3/4" src={cafe} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="library-img">
                    <img className="w-3/4 h-3/4 ml-20" src={libr} alt="" />
                </div>
                <div className="library-info">
                    <h2 className="text-5xl font-bold mt-20 text-left">Library</h2>
                </div>
            </div>
            <div>
                <h2 className="text-5xl font-bold text-center mb-8">Programs Arranged by Student</h2>
                <div className="grid grid-cols-3 gap-1">
                    <img className="h-5/6" src={img2} alt="" />
                    <img className="h-5/6" src={img1} alt="" />
                    <img className="h-5/6" src={img3} alt="" />
                    <img className="h-5/6" src={img4} alt="" />
                    <img className="h-5/6" src={img6} alt="" />
                    <img className="h-5/6" src={img7} alt="" />
                    <img className="h-5/6" src={img8} alt="" />
                    <img className="h-5/6" src={img5} alt="" />
                    <img className="h-5/6" src={img9} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CampusLife;