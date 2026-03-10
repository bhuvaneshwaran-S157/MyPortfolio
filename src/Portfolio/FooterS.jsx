import React, { useRef } from 'react'
import SocialIcons from './SocialIcons'
import ScrollAnimation from './ScrollAnimation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/all'

const FooterS = () => {
  const footerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      footerRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'back.inOut',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          end: 'center 60%',
          scrub: true,
          // markers: true, // Uncomment for debug
        },
      }
    );
  }, [footerRef]);
  return (
    <footer ref={footerRef} className='py-5 bg-gray-900 flex flex-col space-y-5 bottom-0'>
      <SocialIcons />
      <p className="text-lg font-semibold text-white text-center ">© 2025 Bhuvaneshwaran S</p>
    </footer>
  )
}

export default FooterS
