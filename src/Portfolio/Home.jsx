import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useRef } from 'react';
import SocialIcons from './SocialIcons';
import Typed from 'typed.js';
import "tailwindcss";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  const leftInfo = useRef(null);
  useEffect(() => {
    if (leftInfo.current) {
      gsap.from(leftInfo.current, {
        x: -100,
        opacity: 0,
        duration: 2,
        ease: 'power3.out',
      })
      gsap.to(leftInfo.current, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftInfo.current,
          start: "top 100%",
          end: "top 100%",
          scrub: true,
        }
      })
    }
  }, [])
  return (
    <section className="min-h-screen  w-full bg-black grid md:grid-cols-2 sm:grid-cols-1 place-items-center gap-10  items-center">

      <motion.div
        initial={{ boxShadow: "0 0 2px cyan" }}
        animate={{
          boxShadow: [
            "0 0 5px cyan",
            "0 0 15px cyan",
            "0 0 25px cyan",
            "0 0 35px cyan",
            "0 0 25px cyan",
            "0 0 15px cyan",
            "0 0 5px cyan",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          repeatType: "loop",
        }}
        className="w-60  h-60 sm:w-90 sm:h-90 md:mb-0 -mb-12 md:w-120 md:h-120 rounded-full md:mt-6 mt-24  flex justify-center items-center order-1 md:order-2"
      >
        <img
          src="src/assets/IMG-20240127-WA0030.jpg"
          alt=""
          className="w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-lg transition-all duration-200 ease-out"
        />
      </motion.div>


      <div className="w-full max-w-xl order-2 md:order-1 mt-15 flex flex-col items-baseline gap-6 justify-baseline px-5">
        <div ref={leftInfo}>
          <h1 className="md:text-4xl text-white font-bold text-2xl">Hi, It's</h1>
          <h2 className="md:text-4xl md:mt-10 text-cyan-300 font-bold text-3xl">Bhuvaneshwaran S</h2>

          <br />
          <h3 className="text-white md:text-3xl text-2xl font-bold">I'm a  <Typedtext /></h3>
          <br />
          <p className='text-white md:text-xl '>
            Hi, I'm Bhuvanesh, a frontend developer focused on creating intuitive
            user experiences. I'm mastering React, JavaScript, and UI/UX design to
            build impactful digital solutions.
          </p>
        </div>
        <SocialIcons />
        <div className='flex gap-4'>
          <button className='md:px-6 px-4 md:text-base text-[15px] cursor-pointer bg-transparent border rounded-full border-cyan-500 py-3 '>Visit My Projects</button>
          <button className='md:px-6 px-4 cursor-pointer text-[15px] rounded-full text-white font-semibold bg-cyan-500 shadow-2xl hover:shadow-cyan-500/20 py-3 '>Download resume</button>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default Home

const Typedtext = () => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);
  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: [
        "Frontend Developer",
        "Java Programmer",
        "Web Designer",
        "UI/UX Enthusiast",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
    return () => { typedInstance.current.destroy(); }
  }, [])
  return (
    <span className="auto-type text-cyan-400 text-xl sm:text-2xl font-bold" ref={typedElement}></span>
  );
}