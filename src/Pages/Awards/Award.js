import React from 'react';
import { IoTrophy } from "react-icons/io5";
import './Award.css';
const Award = ({award}) => {
    const {awardquntity,awardType}=award;
    return (
        <div className='col-lg-3'>
            <div className="box">
            <div className="awardIcon">
                <IoTrophy></IoTrophy>
            </div>
            <h1>{awardquntity}</h1>
            <p>{awardType}</p>
            </div>
        </div>
    );
};

export default Award;