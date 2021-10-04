import React from 'react';

const ShowSchool = (props) => {
    const {dp,}=props.service;
    return (
        <div className="border-solid border-4 border-light-blue-500">
            <h2>{dp}</h2>
        </div>
    );
};

export default ShowSchool;