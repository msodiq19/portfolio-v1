import { experiences as data } from '../data'
import { motion } from 'framer-motion'

const Experiences = () => {

  return (
    <section id="projects" className="w-[80%] mx-auto my-8">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="mx-auto my-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="text-3xl font-bold mb-4"
        >
          My Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
        >
          {data.map((experience, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              key={index}
              className="mb-8"
            >
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
                <div className="flex flex-wrap gap-2 mt-1">
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
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Experiences
