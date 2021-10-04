import React from 'react';

const ShowService = (props) => {
    const {deptName,school,img,price,description} = props.service;
    return (
        <>
            <div className="border-solid border-4 border-blue-500">
                <img className="w-full h-96" src={img} alt="" />
                <h2 className="text-2xl text-center font-bold ">{deptName}</h2> 
                <p className="text-1xl text-center font-bold ">School of {school}</p>
                <h6 className="text-1xl text-center font-bold ">Total cost of this course:{price}</h6>
                <p><span className="text-1xl text-center font-bold ">Descriptiong:</span>{description}</p>
            </div>
        </>
        
    );
};

export default ShowService;