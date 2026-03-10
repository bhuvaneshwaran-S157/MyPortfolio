import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import assets from '../assets/assets';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial animation with stagger
  useEffect(() => {
    if (navRef.current) {
      // Navbar entrance animation
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Logo animation
      gsap.fromTo(logoRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1, ease: "elastic.out(1, 0.5)", delay: 0.3 }
      );

      // Menu items stagger animation
      gsap.fromTo(menuItemsRef.current,
        { y: -30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5
        }
      );
    }
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.4, ease: "power2.inOut" }
        );
        
        // Animate mobile menu items
        gsap.fromTo(".mobile-nav-item",
          { x: -20, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.3, delay: 0.2 }
        );
      }
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", to: "home", icon: "🏠" },
    { name: "About", to: "about", icon: "👨‍💻" },
    { name: 'Skills', to: 'skills', icon: "⚡" },
    { name: "Projects", to: "projects", icon: "🚀" },
    { name: "Contact", to: "contact", icon: "📫" },
  ];

  // Hover animation for menu items
  const handleMouseEnter = (index) => {
    gsap.to(menuItemsRef.current[index], {
      y: -2,
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(menuItemsRef.current[index], {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#0a0a0f]/95 backdrop-blur-lg shadow-2xl" 
            : "bg-[#0a0a0f]"
        }`}
        ref={navRef}
        style={{
          borderBottom: scrolled ? "1px solid rgba(108, 92, 231, 0.2)" : "none",
          boxShadow: scrolled ? "0 10px 30px -10px rgba(108, 92, 231, 0.3)" : "none"
        }}
      >
        <div className="container mx-auto md:px-6 px-5 py-3 flex items-center justify-between">
          {/* Logo with enhanced animation */}
          <a 
            href="/" 
            className="relative group flex items-center gap-3"
            ref={logoRef}
          >
            <div className="relative">
              <img 
                src={assets.java} 
                alt="Logo" 
                className="md:w-12 w-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="text-cyan-300 text-xl font-bold relative overflow-hidden">
            
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </a>

          {/* Desktop Menu with enhanced styling */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ name, to }, index) => (
              <div
                key={to}
                ref={el => menuItemsRef.current[index] = el}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="active-nav-link"
                  onSetActive={() => setActiveLink(to)}
                  className={`
                    relative px-4 py-2 mx-1 cursor-pointer font-medium transition-all duration-300
                    ${activeLink === to 
                      ? "text-cyan-300" 
                      : "text-gray-300 hover:text-cyan-200"
                    }
                  `}
                >
                  {name}
                  {/* Animated underline */}
                  <span 
                    className={`
                      absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 
                      transform transition-transform duration-300
                      ${activeLink === to ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                  {/* Glowing dot */}
                  {activeLink === to && (
                    <span className="absolute -top-1 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
                  )}
                </Link>
              </div>
            ))}
            
            {/* Theme Toggle with animation */}
            <div className="ml-4 hover:rotate-12 transition-transform duration-300">
              {/* <ThemeToggle /> */}
            </div>
          </div>

          {/* Mobile Menu Toggle Button - Enhanced */}
          <button
            onClick={toggleMenu}
            type="button"
            className="relative md:hidden w-10 h-10 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center">
              {isMenuOpen ? (
                <svg 
                  className="w-6 h-6 text-white transform transition-transform duration-300 rotate-90" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg 
                  className="w-6 h-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu with enhanced glassmorphism */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="backdrop-blur-xl bg-[#0a0a0f]/95 border-t border-cyan-500/20 px-6 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map(({ name, to, icon }, index) => (
                <Link
                  key={to}
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsMenuOpen(false)}
                  className="mobile-nav-item group flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </span>
                  <span className="text-cyan-300 font-medium text-lg flex-1">
                    {name}
                  </span>
                  <svg 
                    className="w-5 h-5 text-cyan-300 transform translate-x-0 opacity-0 group-hover:translate-x-2 group-hover:opacity-100 transition-all duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Add custom CSS for animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .active-nav-link {
          position: relative;
          text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
        
        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
};

export default NavBar;