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
            Hi, I&#39;m a software engineer who enjoys solving problems through code.
            My primary focus is on crafting accessible and responsive frontend applications, 
            but I&#39;ve also built a solid foundation in backend work. I’m always on the lookout for bugs and security issues, 
            striving to ensure every project I work on is not only fast and accessible
            but also robust in every way.
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
