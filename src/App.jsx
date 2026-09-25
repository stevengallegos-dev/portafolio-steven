import SocialLinks from './components/SocialLinks/SocialLinks'
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Skills from './sections/Skills/Skills'
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
      </main>
    </>
  )
}

export default App