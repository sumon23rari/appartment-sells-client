import React from 'react';
import { AiFillHeart} from "react-icons/ai";
import {IoLocation} from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import './service.css';
const Service = ({service}) => {
    const navigate=useNavigate();
   const {img,address1,address2,status,price,type,_id}=service;
   const handleServiceDetail=(id)=>{
        navigate(`/service/${id}`)
   }
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 shadow-sm'>
            <img src={img} className="w-100" alt="" />
            <div className="text p-4">
                <div className="catagory d-flex">
                    <span className={type==="For sell"?'active':'deactive'}>{type}</span>
                    <AiFillHeart className='icon'></AiFillHeart>
                </div>
                <h5 className='text-start pt-2'>{status}</h5>
                <h6 className='text-start'>{address1}</h6>
                <p className='locationClass'><IoLocation></IoLocation> {address2}</p>
                <div className="button d-flex">
                    <span>price:{price}</span>
                    <button onClick={()=>handleServiceDetail(_id)}>let chat</button>
                </div>
            </div>
        </div>
    );
};

export default Service;