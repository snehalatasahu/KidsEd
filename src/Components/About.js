import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../Assets/About.jpg"
import "../Components/CSS/About.css";
import {FaPuzzlePiece, FaTrophy, FaMedal } from "react-icons/fa";

const About = () => {
    return (
<Container fluid className='about-section'>
    <Row>
        <Col md={6} className='about-section-col'>
        <img className='about-img' src={img} alt="about"/>
        </Col>
        <Col md={6} className='bullets-section'>

    <h5 className='bullets-title'><FaPuzzlePiece className='icon'/> Lorem ipsum dolor sit<p className='bullets-subtitle'> Provident, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at cum obcaecati eos commodi tempore blanditiis odio maiores voluptatum esse.</p></h5>
    <h5 className='bullets-title'><FaTrophy className='icon'/> Lorem ipsum dolor sit<p className='bullets-subtitle'> Provident, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at cum obcaecati eos commodi tempore blanditiis odio maiores voluptatum esse.</p></h5>
    <h5 className='bullets-title'><FaMedal className='icon'/>Lorem ipsum dolor sit<p className='bullets-subtitle'> Provident, dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at cum obcaecati eos commodi tempore blanditiis odio maiores voluptatum esse.</p></h5>

        </Col>
    </Row>
</Container>
    );
};

export default About;