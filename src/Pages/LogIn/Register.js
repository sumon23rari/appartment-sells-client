import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogIn from '../Shared/SocialLogIn/SocialLogIn';
import './register.css';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [agree,setAgree]=useState(false);
      const navigate=useNavigate();
      const navigateLogin=()=>{
        navigate('/login')
      }
      const handleRegister=async(event)=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        createUserWithEmailAndPassword(email,password);
        console.log(event);
      }
    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center',marginTop:'25px',marginBottom:'25px'}}>Please Register</h2>
            <SocialLogIn></SocialLogIn>
            <form className='mt-3' onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree?'text-primary':'text-danger'} htmlFor="terms">Accept Genius Car Terms and Condition</label> */}
                <label className={`ps-2 ${agree?'':'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Condition</label>
                <input
                disabled={!agree}
                className='d-block w-50 mx-auto btn btn-success mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;