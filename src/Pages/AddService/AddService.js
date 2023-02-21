import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>  {
        const url=`http://localhost:8000/services`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json' 
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
        data.target.reset();
    };
    return (
        <div className='mx-auto w-50 mt-5'>



        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2' placeholder='type' {...register("type", { required: true, maxLength: 20 })} />
        <input className='mb-2' placeholder='status' {...register("status", { required: true, maxLength: 20 })} />
                  
                    <input className='mb-2' placeholder='address1' type="text" {...register("address1")} />
                    <input className='mb-2' placeholder='address2' type="text" {...register("address2")} />
                    <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='photourl' type="text" {...register("img")}/>
                    <input type="submit" value="addService"/>
        </form>
          
        
            </div>
    );
};

export default AddService;