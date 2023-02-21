import React from 'react';
import { Card } from 'react-bootstrap';
import Slider from 'react-slick';
import {blogContent} from './BlogData';
import './Blogs.css';

import { FaUser,FaTags,FaCalendarAlt} from 'react-icons/fa';

const Blogs = () => {
    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, }}
        onClick={onClick}
      />
    );
  }
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }
    return (
        <div id="blogs" className='py-5'>
            <div className="container py-3">
                <h5>News & Blogs</h5>
                <h3> Leatest News Feeds</h3>
                <Slider {...settings}>
        {
            blogContent.map(blog=><div key={blog.id}>
                 <Card className='mx-3'>
                  <div className='cardContent'>
      <Card.Img variant="top" src={blog.img}/>
      <Card.Body>
        <div className="cardTop"> 
        <span><FaUser></FaUser> by admin</span> <span><FaTags></FaTags>{blog.type}</span></div>
        <Card.Title className='cardmiddle'><p>{blog.title}</p></Card.Title>
        <hr />
        <div className='cardend'>
          <span><FaCalendarAlt className='text-danger'></FaCalendarAlt>{blog.date}</span>  <span className='text-danger'>read more</span>
          </div>
      </Card.Body>
      </div>
    </Card>
            </div>)
        }
                </Slider>
            </div>
        </div>
    );
};

export default Blogs;