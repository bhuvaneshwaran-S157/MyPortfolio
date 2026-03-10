import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const icons = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/bhuvaneshwaran-s-16b4332a4",
    name: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/bhuvaneshwaran-S157",
    name: "GitHub",
  },
  { icon: <FaInstagram />, link: "#", name: "Instagram" },
];

const SocialIcons = () => {
  const socialRef=useRef(null);
  useEffect(()=>{
    gsap.from(socialRef.current,{
      x:-100,
      opacity:0,
      duration:2,
      ease:"power3.out"
    })
    
    gsap.to(socialRef.current,{
      x:0,
      opacity:1,
      duration:2,
      ease:"power2.out"
    })
    
  },[])
  return (
    <div className="flex gap-6 justify-center items-center bg-transparent py-6" ref={socialRef}>
      {icons.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
          style={{
            boxShadow: "0 0 0 rgba(0, 255, 255, 0)",
          }}
          whileHover={{
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)",
            transition: { duration: 0.0 },
            scale: 1.2,
          }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialIcons;
