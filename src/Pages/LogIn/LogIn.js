import React, { useRef } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogIn from '../Shared/SocialLogIn/SocialLogIn';
import './logIn.css';

const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const forgetRef=useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, errors] = useSendPasswordResetEmail(
        auth
      );
      let errorElement;
      if (loading || sending) {
          return <Loading></Loading>
      }
      if (user) {
          navigate(from, { replace: true });
      }
      if (error) {
          errorElement=
          <div>
              <p className='text-danger'>Error:{error?.message}</p>
          </div>
      }
      const resetPassword=async()=>{
          const email = emailRef.current.value;
          if (email) {
              await sendPasswordResetEmail(email)
              toast('sent email')  
          }
          else{
              toast('please enter an email address')
          }
          
      }
      const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }
      const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <SocialLogIn></SocialLogIn>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='d-block mx-auto w-50' variant="primary" type="submit">
                    logIn
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius Car? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forgate Password? <button className='text-danger btn btn-link text-decoration-none pe-auto' onClick={resetPassword}>resetpassword</button> </p>
            <ToastContainer />
        </div>
    );
};

export default LogIn;