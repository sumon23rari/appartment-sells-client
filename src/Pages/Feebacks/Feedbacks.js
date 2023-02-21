import React from 'react';
import Slider from 'react-slick';
import { feedbackContent } from './feedbackData';
import './feeback.css';
const Feedbacks = () => {
  
    var settings = {
        infinite: true,
        slidesToShow: 3,
        className: "center",
        centerMode: true,
        centerPadding: "90px",
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
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
      };
        return (
            <div className='py-5'>
                <div className='container py-3'>
            <h2 className='clientpart'> client feedback </h2>
            <Slider {...settings}>
            {
                feedbackContent.map(item=><div key={item.id}>
                    <div className="reviewCard">
                        <div className="reviewr">
                            <div className="partImg">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="partText">
                                <h4>{item.name}</h4>
                                <p>{item.desigation}</p>
                            </div>
                        </div>
                        <div className="reviewText">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>)
            }
            </Slider>
          </div>
          </div>
        );
      }
    

export default Feedbacks;