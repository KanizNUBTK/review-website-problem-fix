import React from 'react';
import './About.css';
import vc from '../../images/vc.jpg';
import reg from '../../images/reg.jpg';
import dean from '../../images/dean.jpg';

const About = () => {
    return (
        <div>
            <div className="about m-8">
                <h1 className="text-3xl font-bold p-8">ABOUT NUBTK</h1>
                <p className="px-8">According to the “Private University Act, 2010”, the Trustee board submitted a proposal to UGC to establish a full-fledged university in Khulna named “Northern University of Business and Technology Khulna (NUBT Khulna)”. After the inspection (by UGC) and verification of all requirements, the Govt. gave the approval of “Northern University of Business and Technology Khulna” as a new full-fledged university on 29th December 2015. After getting the approval from the Govt., inauguration ceremony of NUBT Khulna was observed on 09-01-2016 with the presence of the honorable Prime Minister’s Economic Advisor Dr. Moshiur Rahman as chief guest. The inauguration ceremony was presided over by the Vice-Chancellor of NUBT Khulna Trust, Prof. Dr. AYM Abdullah.</p>
            </div>
            <div className="flex justify-center">
                <div>
                    <img className="h-60 ml-24" src={vc} alt="" />
                
                <h1 className="text-center">Professor Dr. A.Y.M. Abdullah</h1>
                <h5 className="text-center">Vice-Chancellor</h5>
                <h6 className="text-center">Northern University of Business and Technology Khulna.</h6>
               
            </div>   
            </div>
            <div className="flex justify-center gap-14 mt-10 mb-10">
                <div className="registrar">
                    <img className="h-60 ml-24" src={reg} alt="" />
                    <h1 className="text-center">Dr. Md. Shah Alam</h1>
                    <h5 className="text-center">Registrar</h5>
                    <h6 className="text-center">Northern University of Business and Technology Khulna.</h6>
                </div>
                <div className="dean">
                    <img className="h-60 ml-24" src={dean} alt="" />
                    <h2 className="text-center">Dr. Anwarul Haque Joarder</h2>
                    <h5 className="text-center">Professor and Dean</h5>
                    <h6 className="text-center">Northern University of Business and Technology Khulna.</h6>
                </div>
            </div>
        </div>
    );
};

export default About;