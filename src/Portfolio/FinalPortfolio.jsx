import React from 'react'
import NavBar from './NavBar'
import FooterS from './FooterS'
import Home from './Home'
import About from "./About";
import Projects from './Projects';
import Contact from './Contact';

const FinalPortfolio = () => {
  return (
    <div className='flex flex-col min-h-screen bg-black'>
      <NavBar/>
      <main className='flex-1'>
        <div id='home'><Home/></div>
        <div id='about'><About/></div>
        <div id='projects'><Projects/></div>
        <div id='contact'><Contact/></div>
      </main>
      <FooterS/>
    </div>
  )
}

export default FinalPortfolio
