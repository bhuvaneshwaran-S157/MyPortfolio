// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import React, { useLayoutEffect, useRef } from "react";

// const About = () => {
//   const skills = {
//     React: 85,
//     JavaScript: 80,
//     "HTML/CSS": 90,
//     "Tailwind CSS": 75,
//     "UI/UX Design": 70,
//     // "Node.js": 60,
//     // "Git": 75,
//     "Responsive Design": 85,
//     // "Express.js": 20,
//   };

//   const aboutPara = useRef(null);
//   const skillPara = useRef(null);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     if (!aboutPara.current || !skillPara.current) return;

//     // Animate About section
//     gsap.fromTo(
//       aboutPara.current,
//       { opacity: 0, x: -100 },
//       {
//         opacity: 1,
//         x: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: aboutPara.current,
//           start: "top 70%",
//           end: "current 60%",
//           scrub: true,
//         },
//       }
//     );

//     // Animate Skills container
//     gsap.fromTo(
//       skillPara.current,
//       { x: 200, opacity: 0 },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: skillPara.current,
//           start: "top 70%",
//           end: "center 60%",
//           scrub: true,
//         },
//       }
//     );

//     // Animate each skill bar
//     const skillElems = skillPara.current.querySelectorAll(".skill-bar");

//     skillElems.forEach((bar) => {
//       const width = bar.getAttribute("data-width");
//       bar.style.width = "0%";

//       gsap.to(bar, {
//         width: `${width}%`,
//         duration: 1.5,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: bar,
//           start: "top 70%",
//           scrub: true,
//           end: "center 60%",
//         },
//       });
//     });
//   }, []);

//   return (
//     <div className="bg-black min-h-screen text-white grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center px-4 py-8">
//       <div
//         className="max-w-3xl w-full text-center space-y-6 p-10"
//         ref={aboutPara}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400">
//           About Me
//         </h2>
//         <p className="text-base text-bold md:text-2xl leading-relaxed text-center ">
//           Hi, I'm Bhuvanesh, a passionate frontend developer dedicated to
//           crafting intuitive and visually appealing user experiences. I'm
//           currently mastering frontend development, with a strong focus on
//           React, JavaScript, and UI/UX design. I'm also exploring fullstack
//           development. I love learning new technologies and constantly improving
//           my skills to build impactful digital solutions.
//         </p>
//       </div>

//       {/* ✅ Skills Section (now visible and animating) */}
//       <div
//         className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
//         ref={skillPara}
//       >
//         <h2 className="text-3xl font-bold mb-8 text-cyan-400">SKILLS</h2>
//         <div className="w-full space-y-6">
//           {Object.entries(skills).map(([skill, percentage]) => (
//             <div key={skill} className="mb-4">
//               <div className="flex justify-between mb-1">
//                 <span className="text-base font-medium">{skill}</span>
//                 <span className="text-sm font-medium">{percentage}%</span>
//               </div>
//               <div className="w-full bg-gray-700 rounded-full h-2.5">
//                 <div
//                   className="bg-cyan-400 h-2.5 rounded-full skill-bar"
//                   data-width={percentage}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML & CSS", icon: "◈" },
  { name: "React", icon: "⬡" },
  { name: "JavaScript", icon: "◆" },
  { name: "Tailwind CSS", icon: "◇" },
  { name: "UI/UX Design", icon: "◉" },
  { name: "Responsive Design", icon: "⊞" },
];

