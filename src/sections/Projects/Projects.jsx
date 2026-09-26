import { useEffect, useState } from "react";
import { FaSearchPlus, FaTimes } from "react-icons/fa";
import "./Projects.css";

import capacitacionesUisek01 from "../../assets/projects/capacitaciones-uisek.png";
import capacitacionesUisek02 from "../../assets/projects/capacitaciones-uisek-02-capacitaciones.png";
import capacitacionesUisek03 from "../../assets/projects/capacitaciones-uisek-03-detalle.png";

import peliculasDirectores01 from "../../assets/projects/peliculas-directores-01-peliculas.png";
import peliculasDirectores02 from "../../assets/projects/peliculas-directores-02-directores.png";
import peliculasDirectores03 from "../../assets/projects/peliculas-directores-03-detalle-director.png";
import peliculasDirectores04 from "../../assets/projects/peliculas-directores-04-detalle-pelicula.png";

/* IMÁGENES - CAPACITACIONES UISEK */

const capacitacionesImages = [
  capacitacionesUisek01,
  capacitacionesUisek02,
  capacitacionesUisek03,
];

/* IMÁGENES - PELÍCULAS Y DIRECTORES */

const peliculasImages = [
  peliculasDirectores01,
  peliculasDirectores02,
  peliculasDirectores03,
  peliculasDirectores04,
];

