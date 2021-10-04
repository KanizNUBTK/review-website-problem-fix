import React, { useEffect, useState } from 'react';
import ShowService from '../ShowService/ShowService';
import './Services.css';

const Services = () => {
    const [services,setServices] =useState([]);
    useEffect(()=>{
        fetch('./fakedata.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 m-20">
                {
                    services.map(service=><ShowService 
                        key={service.id}
                        service={service}
                         ></ShowService>)
                }
            </div>
        </div>
    );
};

export default Services;