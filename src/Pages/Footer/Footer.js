import React from 'react';
import { MdEmail,MdLocationPin,MdFacebook } from "react-icons/md";
import {FiPhone } from "react-icons/fi";
import {FaInstagram,FaYoutube} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import './footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <strong className='text-white'>tamjid Corporate Office </strong>
                    <br />
                    <span><MdLocationPin></MdLocationPin>  tamjid Center, 72, Mohakhali</span> <br />
                    <span>C/A, Dhaka-1212</span>
                    <br /><br />
                    <strong className='text-white'>email</strong>
                    <br />
                    <span><MdEmail></MdEmail> info@tamjidgroup.com</span>
                    
                    <br /><br />
                    <strong className='text-white'>Phone</strong> <br />
                    <span><FiPhone></FiPhone>880258814449, 09610016504, 09614 670 670</span><br />

                </div>
                <div className="col-lg-4">
                    <strong className='text-white'>Uttara Office Corporate Office </strong>
                    <br />
                    <span>Rupayan City Uttara, Sector-12</span> <br />
                    <span>C/A, Dhaka-1212</span>
                   <br /><br />
                    <strong className='text-white'>email</strong>
                    <br />
                    <span>callcenter@tamjidgroup.com</span>
                    
                    <br /><br />
                    <strong className='text-white'>Phone</strong> <br />
                    <span>880258814449, 09610016504, 09614 670 670</span><br />

                </div>
                <div className="col-lg-4">
                    <strong className='text-white'> fllow us</strong>
                    <br />
                    <p className='text-white textIcon'>
                    <span><MdFacebook></MdFacebook></span><span><IoLogoLinkedin></IoLogoLinkedin></span> <span><FaInstagram></FaInstagram></span><span><FaYoutube></FaYoutube></span>
                    </p>
                    
                   
                </div>
             
                <div className="col-lg-12 pt-5">
                    <div className=" text-center text-white">
                        copyright &#169;2023tamjidproperty.com
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;