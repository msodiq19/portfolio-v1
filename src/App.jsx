import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

function App() {


  return (
    <div
      className="bg-gray-100"
    >
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer className="text-center mt-8">Built by Muhammed Sodiq</footer>
    </div>
  );
}

export default App;

