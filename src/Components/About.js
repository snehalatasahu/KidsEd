import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../Assets/About.jpg";
import "../Components/CSS/About.css";
import { FaPuzzlePiece, FaTrophy, FaMedal } from "react-icons/fa";
import Button from '@material-ui/core/Button';

const About = () => {
  return (
    <Container fluid>
      
        <Row className="about-section">
            <Col md={1}/>
          <Col md={5} className="about-section-col">
            <img className="about-img" src={img} alt="about" />
          </Col>
          <Col md={5} className="bullets-section">
            <h1 className="title-text">Why choose us?</h1>
            <h4 className="subtitle-text">
              <FaPuzzlePiece className="icon" /> Lorem ipsum dolor sit
              <p className="description-text">
                {" "}
                Provident, dicta. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa at cum obcaecati eos commodi tempore
                blanditiis odio maiores voluptatum esse.
              </p>
            </h4>
            <h4 className="subtitle-text">
              <FaTrophy className="icon" /> Lorem ipsum dolor sit
              <p className="description-text">
                {" "}
                Provident, dicta. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa at cum obcaecati eos commodi tempore
                blanditiis odio maiores voluptatum esse.
              </p>
            </h4>
            <h4 className="subtitle-text">
              <FaMedal className="icon" />
              Lorem ipsum dolor sit
              <p className="description-text">
                {" "}
                Provident, dicta. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa at cum obcaecati eos commodi tempore
                blanditiis odio maiores voluptatum esse.
              </p>
            </h4>
          </Col>
          <Col md={1}/>
        </Row>
      
      
        <Row className="about-section">
        <Col md={1}/>
        <Col md = {5} md={{order:'2'}} className="about-section-col">
            <img className="about-img" src={img} alt="about" />
          </Col>
          <Col md = {5} md={{order:'1'}} className="bullets-section">
            <h1 className="title-text">Development Structure</h1>
            <h4 className="subtitle-text">
              <FaPuzzlePiece className="icon" /> Lorem ipsum dolor sit
              <p className="description-text">
                {" "}
                Provident, dicta. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa at cum obcaecati eos commodi tempore
                blanditiis odio maiores voluptatum esse.
              </p>
            </h4>
            <h4 className="subtitle-text">
              <FaTrophy className="icon" /> Lorem ipsum dolor sit
              <p className="description-text">
                {" "}
                Provident, dicta. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa at cum obcaecati eos commodi tempore
                blanditiis odio maiores voluptatum esse.
              </p>
            </h4>
            <div className="button"> <Button size="large" variant="contained">
        Learn More
      </Button></div>
          </Col>

          <Col md={1}/>
        </Row>
      
      
        <Row className="about-section">
        <Col md={1}/>
          <Col md={5} className="about-section-col">
            <img className="about-img" src={img} alt="about" />
          </Col>
          <Col md={5} className="bullets-section">
            <h1 className="title-text">Tips for parents</h1>
            <h4 className="subtitle-text">
              <FaPuzzlePiece className="icon" /> Lorem ipsum dolor sit
              <p className="description-text">
                {" "}
                Provident, dicta. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa at cum obcaecati eos commodi tempore
                blanditiis odio maiores voluptatum esse.
              </p>
            </h4>
            <h4 className="subtitle-text">
              <FaTrophy className="icon" /> Lorem ipsum dolor sit
              <p className="description-text">
                {" "}
                Provident, dicta. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Culpa at cum obcaecati eos commodi tempore
                blanditiis odio maiores voluptatum esse.
              </p>
            </h4>
            <div className="button"> <Button size="large" variant="contained">
        Learn More
      </Button></div>
           
          </Col>
          <Col md={1}/>
        </Row>
        </Container>
      
    
  );
};

export default About;
