import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img2 from '../Assets/emotional.jpg';
import img1 from '../Assets/mental.jpg';
import img3 from '../Assets/moral.jpg';
import img4 from '../Assets/physical.jpg';
import './CSS/SubSections.css'



const SubSections = () => {
    return (
<Container fluid className='sub-section parallax'>
    <h1 className='title-text'>All Round Development of your Child</h1>
    <Row>
        <Col lg={3} md={6} sm={12}>
        <div className='img-container'>
         <img className='sub-img' src={img1}/>
         <div className='text-over-img-section'><h3 className='text-over-img'>Mental</h3></div>
        </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <div className='img-container'>
         <img className='sub-img' src={img2}/>
         <div className='text-over-img-section'><h3 className='text-over-img'>Emotional</h3></div>
        </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <div className='img-container'>
         <img className='sub-img' src={img3}/>
         <div className='text-over-img-section'><h3 className='text-over-img'>Moral</h3></div>
        </div>
        </Col>
        <Col lg={3} md={6} sm={12}>
        <div className='img-container'>
         <img className='sub-img' src={img4}/>
         <div className='text-over-img-section'><h3 className='text-over-img'>Physical</h3></div>
        </div>
        </Col>
       
    </Row>
    {/* <div fluid className='parallax'/> */}
</Container>
    );
};

export default SubSections;