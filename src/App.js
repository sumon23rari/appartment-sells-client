import logo from './logo.svg';
import './App.css';
import Navbars from './Pages/Shared/Navbars';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Notfound from './Pages/Notfound/Notfound';
import ServiceDetail from './Pages/Services/ServiceDetail';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Register from './Pages/LogIn/Register';
import LogIn from './Pages/LogIn/LogIn';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import CheckOut from './Pages/CheckOut/CheckOut';
import ManageServices from './Pages/ManageServices/ManageServices';
import AddService from './Pages/AddService/AddService';
import Orders from './Pages/Orders/Orders';
function App() {
 
  return (
    <div className="App">
    <Navbars></Navbars>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<LogIn></LogIn>}></Route>
      <Route path='/checkOut/:serviceId' element={
        <RequireAuth><CheckOut></CheckOut></RequireAuth>
      }></Route>
      <Route path="/manageservice" element={
        <RequireAuth>
          <ManageServices></ManageServices>
        </RequireAuth>
      }></Route>
      <Route path="/order" element={<RequireAuth>
        <Orders></Orders>
      </RequireAuth>}></Route>
       <Route path="/addservice" element={
        <RequireAuth>
          <AddService></AddService>
        </RequireAuth>
      }></Route>
      
      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes>
    <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
