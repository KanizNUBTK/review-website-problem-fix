import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import serviceData from '../../fakedata/fakeData'

const Details = () => {
    const [services, setServices] = useState([]);
    const { detailsId } = useParams();
    console.log(detailsId);

    useEffect(() => {
        setServices(serviceData)
    }, [detailsId])


    const exactData = services.find(pd => pd.id == detailsId);

    console.log(exactData)
    console.log(detailsId)

    return (
        <div>
            <div className='grid md:grid-cols-2 gap-4 md:m-20'>
                <div className='shadow-xl'>
                    <img className="w-full h-96" src={exactData?.img} alt="" />
                </div>
                <div className='pl-4'>
                    <h2 className="text-2xl text-center font-bold py-2">{exactData?.deptName}</h2>
                    <p className="text-1xl text-center font-bold ">School of {exactData?.school}</p>
                    <h6 className="text-3xl text-center font-bold py-2">Total cost of this course:{exactData?.price}</h6>
                    <p className='text-justify'><span className="text-1xl text-center font-bold ">Descriptiong:</span>{exactData?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;