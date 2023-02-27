import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useState } from 'react';
const CheckOut = () => {
    const {serviceId}=useParams();
    const [service]=useServiceDetail(serviceId);
    const [user]=useAuthState(auth);
    const handlePlaceOrder=event=>{
        event.preventDefault()
        const orderd={
            email:user.email,
            serviceStatus:service.status,
            serviceId:serviceId,
            price:service.price,
            address:event.target.address.value,
            phoneNo:event.target.number.value
        }
        axios.post(`http://localhost:8000/orders`,orderd)
        .then(response=>{
            const {data}=response;
            if (data.insertedId) {
                toast("your order is booked")
            }
            event.target.reset()
           })
    }
    return (
        <div className='pt-5 text-center w-50 mx-auto'>
        <h1 className='text-muted'>please order {service?.name}</h1>
        <form onSubmit={handlePlaceOrder}>
            <input className='w-100 mb-2' type="text" name="name" value={user?.displayName} placeholder='name' required /><br />
            <input className='w-100 mb-2' type="email" name="email" value={user?.email} placeholder='email' required /><br />
            <input className='w-100 mb-2' type="text" name="service" value={service?.status} placeholder='service' required /><br />
            <input className='w-100 mb-2' type="text" name="address" autocomplete="off" placeholder='address' required /><br />
            <input className='w-100 mb-2' type="number" name="number" placeholder='number' required /><br />
            <input className='w-50 ml-25 btn btn-primary' type="submit" value="place order" />

        </form>
    </div>
    );
};

export default CheckOut;