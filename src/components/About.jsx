import { skills as skillsData } from '../data'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="bg-gray-100 p-8 md:p-0 mx-auto my-16 w-full md:w-4/5"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="flex flex-col-reverse md:flex-row items-start justify-between"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="md:w-[60%] md:mr-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="mb-4"
          >
            Hello! 👋🏾 My name is Muhammed Sodiq...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="mb-4"
          >
            I am a Frontend Engineer who loves building crazy ideas and trying
            out new things. I got into programming in 2018 when I stumbled
            accross C language on Sololearn and then started learning Web
            Development in 2019.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="mb-4"
          >
            Over the years, I have had the opportunity to work with amazing
            people, and on diverse projects. I recently started working with
            MonieTracka. A new fintech startup that is yet to go live. When I am
            not writing code, I am usually reading novels and binging an anime.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="text-2xl font-bold mb-4"
          >
            Below are a list of my tools and languages
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {skillsData.map((skill, idx) => (
              <span
                key={idx}
                className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="md:w-[30%] hidden md:block"
        >
          <img
            src="https://sdk.bitmoji.com/render/panel/10212371-102825445276_1-s5-v1.png?transparent=1&palette=1&scale=2"
            alt="Bitmoji Headshot"
            className="rounded-md max-w-full h-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className=""
          >
            <strong>Headshot:</strong> This bitmoji would have to do till I can
            take a proper headshot 😅
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
