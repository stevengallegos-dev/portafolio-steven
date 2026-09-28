import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = [
      'inicio',
      'sobre-mi',
      'habilidades',
      'proyectos',
      'contacto',
    ]

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)

        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <aside className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__container">
        <a
          className="navbar__logo"
          href="#inicio"
          onClick={closeMenu}
        >
          SG
        </a>

        <button
          className="navbar__menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className="navbar__nav">
          <a
            href="#inicio"
            onClick={closeMenu}
            className={`navbar__link ${
              activeSection === 'inicio' ? 'navbar__link--active' : ''
            }`}
          >
            <span className="navbar__dot"></span>
            <span>Inicio</span>
          </a>

          <a
            href="#sobre-mi"
            onClick={closeMenu}
            className={`navbar__link ${
              activeSection === 'sobre-mi' ? 'navbar__link--active' : ''
            }`}
          >
            <span className="navbar__dot"></span>
            <span>Sobre mí</span>
          </a>

          <a
            href="#habilidades"
            onClick={closeMenu}
            className={`navbar__link ${
              activeSection === 'habilidades' ? 'navbar__link--active' : ''
            }`}
          >
            <span className="navbar__dot"></span>
            <span>Habilidades</span>
          </a>

          <a
            href="#proyectos"
            onClick={closeMenu}
            className={`navbar__link ${
              activeSection === 'proyectos' ? 'navbar__link--active' : ''
            }`}
          >
            <span className="navbar__dot"></span>
            <span>Proyectos</span>
          </a>

          <a
            href="#contacto"
            onClick={closeMenu}
            className={`navbar__link ${
              activeSection === 'contacto' ? 'navbar__link--active' : ''
            }`}
          >
            <span className="navbar__dot"></span>
            <span>Contacto</span>
          </a>
        </nav>
      </div>
    </aside>
  )
}

export default Navbar