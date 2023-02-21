import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
  
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='container'>
             <h2 className='text-info text-center p-5'>Our propertis</h2>
             <div className="row">
            {
                services.map(service=><Service
                key={service._id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;