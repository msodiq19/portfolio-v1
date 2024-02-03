import React from 'react'

import { FiFolder, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <div className="flex space-x-2">
          <FiFolder className="text-gray-500" />
          <a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink className="text-gray-500" />
          </a>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex space-x-2">
        {project.technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-300 text-gray-800 text-sm px-2 py-1 rounded-md"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

const projectsData = [
  {
    name: "Maplerad",
    description:
      "I worked on all things frontend related at Maplerad. Maplerad allows you to embed banking services into your application.",
    technologies: ["Nuxt", "Tailwind", "Typescript"],
    externalLink: "https://maplerad.com",
  },
  {
    name: "Stranerd",
    description:
      "Building various tools to enable students to collaborate, innovate and achieve academic success.",
    technologies: ["Vue", "Tailwind", "Ionic"],
    externalLink: "https://stranerd.com",
  },
  {
    name: "Cloundenly",
    description:
      "I worked on a suite of tools that enabled the easy management of HR, Benefits and Payroll for Organizations.",
    technologies: ["Vue", "Tailwind", "Vuex"],
    externalLink: "https://cloundenly.com",
  },
  {
    name: "Kanban",
    description: "An open-source kanban board built with Nuxt 3 and Tailwind.",
    technologies: ["Nuxt 3", "Tailwind CSS", "vue-draggable"],
    externalLink: "https://kanban.com",
  },
  {
    name: "Vue3 Dashboard",
    description:
      "I saw a very beautiful dashboard template in Vanilla JS and decided to recreate it in Vue.",
    technologies: ["Vue", "Tailwind", "Chart.js"],
    externalLink: "https://vue3dashboard.com",
  },
  {
    name: "Vue3 Animation",
    description:
      "A collection of Vue 3 animations made with different libraries from GSAP to hover effects and just plain CSS animations.",
    technologies: ["Vue", "GSAP", "Tailwind"],
    externalLink: "https://vue3animation.com",
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 w-[80%] mx-auto min-h-screen py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects
