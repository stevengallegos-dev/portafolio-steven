import ThemeToggle from '../ThemeToggle/ThemeToggle'
import './Navbar.css'

function Navbar() {
  return (
    <aside className="navbar">
      <div className="navbar__container">
        <a className="navbar__logo" href="#inicio">
          SG
        </a>

        <nav className="navbar__nav">
          <a href="#inicio" className="navbar__link navbar__link--active">
            <span className="navbar__dot"></span>
            <span>Inicio</span>
          </a>

          <a href="#sobre-mi" className="navbar__link">
            <span className="navbar__dot"></span>
            <span>Sobre mí</span>
          </a>

          <a href="#habilidades" className="navbar__link">
            <span className="navbar__dot"></span>
            <span>Habilidades</span>
          </a>

          <a href="#proyectos" className="navbar__link">
            <span className="navbar__dot"></span>
            <span>Proyectos</span>
          </a>

          <a href="#contacto" className="navbar__link">
            <span className="navbar__dot"></span>
            <span>Contacto</span>
          </a>
        </nav>

        <ThemeToggle />
      </div>
    </aside>
  )
}

export default Navbar