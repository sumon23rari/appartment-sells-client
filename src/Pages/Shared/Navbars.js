import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navbar.css';
import auth from '../../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import Loading from './Loading/Loading';
const Navbars=()=> {
  const [signOut, loading] = useSignOut(auth);
  const [user, loading1] = useAuthState(auth);
  if(loading || loading1){
    return <Loading></Loading>
  }
  const handleSignOut=()=>{
    signOut(auth)
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className='text-white' >tamjid esate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link href="home#blogs">Register</Nav.Link>
         
          </Nav>
          <Nav>

            {
              user && 
              <>
              <Nav.Link as={Link} to="/manageservice">manageservice</Nav.Link> 
              <Nav.Link as={Link} to="/addservice">addService</Nav.Link> 
              <Nav.Link as={Link} to="/order">order</Nav.Link> 
              </>
            }
          
           {
            user?<button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>:<Nav.Link as={Link} to="/login">
            logIn
          </Nav.Link>
           }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;