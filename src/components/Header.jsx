import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'


const Header = () => {

  return (
    <section className="max-w-full h-full">
      <div className="w-full">
        <nav className="w-[90%] md:w-[80%] mx-auto h-12 flex justify-between items-center">
          <a href="#">Muhammed Sodiq</a>
          <div className="hidden lg:w-1/3 w-1/2 md:flex justify-between items-center">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>
      <div className="w-full mx-auto md:h-full flex justify-center items-center my-[5em]">
        <div className="w-[80%] mx-auto md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-bold">Muhammed Sodiq</h1>
          <p className="my-2 w-[350px] md:w-[50%]">
            Hi, I&#39;m a software engineer specialized in building Frontend
            applications, occasionally backend and rarely design. I take pride
            in my work and ensure I deliver the fastest, most accessible and
            most responsive application possible..
          </p>
          <div className="flex space-x-2">
            <a
              href="https://www.linkedin.com/in/sodiq19/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin_icon" />
            </a>
            <a
              href="https://github.com/msodiq19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github_icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header
