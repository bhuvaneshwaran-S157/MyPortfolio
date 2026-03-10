import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ image, title, description, techStack, demoLink, codeLink }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "center 50%",
          // toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className="bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl max-w-sm"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Project"
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            🔗 Live Demo
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
          >
            💻 Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
