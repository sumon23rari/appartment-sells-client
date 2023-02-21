import React from 'react';
import useService from '../../Hooks/useService';

const ManageServices = () => {
    const [services,setServices]=useService();
    const handleDelete=id=>{
        const proced=window.confirm('are you sure delete this item')
        if (proced) {
            const url=`http://localhost:8000/services/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const remaining=services.filter(service=>service._id !==id)
                setServices(remaining)
            })
        }
    }
    return (
        <div className='mx-auto w-50'>
            <h3>this is manage services</h3>
            {
                services.map(service=><li key={service._id} className="text-success d-block">
                    {service.status}
                    <button onClick={()=>handleDelete(service._id)} className='btn btn-danger mx-2 mb-2'>delete</button>
                </li>)
            }
        </div>
    );
};

export default ManageServices;