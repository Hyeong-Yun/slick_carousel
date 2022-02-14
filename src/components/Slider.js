import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss';

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

const ImageSlider = () => {
    return (
        <Slider {...settings}>
           <div className = "card-wrapper">
               <div className='card'>
                   <div className='card-image'>
                       <img src = "https://cdn.pixabay.com/photo/2021/11/07/10/14/hike-6775216_960_720.jpg" />
                   </div>
               </div>
              <div className='details'>
                    <h2>Jhon Doe <span className='job-title'>UI Developer</span></h2>
              </div>
           </div>
           <div className = "card-wrapper">
               <div className='card'>
                   <div className='card-image'>
                       <img src = "https://cdn.pixabay.com/photo/2021/11/07/10/14/hike-6775216_960_720.jpg" />
                   </div>
               </div>
              <div className='details'>
                    <h2>Jhon Doe <span className='job-title'>UI Developer</span></h2>
              </div>
           </div>
           <div className = "card-wrapper">
               <div className='card'>
                   <div className='card-image'>
                       <img src = "https://cdn.pixabay.com/photo/2021/11/07/10/14/hike-6775216_960_720.jpg" />
                   </div>
               </div>
              <div className='details'>
                    <h2>Jhon Doe <span className='job-title'>UI Developer</span></h2>
              </div>
           </div>
           <div className = "card-wrapper">
               <div className='card'>
                   <div className='card-image'>
                       <img src = "https://cdn.pixabay.com/photo/2021/11/07/10/14/hike-6775216_960_720.jpg" />
                   </div>
               </div>
              <div className='details'>
                    <h2>Jhon Doe <span className='job-title'>UI Developer</span></h2>
              </div>
           </div>
        </Slider>
    );
};

export default ImageSlider;