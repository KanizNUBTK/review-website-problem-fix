import React from 'react';

const ShowService = (props) => {
    const {deptName,school,img,description} = props.service;
    return (
        <>
            <div className="border-solid border-4 border-blue-500">
                <img className="w-full h-96" src={img} alt="" />
                <h2 className="text-2xl text-center font-bold ">{deptName}</h2> 
                <p className="text-2xl text-center font-bold ">School of {school}</p>
                <p><span className="text-1xl text-center font-bold ">Descriptiong:</span>{description}</p>
                <button className="bg-gray-300 px-4 py-4 font-bold border-4 border-blue-500 border-solid">Show details</button>
            </div>
        </>
        
    );
};

export default ShowService;