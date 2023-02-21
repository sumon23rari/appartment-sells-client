import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [orders,setOrders]=useState([]);
    const [user]=useAuthState(auth);
    useEffect(()=>{
        const email=user?.email;
        const getOrders=async()=>{
            const url=`http://localhost:8000/orders?email=${email}`
            const {data}=await axios.get(url);
            setOrders(data)
        }
        getOrders()
    },[user])
    return (
        <div className='mx-auto w-50'>
            <h3>this is order page</h3>
            <h4 className='text-success'>orders number:{orders?.length} </h4>
              {
                orders.map(order=><li key={order._id} className='text-success'><span className='mx-3'>{order.email}</span> name: {order?.serviceStatus}</li>)
            }
        </div>
    );
};

export default Orders;