

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-6 bg-gray-100 flex flex-col justify-center items-center text-center"
    >
      <h2 className="text-xl font-bold mb-2">What’s Next?</h2>
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="mb-4 w-[60%]">
        Although I’m currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a
        className="inline-block bg-transparent border border-gray-500 text-gray-500 py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white"
        href="mailto:muhammedsodiq2018@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  );
}

export default Contact
