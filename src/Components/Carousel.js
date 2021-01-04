import React, { Fragment } from 'react';
import BackgroundSlider from 'react-background-slider'
import '../Components/CSS/Carousel.css';
import img1 from "../Assets/image1.jpg";
import img2 from "../Assets/image2.jpg";
import img3 from "../Assets/image3.jpg";
import img4 from "../Assets/image4.jpg";
import img5 from "../Assets/image5.jpg";


const Carousel = () => {
    return (
    <div className='header'>
        <BackgroundSlider
  images={[img1, img2, img3, img4, img5]}
  duration={2} transition={10} />
  <h2 className='title'>Nurture your kids the best way they deserve.
</h2>  
    </div>


    );
};

export default Carousel;