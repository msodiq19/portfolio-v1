// AboutMe.js

const About = () => {
  return (
    <div className="bg-gray-100 p-8 md:p-0 mx-auto my-16 w-full md:w-4/5">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col-reverse md:flex-row items-start justify-between">
        <div className="md:w-[60%] md:mr-8">
          <p className="mb-4">Hello! 👋🏾 My name is Muhammed Sodiq...</p>

          <p className="mb-4">
            I am a Frontend Engineer who loves building crazy ideas and trying
            out new things. I got into programming in 2018 when I stumbled
            accross C language on Sololearn and then started learning Web
            Development in 2019.
          </p>

          <p className="mb-4">
            Over the years, I have had the opportunity to work with amazing
            people, and on diverse projects. I recently started working with
            MonieTracka. A new fintech startup that is yet to go live. When I am
            not writing code, I am usually reading novels and binging an anime.
          </p>

          <h3 className="text-2xl font-bold mb-4">
            Below are a list of my tools and languages
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Javascript
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Vue & Vuex
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Ionic
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              React
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Python
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Tensorflow.js
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Figma
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Adobe XD
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Android Studio
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Firebase
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Mongodb
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              WebSockets
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              WebRTC
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Animations
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              APIs
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Plugins
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Chrome Extensions
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              Testing (unit and E2E)
            </span>
            <span className="bg-gray-100 border border-gray-300 text-gray-800 px-2 py-1 rounded-md">
              System Design
            </span>
          </div>
        </div>
        <div className="md:w-[30%] hidden md:block">
          <img
            src="https://sdk.bitmoji.com/render/panel/10212371-102825445276_1-s5-v1.png?transparent=1&palette=1&scale=2"
            alt="Bitmoji Headshot"
            className="rounded-md max-w-full h-auto"
          />
          <p className="">
            <strong>Headshot:</strong> This bitmoji would have to do till I can
            take a proper headshot 😅
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
