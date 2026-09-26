import SocialLinks from './components/SocialLinks/SocialLinks'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
import Projects from './sections/Projects/Projects'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <SocialLinks />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  )
}

export default App