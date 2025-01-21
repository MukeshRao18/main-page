import React from 'react';
import Hero from './HomeDesign/Hero';
import HowItWorks from './HomeDesign/HowItWorks';
import Frequently from './HomeDesign/Frequently';
import GetStarted from './HomeDesign/GetStarted';
import Carousel from './HomeDesign/Carousel';
import Features from './HomeDesign/Features';
import Plan from './HomeDesign/Plan';
import KeyFeatures from './HomeDesign/KeyFeatures';
const Home = () => {
  return (
    <div className='bg-gradient-to-br from-lightBlue-300 to-white via-blue-500'>
        <Hero/>
        <HowItWorks/>
        <KeyFeatures/>
        <GetStarted/>
        <Carousel/>
        <Plan/>
        <Frequently/>
    </div>
  );
};

export default Home;