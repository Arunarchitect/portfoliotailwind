import React from 'react'
import Hero from './UI/Hero';
import Services from './UI/Services';
import Portfolio from './UI/Portfolio';
import Contact from './UI/Contact';
import i2Img from "../images/p1.jpg";
import usePageSEO from './hooks/usePageSEO';

const Homepage = () => {
  return (
    <>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
    </>
  )
}

export default Homepage