function Projects() {
  /* ESTADO DE LOS CARRUSELES */

  const [capacitacionesImage, setCapacitacionesImage] = useState(0);
  const [peliculasImage, setPeliculasImage] = useState(0);

  /* ESTADO DEL VISOR DE IMÁGENES */

  const [lightbox, setLightbox] = useState(null);

  /* CARRUSEL CAPACITACIONES UISEK */

  const previousCapacitacionesImage = () => {
    setCapacitacionesImage((current) =>
      current === 0 ? capacitacionesImages.length - 1 : current - 1
    );
  };

  const nextCapacitacionesImage = () => {
    setCapacitacionesImage((current) =>
      current === capacitacionesImages.length - 1 ? 0 : current + 1
    );
  };

  /* CARRUSEL PELÍCULAS Y DIRECTORES */

  const previousPeliculasImage = () => {
    setPeliculasImage((current) =>
      current === 0 ? peliculasImages.length - 1 : current - 1
    );
  };

  const nextPeliculasImage = () => {
    setPeliculasImage((current) =>
      current === peliculasImages.length - 1 ? 0 : current + 1
    );
  };

  /* ABRIR VISOR */

  const openLightbox = (images, currentIndex) => {
    setLightbox({
      images,
      currentIndex,
    });
  };

  /* CERRAR VISOR */

  const closeLightbox = () => {
    setLightbox(null);
  };

  /* IMAGEN ANTERIOR DEL VISOR */

  const previousLightboxImage = () => {
    setLightbox((current) => {
      if (!current) return current;

      return {
        ...current,
        currentIndex:
          current.currentIndex === 0
            ? current.images.length - 1
            : current.currentIndex - 1,
      };
    });
  };

  /* SIGUIENTE IMAGEN DEL VISOR */

  const nextLightboxImage = () => {
    setLightbox((current) => {
      if (!current) return current;

      return {
        ...current,
        currentIndex:
          current.currentIndex === current.images.length - 1
            ? 0
            : current.currentIndex + 1,
      };
    });
  };

  /* ==================================================
     CONTROL DEL VISOR CON EL TECLADO
     ================================================== */

  useEffect(() => {
    if (!lightbox) return;

    const handleKeyDown = (event) => {
      /* FLECHA IZQUIERDA */
      if (event.key === "ArrowLeft") {
        previousLightboxImage();
      }

      /* FLECHA DERECHA */
      if (event.key === "ArrowRight") {
        nextLightboxImage();
      }

      /* TECLA ESC */
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  return (
    <>
      <section className="projects" id="proyectos">
        <div className="projects__container">
          <p className="projects__label">Lo que he desarrollado</p>

          <h2 className="projects__title">
            Mis <span className="projects__highlight">proyectos</span>
          </h2>

          <p className="projects__description">
            Algunos proyectos en los que he aplicado diferentes tecnologías
            durante mi formación en Ingeniería de Software.
          </p>

          <div className="projects__grid">

            {/* ========================================
                PROYECTO 1 - CAPACITACIONES UISEK
            ======================================== */}

            <article className="project-card">
              <div className="project-card__image">
                <img
                  src={capacitacionesImages[capacitacionesImage]}
                  alt={`Plataforma de Capacitaciones UISEK - captura ${
                    capacitacionesImage + 1
                  }`}
                />

                {/* LUPA */}

                <button
                  className="project-card__zoom"
                  type="button"
                  onClick={() =>
                    openLightbox(
                      capacitacionesImages,
                      capacitacionesImage
                    )
                  }
                  aria-label="Ampliar captura de Capacitaciones UISEK"
                >
                  <FaSearchPlus />
                </button>

                {/* FLECHA IZQUIERDA */}

                <button
                  className="project-card__arrow project-card__arrow--left"
                  type="button"
                  onClick={previousCapacitacionesImage}
                  aria-label="Ver captura anterior de Capacitaciones UISEK"
                >
                  ‹
                </button>

                {/* FLECHA DERECHA */}

                <button
                  className="project-card__arrow project-card__arrow--right"
                  type="button"
                  onClick={nextCapacitacionesImage}
                  aria-label="Ver siguiente captura de Capacitaciones UISEK"
                >
                  ›
                </button>

                {/* CONTADOR DEL CARRUSEL PEQUEÑO */}

                <div className="project-card__counter">
                  {capacitacionesImage + 1} / {capacitacionesImages.length}
                </div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">
                  Plataforma de Capacitaciones UISEK
                </h3>

                <div className="project-card__status">
                  <span>Estado:</span>
                  <strong>Publicado</strong>
                </div>

                <div className="project-card__tech-section">
                  <p className="project-card__tech-label">
                    Tecnologías:
                  </p>

                  <div className="project-card__technologies">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>JSON</span>
                  </div>
                </div>

                <p className="project-card__description">
                  Plataforma web desarrollada para centralizar y facilitar el
                  acceso a los programas de capacitación de la Universidad
                  Internacional SEK, Ecuador. Permite a los usuarios encontrar
                  contenidos de forma rápida mediante búsquedas, filtros y
                  categorías, además de acceder a materiales descargables desde
                  un mismo lugar.
                </p>

                <div className="project-card__actions">
                  <a
                    href="https://github.com/stevengallegos-dev/blog-proyectos-uisek"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://stevengallegos-dev.github.io/blog-proyectos-uisek/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto
                  </a>
                </div>
              </div>
            </article>

            {/* ========================================
                PROYECTO 2 - PELÍCULAS Y DIRECTORES
            ======================================== */}

            <article className="project-card">
              <div className="project-card__image">
                <img
                  src={peliculasImages[peliculasImage]}
                  alt={`Aplicación de Películas y Directores - captura ${
                    peliculasImage + 1
                  }`}
                />

                {/* LUPA */}

                <button
                  className="project-card__zoom"
                  type="button"
                  onClick={() =>
                    openLightbox(peliculasImages, peliculasImage)
                  }
                  aria-label="Ampliar captura de Películas y Directores"
                >
                  <FaSearchPlus />
                </button>

                {/* FLECHA IZQUIERDA */}

                <button
                  className="project-card__arrow project-card__arrow--left"
                  type="button"
                  onClick={previousPeliculasImage}
                  aria-label="Ver captura anterior de Películas y Directores"
                >
                  ‹
                </button>

                {/* FLECHA DERECHA */}

                <button
                  className="project-card__arrow project-card__arrow--right"
                  type="button"
                  onClick={nextPeliculasImage}
                  aria-label="Ver siguiente captura de Películas y Directores"
                >
                  ›
                </button>

                {/* CONTADOR DEL CARRUSEL PEQUEÑO */}

                <div className="project-card__counter">
                  {peliculasImage + 1} / {peliculasImages.length}
                </div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">
                  Películas y Directores
                </h3>

                <div className="project-card__status">
                  <span>Estado:</span>
                  <strong>Funcional</strong>
                </div>

                <div className="project-card__tech-section">
                  <p className="project-card__tech-label">
                    Tecnologías:
                  </p>

                  <div className="project-card__technologies">
                    <span>React</span>
                    <span>Vite</span>
                    <span>Material UI</span>
                    <span>Axios</span>
                    <span>Django</span>
                    <span>Django REST Framework</span>
                    <span>OAuth 2.0</span>
                  </div>
                </div>

                <p className="project-card__description">
                  Aplicación Full Stack desarrollada para centralizar la gestión
                  de películas y directores mediante una interfaz web conectada
                  a una API REST. Permite consultar, registrar, editar y eliminar
                  información, relacionar cada película con su director y
                  controlar el acceso a las operaciones mediante autenticación
                  OAuth 2.0.
                </p>

                <div className="project-card__actions">
                  <a
                    href="https://github.com/stevengallegos-dev/peliculas-directores-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend
                  </a>

                  <a
                    href="https://github.com/stevengallegos-dev/peliculas-directores-api"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Backend
                  </a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ========================================
          VISOR DE IMÁGENES AMPLIADAS
      ======================================== */}

      {lightbox && (
        <div
          className="project-lightbox"
          onClick={closeLightbox}
        >
          {/* BOTÓN CERRAR */}

          <button
            className="project-lightbox__close"
            type="button"
            onClick={closeLightbox}
            aria-label="Cerrar visor"
          >
            <FaTimes />
          </button>

          {/* FLECHA IZQUIERDA */}

          <button
            className="project-lightbox__arrow project-lightbox__arrow--left"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousLightboxImage();
            }}
            aria-label="Ver imagen anterior"
          >
            ‹
          </button>

          {/* IMAGEN AMPLIADA */}

          <img
            className="project-lightbox__image"
            src={lightbox.images[lightbox.currentIndex]}
            alt={`Captura ampliada ${lightbox.currentIndex + 1}`}
            onClick={(event) => event.stopPropagation()}
          />

          {/* FLECHA DERECHA */}

          <button
            className="project-lightbox__arrow project-lightbox__arrow--right"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextLightboxImage();
            }}
            aria-label="Ver siguiente imagen"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default Projects;