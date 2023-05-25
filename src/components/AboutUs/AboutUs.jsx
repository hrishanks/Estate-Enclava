import React from 'react';
import './AboutUs.css';
import Header from '../Header/Header';
import GetStarted from '../GetStarted/GetStarted';
import Fotter from '../Fotter/Fotter';

const AboutUs = () => {
  return (
    <>
      <Header/>
      <div className="about-us" id='AboutUs'>
      <h1>About Us</h1>
      <p>Welcome to Estate Enclave ! We are a leading real estate agency committed to helping you find your dream home.</p>
      <p>Our team of experienced agents is dedicated to providing exceptional service and guiding you through every step of the home-buying process.</p>
      <p>Whether you're a first-time homebuyer or an experienced investor, we have the expertise and resources to meet your needs.</p>
      <p>Contact us today to learn more about how we can assist you in finding the perfect property.</p>
    </div>
    
    <GetStarted/>
    <Fotter/>
    </>
  );
};

export default AboutUs;
