import { projects as projectsData} from '../data'

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


const Projects = () => {
  return (
    <div className="bg-gray-100 w-[80%] mx-auto max-h-screen py-8">
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
