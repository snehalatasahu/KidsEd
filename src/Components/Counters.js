import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { FaUser, FaChalkboardTeacher, FaBook } from "react-icons/fa";

import CountUp from "react-countup";

import "../Components/CSS/Counters.css";

const Counters = () => {
  return (
    <Container className="counter-section">
      <Row>
        <Col md={4} sm={12} className="cards">
          
              <FaUser className='icon'/>
            <h2 className='count'><CountUp end={150} delay={2} duration={10} /></h2>
            <h5 className='subtitle'>STUDENTS</h5>
          
        </Col>

        <Col md={4} sm={12} className="cards">
          
              <FaChalkboardTeacher className='icon'/>
            <h2><CountUp end={50} delay={2} duration={8} /></h2>
            <h5 className='subtitle'>INSTRUCTORS</h5>
          
        </Col>

        <Col md={4} className="cards">
          
              <FaBook className='icon'/>
              <h2><CountUp end={120} delay={2} duration={10} /></h2>
              <h5 className='subtitle'>COURSES</h5>
            
          
        </Col>
      </Row>
    </Container>
  );
};

export default Counters;
