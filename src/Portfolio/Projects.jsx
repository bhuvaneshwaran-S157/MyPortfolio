import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const projectCategories = [
  {
    name: "JavaScript",
    tag: "Vanilla",
    projects: [
      {
        image: "src/assets/Screenshot (366).png",
        title: "Movie List App",
        description: "Watchlist app that lets users search for movies by title and add them to their personal list.",
        techStack: ["JavaScript", "Tailwind", "LocalStorage"],
        demoLink: "https://yourdemo.link/habit-tracker",
        codeLink: "https://github.com/bhuvaneshwaran-S157/Movie-Listing-App.git",
      },
      {
        image: "/images/quiz-app.png",
        title: "Quiz App",
        description: "A fun and interactive quiz platform with scoring and question categories.",
        techStack: ["HTML", "CSS", "JavaScript"],
        demoLink: "https://yourdemo.link/quiz-app",
        codeLink: "https://github.com/yourrepo/quiz-app",
      },
      {
        image: "/images/weather-app.png",
        title: "Weather App",
        description: "Real-time weather info using OpenWeatherMap API with a sleek UI.",
        techStack: ["JavaScript", "Tailwind", "API"],
        demoLink: "https://yourdemo.link/weather-app",
        codeLink: "https://github.com/yourrepo/weather-app",
      },
    ],
  },
  {
    name: "React",
    tag: "Component-Driven",
    projects: [
      {
        image: "src/assets/image.png",
        title: "E-Commerce Store",
        description: "Modern e-commerce platform with product filtering and cart functionality.",
        techStack: ["React", "Context API", "Firebase"],
        demoLink: "#",
        codeLink: "#",
      },
      {
        image: "src/assets/Screenshot (380).png",
        title: "Learning Management System",
        description: "Modern learning management platform with course filtering and progress tracking.",
        techStack: ["React", "Context API", "TailwindCSS", "GSAP"],
        demoLink: "#",
        codeLink: "#",
      },
      {
        image: "src/",
        title: "Mojito Cocktail Website",
        description: "Animated cocktail landing page with fluid GSAP scroll-driven storytelling.",
        techStack: ["React", "TailwindCSS", "GSAP"],
        demoLink: "#",
        codeLink: "#",
      },
    ],
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const visitRef = useRef(null);
  const categoryRefs = useRef([]);
  const cardGroupRefs = useRef([]);
  const [activeTab, setActiveTab] = useState(-1);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 85%",
          end: "top 55%",
          scrub: 1,
        },
      }
    );

    categoryRefs.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    cardGroupRefs.current.forEach((group) => {
      if (!group) return;
      const cards = group.querySelectorAll('.project-card-wrap');
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.fromTo(
      visitRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: visitRef.current,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-[#050810] py-28 px-6 md:px-16 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono&family=Syne:wght@400;700;800&display=swap');

        .proj-grid-bg {
          background-image:
            linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .projects-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 12vw, 10rem);
          line-height: 1;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #fff 40%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .tab-btn {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.5rem 1.4rem;
          border-radius: 999px;
          border: 1px solid rgba(34,211,238,0.2);
          color: rgba(255,255,255,0.4);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s;
        }

        .tab-btn.active,
        .tab-btn:hover {
          border-color: #22d3ee;
          color: #22d3ee;
          background: rgba(34,211,238,0.07);
          box-shadow: 0 0 16px rgba(34,211,238,0.15);
        }

        .category-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          letter-spacing: 0.06em;
          color: white;
        }

        .category-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(34,211,238,0.55);
          padding: 0.25rem 0.75rem;
          border: 1px solid rgba(34,211,238,0.2);
          border-radius: 999px;
        }

        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, rgba(34,211,238,0.3), transparent);
          margin: 3rem 0;
        }

        .glow-dot {
          width: 6px;
          height: 6px;
          background: #22d3ee;
          border-radius: 50%;
          box-shadow: 0 0 10px #22d3ee, 0 0 20px #22d3ee;
          animation: pulse-dot 2s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.5); }
        }

        .github-btn {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 2rem;
          border: 1px solid rgba(34,211,238,0.35);
          color: #22d3ee;
          border-radius: 4px;
          background: rgba(34,211,238,0.04);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .github-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(34,211,238,0.07);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .github-btn:hover::before {
          transform: scaleX(1);
        }

        .github-btn:hover {
          border-color: #22d3ee;
          box-shadow: 0 0 30px rgba(34,211,238,0.2);
        }
      `}</style>

      <div className="proj-grid-bg absolute inset-0 pointer-events-none" />

      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'rgba(34,211,238,0.04)',
          filter: 'blur(120px)',
          top: '5%',
          right: '-5%',
        }}
      />

      <div
        className="absolute pointer-events-none"
        style={{
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(99,102,241,0.05)',
          filter: 'blur(100px)',
          bottom: '10%',
          left: '0%',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="flex items-center gap-3 mb-4">
          <span className="glow-dot" />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.65rem',
              color: 'rgba(34,211,238,0.5)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            04 — Selected Work
          </span>
        </div>

        <h1 ref={titleRef} className="projects-title mb-6">
          MY PROJECTS
        </h1>

        <p
          ref={subtitleRef}
          style={{
            fontFamily: "'Syne', sans-serif",
            color: 'rgba(255,255,255,0.4)',
            fontSize: '1rem',
            maxWidth: '560px',
            lineHeight: '1.8',
            marginBottom: '2.5rem',
          }}
        >
          A collection of work spanning vanilla JavaScript and React — each
          built to solve a real problem or explore a creative idea.
        </p>

        <div className="flex gap-3 flex-wrap mb-16">
          <button
            className={`tab-btn ${activeTab === -1 ? 'active' : ''}`}
            onClick={() => setActiveTab(-1)}
          >
            All
          </button>
          {projectCategories.map((cat, i) => (
            <button
              key={i}
              className={`tab-btn ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="space-y-20">
          {projectCategories.map((category, index) => {
            if (activeTab !== -1 && activeTab !== index) return null;
            return (
              <div key={index}>
                <div
                  ref={(el) => (categoryRefs.current[index] = el)}
                  className="flex items-center gap-4 mb-10"
                >
                  <span className="category-label">{category.name}</span>
                  <span className="category-tag">{category.tag}</span>
                  <div
                    style={{
                      flex: 1,
                      height: 1,
                      background:
                        'linear-gradient(90deg, rgba(34,211,238,0.2), transparent)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.65rem',
                      color: 'rgba(34,211,238,0.3)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {category.projects.length} projects
                  </span>
                </div>

                <div
                  ref={(el) => (cardGroupRefs.current[index] = el)}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {category.projects.map((project, projIndex) => (
                    <div
                      key={projIndex}
                      className="project-card-wrap"
                      style={{ transition: 'transform 0.3s' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = 'translateY(-6px)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = 'translateY(0)')
                      }
                    >
                      <ProjectCard {...project} />
                    </div>
                  ))}
                </div>

                {index < projectCategories.length - 1 && activeTab === -1 && (
                  <div className="divider-line" />
                )}
              </div>
            );
          })}
        </div>

        <div ref={visitRef} className="mt-24 text-center">
  <p
    style={{
      fontFamily: "'Space Mono', monospace",
      fontSize: '0.7rem',
      letterSpacing: '0.15em',
      color: 'rgba(255,255,255,0.25)',
      textTransform: 'uppercase',
      marginBottom: '1.25rem',
    }}
  >
    There's more where that came from
  </p>

  <a
    href="https://github.com/bhuvaneshwaran-S157"
    target="_blank"
    rel="noopener noreferrer"
    className="github-btn"
  >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Visit My GitHub
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;