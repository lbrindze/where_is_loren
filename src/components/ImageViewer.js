import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default ({images, imgUri}) => {
  return (
    <div>
      { images.map((image, index) => {
       return (
         <div key={index} >
           <img src={imgUri + image}  style={{maxHeight:'350px', maxWidth:'350px'}} alt=''/>
         </div>
       );
      })}
    </div>
  );
}
