import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      id="contact"
      className="p-6 bg-gray-100 flex flex-col justify-center items-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="text-xl font-bold mb-2"
      >
        What’s Next?
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="text-3xl font-bold mb-4"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="mb-4 w-[60%]"
      >
        Although I’m currently looking for any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
        className="inline-block bg-transparent border border-gray-500 text-gray-500 py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white"
        href="mailto:muhammedsodiq2018@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </motion.a>
    </motion.section>
  );
};

export default Contact;
