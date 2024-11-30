import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Project from './components/project';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
};

export default App;