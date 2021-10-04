import React, { useEffect, useState } from 'react';
import './Home.css';
import banner from '../../images/banner1.jpg';
import ShowSchool from '../ShowSchool/ShowSchool';

const Home = () => {
    const [services,setServices] =useState([]);
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="" />
            </div>
            <div>
                <h2 className="font-bold text-4xl text-center m-10">Our services</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 m-0 mb-10">
                {
                    services.map(service=><ShowSchool key={service.id} service={service}></ShowSchool>)
                }
            </div>
        </div>
    );
};

export default Home;