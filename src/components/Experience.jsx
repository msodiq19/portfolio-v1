

const Projects = () => {
  const data = [
    {
      period: "2023 — Present",
      position: "Lead Frontend Engineer",
      company: "Monietracka",
      companyLink: "",
      companyLogo: "",
      role: "Frontend Engineer",
      description:
        "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within the engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
      technologies: [
        "JavaScript",
        "TypeScript",
        "HTML & SCSS",
        "React",
        "Next.js",
      ],
    },
    {
      period: "2020 — Dec 2023",
      position: "Frontend Developer",
      company: "Freelance",
      companyLink: "",
      companyLogo: "",
      description:
        "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music’s embeddable web player widget for in-browser user authorization and full song playback.",
      technologies: ["HTML/CSS", "SCSS", "JavaScript", "React.js"],
    },
    // ... Add more entries for other experiences
  ];

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

export default Projects
