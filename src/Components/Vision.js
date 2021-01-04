import React from 'react';
import Container from "react-bootstrap/Container";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import test1 from "../Assets/testimonial1.jpg";
import test2 from "../Assets/testimonial2.jpg";
import test3 from "../Assets/testimonial3.jpg";
import "./CSS/Vision.css";

const Vision = () => {
    return (
<Container className='vision-section'>
    <Container >
    <h1 className='vision-title'>OUR VISION</h1>
    <h4 className='vision-subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rerum quis totam culpa harum obcaecati, ipsa quibusdam reprehenderit distinctio autem.</h4>
    </Container>

    <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={61000}
      >
        <div>
          <img src={test1}/>
          <div className="myCarousel">
            <h3>Ankit Sahu</h3>
            <h4>App Developer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src={test2} />
          <div className="myCarousel">
            <h3>Itishree Behera</h3>
            <h4>AI Developer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src={test3}/>
          <div className="myCarousel">
            <h3>Snehalata Sahu</h3>
            <h4>Web Developer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>

    
</Container>
    );
};

export default Vision;