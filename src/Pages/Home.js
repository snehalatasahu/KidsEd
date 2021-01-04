import React from "react";
import Container from "@material-ui/core/Container";
import Carousel from "../Components/Carousel";
import Counters from "../Components/Counters";
import BuyNow from "../Components/BuyNow";
import About from "../Components/About";
import Vision from "../Components/Vision";
import SubSections from "../Components/SubSections";
import Footer from "../Components/Footer";


const Home = () => {
  return (
    <>
      <Carousel/>
      <Counters/>
      <About/>
      <Vision/>
      <SubSections/>
      <Footer/>
    </>
  );
};

export default Home;
