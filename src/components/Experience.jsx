import { experiences as data } from '../data'

const Experiences = () => {

  return (
    <section id="projects" className="container mx-auto my-16">
      <div className="w-[85%] mx-auto my-8">
        <h2 className="text-3xl font-bold mb-4">My Experience</h2>
        <div>
          {data.map((experience, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center mb-2">
                <a
                  href={experience.companyLink}
                  className="font-bold text-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience.company}
                </a>
              </div>
              <div className="text-gray-600">{experience.period}</div>
              <div className="text-lg font-semibold">{experience.position}</div>
              <div className="text-gray-700">{experience.role}</div>
              <div className="mt-2 text-gray-800">{experience.description}</div>
              {experience.relatedLinks && (
                <div className="mt-2">
                  <span className="font-semibold">Related Links:</span>
                  {experience.relatedLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.link}
                      className="ml-2 text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
              <div className="mt-2">
                <span className="font-semibold">Technologies:</span>
                <div className="flex flex-wrap gap-x-2 mt-1">
                  {experience.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences
