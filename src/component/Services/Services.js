import React, { useEffect, useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import serviceData from '../../fakedata/fakeData'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        setServices(serviceData)
    }, [])
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-4 m-20">
                {
                    services.map(service => <div className="border-solid border p-4 shadow-2xl border-gray-200 rounded-lg">
                        <img className="w-full h-60" src={service.img} alt="" />
                        <h2 className="text-xl text-center font-semibold ">{service.deptName}</h2>
                        <div className='flex justify-center mt-2'>
                            <Link to={`/details/${service.id}`} style={{ textDecoration: 'none' }}><button className='bg-purple-500 px-8 border rounded text-xl py-2 text-white'>Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};
export default Services;