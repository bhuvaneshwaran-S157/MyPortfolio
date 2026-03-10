// import React, { useRef } from 'react';
// import assets from '../assets/assets.js';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const Skills = () => {
//   const skillRef = useRef(null);
//   const skill = useRef(null);

//   useGSAP(() => {
//     const boxes = skillRef.current.querySelectorAll('img');

//     gsap.fromTo(
//       boxes,
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: skillRef.current,
//           start: 'top 80%',
//           end: 'top 40%',
//           toggleActions: 'play none none reverse',
//         },
//       }
//     );
//     gsap.fromTo(
//       skill.current,
//       { y: -100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         stagger: 0.2,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: skill.current,
//           start: 'top 70%',
//           end: 'center 60%',
//           scrub:true,
//           // toggleActions: 'play none none reverse',
//         },
//       }
//     );
//   }, { scope: skillRef });

//   return (
//     <div className="h-auto w-full md:px-12 px-10 my-20" id="skills">
//       <h1 className="text-center text-4xl/loose mb-10 font-bold text-cyan-400 " ref={skill}>MY SKILLS</h1>
//       <div
//         ref={skillRef}
//         className="flex justify-around flex-wrap gap-10"
//       >
//         <img src={assets.html} alt="HTML" className="w-20" />
//         <img src={assets.css} alt="CSS" className="w-20" />
//         <img src={assets.js} alt="JavaScript" className="w-20" />
//         <img src={assets.react} alt="React" className="w-20" />
//         <img src={assets.gsap} alt="GSAP" className="w-20" />
//         <img src={assets.mysql} alt="MySQL" className="w-20" />
//         <img src={assets.springboot} alt="Spring Boot" className="w-20" />
//         <img src={assets.tailwind} alt="Tailwind" className="w-20" />
//       </div>
//     </div>
//   );
// };

// export default Skills;
import React, { useRef, useState } from 'react';
import assets from '../assets/assets.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const skillData = [
  { src: assets.html,        alt: "HTML",        label: "HTML5" },
  { src: assets.css,         alt: "CSS",         label: "CSS3" },
  { src: assets.js,          alt: "JavaScript",  label: "JavaScript" },
  { src: assets.react,       alt: "React",       label: "React" },
  { src: assets.gsap,        alt: "GSAP",        label: "GSAP" },
  { src: assets.mysql,       alt: "MySQL",       label: "MySQL" },
  { src: assets.springboot,  alt: "Spring Boot", label: "Spring Boot" },
  { src: assets.tailwind,    alt: "Tailwind",    label: "Tailwind CSS" },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: -40 },
      {
        opacity: 1, y: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        }
      }
    );

    // Cards stagger
    gsap.fromTo(cardRefs.current,
      { y: 80, opacity: 0, scale: 0.8 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    // Floating idle animation per card
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        y: i % 2 === 0 ? -6 : 6,
        duration: 1.8 + i * 0.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.15,
      });
    });
  }, { scope: sectionRef });

  const handleEnter = (i) => {
    setHoveredIndex(i);
    gsap.to(cardRefs.current[i], {
      scale: 1.1,
      rotateY: 8,
      rotateX: -4,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleLeave = (i) => {
    setHoveredIndex(null);
    gsap.to(cardRefs.current[i], {
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-28 px-6 md:px-16 overflow-hidden bg-[#050810]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono&family=Syne:wght@400;700;800&display=swap');

        .skills-grid-bg {
          background-image:
            linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .skill-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(34,211,238,0.05));
          border: 1px solid rgba(34,211,238,0.12);
          backdrop-filter: blur(12px);
          transform-style: preserve-3d;
          transition: border-color 0.3s, box-shadow 0.3s;
          cursor: default;
        }

        .skill-card.active {
          border-color: rgba(34,211,238,0.5);
          box-shadow: 0 0 40px rgba(34,211,238,0.15), inset 0 0 20px rgba(34,211,238,0.06);
        }

        .skill-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(circle at 50% 0%, rgba(34,211,238,0.1), transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .skill-card.active::after {
          opacity: 1;
        }

        .skill-img {
          filter: grayscale(30%) drop-shadow(0 0 0px transparent);
          transition: filter 0.3s, transform 0.3s;
        }

        .skill-card.active .skill-img {
          filter: grayscale(0%) drop-shadow(0 0 12px rgba(34,211,238,0.5));
          transform: translateZ(20px);
        }

        .skill-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          transition: color 0.3s;
        }

        .skill-card.active .skill-label {
          color: #22d3ee;
        }

        .corner-tl, .corner-br {
          position: absolute;
          width: 12px;
          height: 12px;
          transition: opacity 0.3s;
          opacity: 0;
        }

        .corner-tl {
          top: 8px; left: 8px;
          border-top: 1.5px solid #22d3ee;
          border-left: 1.5px solid #22d3ee;
        }

        .corner-br {
          bottom: 8px; right: 8px;
          border-bottom: 1.5px solid #22d3ee;
          border-right: 1.5px solid #22d3ee;
        }

        .skill-card.active .corner-tl,
        .skill-card.active .corner-br {
          opacity: 1;
        }

        .glow-dot {
          width: 6px; height: 6px;
          background: #22d3ee;
          border-radius: 50%;
          box-shadow: 0 0 10px #22d3ee, 0 0 20px #22d3ee;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(0.5); }
        }

        .skills-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 12vw, 10rem);
          line-height: 1;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #fff 40%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Background grid */}
      <div className="skills-grid-bg absolute inset-0 pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute pointer-events-none" style={{
        width: 400, height: 400, borderRadius: '50%',
        background: 'rgba(34,211,238,0.04)',
        filter: 'blur(100px)', top: '-10%', right: '10%'
      }} />

      {/* Section label */}
      <div className="flex items-center gap-3 mb-4 justify-center">
        <div className="glow-dot" />
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.65rem',
          color: 'rgba(34,211,238,0.5)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase'
        }}>
          03 — Tech Stack
        </span>
        <div className="glow-dot" />
      </div>

      {/* Big Title */}
      <h2 ref={titleRef} className="skills-title text-center mb-16">
        MY SKILLS
      </h2>

      {/* Cards Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-4xl mx-auto"
      >
        {skillData.map((skill, i) => (
          <div
            key={skill.alt}
            ref={el => cardRefs.current[i] = el}
            className={`skill-card rounded-2xl p-6 flex flex-col items-center gap-4 ${hoveredIndex === i ? 'active' : ''}`}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
          >
            <div className="corner-tl" />
            <div className="corner-br" />
            <img
              src={skill.src}
              alt={skill.alt}
              className="skill-img w-14 h-14 object-contain"
            />
            <span className="skill-label">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;