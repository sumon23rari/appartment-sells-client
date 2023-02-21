import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import google from '../../../assets/social/google1.png';
import githubs from '../../../assets/social/github.png';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate();
    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user|| user1) {
        console.log("userinfo",user||user1)
        return navigate('/home')
    }
    return (
        <div>
                <button 
        onClick={()=> signInWithGoogle()}
       className='btn btn-success border-0 d-block mx-auto'>
        <img style={{width:"30px"}} src={google} alt="" />
        <span className='px-2'>  Google SignIn </span>
       </button>
       <button 
       onClick={()=> signInWithGithub()}
       className='btn btn-success border-0 d-block mx-auto  my-3'>
        <img style={{width:"30px"}} src={githubs} alt="" />
        <span className='px-2'>  Github SignIn </span>
       </button>
      
       {errorElement}
       <div className='d-flex align-items-center'>
       <div style={{height:"1px"}} className='bg-primary w-50'></div>
        <p className='mt-2 px-2'>or</p>
        <div  style={{height:"1px"}} className='bg-primary w-50'></div>
       </div>
        </div>
    );
};

export default SocialLogIn;