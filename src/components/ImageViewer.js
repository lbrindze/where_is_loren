import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default ({images}) => {
  return (
    <Slider {...settings}>
      { images.map((image, index) =>{
       return (
         <div style={{maxHeight:'500px', maxWidth:'500px'}} >
           <img src={image} alt='' key={index} />
         </div>
       );
      })}
    </Slider>
  );
}