const About = () => {
  const aboutPara = useRef(null);
  const skillsRef = useRef(null);
  const cardRefs = useRef([]);
  const titleRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading letters
    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll(".char");
      gsap.fromTo(
        chars,
        { opacity: 0, y: 40, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
    }

    // Animate about paragraph
    if (aboutPara.current) {
      gsap.fromTo(
        aboutPara.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutPara.current,
            start: "top 75%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    }

    // Animate skill cards with stagger
    if (cardRefs.current.length) {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 60, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 75%",
          },
        }
      );
    }

    // Floating animation for skill cards
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        y: i % 2 === 0 ? -8 : 8,
        duration: 2 + i * 0.3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.2,
      });
    });
  }, []);

  const handleMouseEnter = (e, i) => {
    setHoveredIndex(i);
    gsap.to(cardRefs.current[i], {
      scale: 1.08,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (i) => {
    setHoveredIndex(null);
    gsap.to(cardRefs.current[i], {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const aboutText = "About Me";

  return (
    <div
      style={{ fontFamily: "'Syne', sans-serif" }}
      className="relative bg-[#050810] min-h-screen text-white overflow-hidden"
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono&display=swap');

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .skill-card {
          position: relative;
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(34,211,238,0.05) 100%);
          border: 1px solid rgba(34,211,238,0.15);
          backdrop-filter: blur(10px);
          transition: border-color 0.3s, box-shadow 0.3s;
          cursor: default;
        }

        .skill-card:hover {
          border-color: rgba(34,211,238,0.5);
          box-shadow: 0 0 30px rgba(34,211,238,0.15), inset 0 0 20px rgba(34,211,238,0.05);
        }

        .skill-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(34,211,238,0.08) 100%);
          opacity: 0;
          transition: opacity 0.3s;
          border-radius: inherit;
        }

        .skill-card:hover::before {
          opacity: 1;
        }

        .glow-dot {
          width: 6px;
          height: 6px;
          background: #22d3ee;
          border-radius: 50%;
          box-shadow: 0 0 10px #22d3ee, 0 0 20px #22d3ee;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.6); }
        }

        .char {
          display: inline-block;
          transform-origin: bottom;
        }

        .about-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(34,211,238,0.5);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .accent-line {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #22d3ee, transparent);
        }

        .big-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
      `}</style>

      {/* Background effects */}
      <div className="noise-overlay" />
      <div className="grid-bg absolute inset-0" />
      <div
        className="big-glow"
        style={{
          width: 500,
          height: 500,
          top: "-10%",
          left: "-10%",
          background: "rgba(34,211,238,0.04)",
        }}
      />
      <div
        className="big-glow"
        style={{
          width: 400,
          height: 400,
          bottom: "-5%",
          right: "5%",
          background: "rgba(99,102,241,0.06)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="glow-dot" />
          <span className="about-tag">01 — Who I am</span>
        </div>

        {/* Animated heading */}
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl font-extrabold mb-16 tracking-tight"
          style={{ perspective: "600px" }}
        >
          {aboutText.split("").map((char, i) => (
            <span
              key={i}
              className="char"
              style={{ color: char === " " ? "transparent" : i > 5 ? "#22d3ee" : "white" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* About text */}
          <div ref={aboutPara} className="space-y-6">
            <div className="accent-line mb-6" />
            <p
              className="text-lg md:text-xl leading-loose text-gray-300"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 400 }}
            >
              Hi, I'm{" "}
              <span className="text-white font-700" style={{ fontWeight: 700 }}>
                Bhuvanesh
              </span>
              — a frontend developer obsessed with crafting interfaces that feel
              as good as they look. I live at the intersection of clean code and
              thoughtful design.
            </p>
            <p
              className="text-base leading-loose"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Space Mono', monospace", fontSize: "0.85rem" }}
            >
              Currently deep in React & fullstack exploration. Always pushing
              pixels with purpose, and building experiences that connect with
              real people.
            </p>

            {/* Decorative stat-pills (no numbers, just vibes) */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Open to Work", "Fullstack Curious", "Detail Obsessed"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: "rgba(34,211,238,0.07)",
                    border: "1px solid rgba(34,211,238,0.2)",
                    color: "#22d3ee",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Skills grid */}
          <div ref={skillsRef}>
            <div className="flex items-center gap-3 mb-8">
              <div className="glow-dot" style={{ animationDelay: "0.5s" }} />
              <span className="about-tag">02 — Tools & Craft</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="skill-card rounded-2xl p-5"
                  onMouseEnter={(e) => handleMouseEnter(e, i)}
                  onMouseLeave={() => handleMouseLeave(i)}
                >
                  <div
                    className="text-2xl mb-3"
                    style={{
                      color: hoveredIndex === i ? "#22d3ee" : "rgba(255,255,255,0.3)",
                      transition: "color 0.3s",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {skill.icon}
                  </div>
                  <div
                    className="text-sm font-semibold tracking-wide"
                    style={{
                      color: hoveredIndex === i ? "white" : "rgba(255,255,255,0.7)",
                      transition: "color 0.3s",
                    }}
                  >
                    {skill.name}
                  </div>

                  {/* Animated corner accent */}
                  <div
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      width: 20,
                      height: 20,
                      borderTop: hoveredIndex === i ? "2px solid #22d3ee" : "2px solid transparent",
                      borderRight: hoveredIndex === i ? "2px solid #22d3ee" : "2px solid transparent",
                      borderRadius: "0 4px 0 0",
                      transition: "border-color 0.3s",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;