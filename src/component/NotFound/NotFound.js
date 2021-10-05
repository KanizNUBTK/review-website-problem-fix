import React from 'react';
import error from '../../images/error.jpg';

const NotFound = () => {
    return (
        <div className="flex justify-center">
            <img className="m-10" src={error} alt="" />
        </div>
    );
};

export default NotFound;