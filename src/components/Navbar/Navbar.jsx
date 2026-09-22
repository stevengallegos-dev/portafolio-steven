import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a className="navbar__logo" href="#inicio">
          SG
        </a>

        <nav className="navbar__nav">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Navbar