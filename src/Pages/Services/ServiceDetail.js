import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useSeviceDetail from '../../Hooks/useServiceDetail';
import { AiFillHeart} from "react-icons/ai";
import {IoLocation} from "react-icons/io5";
import Loading from '../Shared/Loading/Loading';
const ServiceDetail = () => {
    const {serviceId}=useParams();
  const [service]=useSeviceDetail(serviceId);

  const {img,address1,address2,status,price,type,_id}=service;
  console.log('img',img)
//   if(!img){
// return <Loading></Loading>
//   }
    return (
        <div className=''>
            <div className="col-lg-4 mt-5 mx-auto">
             <h2><small>You are service to detail: {serviceId}</small></h2>
        {/* <h3>{service?.name}</h3> */}
        <img src={service?.img} alt="service.img" />
        <br />
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
                    
                </div>
            </div>
        <Link to={`/checkout/${serviceId}`}>
            <button className='btn btn-primary'>Proceed Checkout</button>
        </Link>
    </div>
    </div>
    );
};

export default ServiceDetail;