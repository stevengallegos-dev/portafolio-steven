import Steven from "../../assets/steven.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting">Hola, soy</p>

          <h1 className="hero__title">
            Steven <span className="hero__highlight">Gallegos</span>
          </h1>

          <h2 className="hero__subtitle">
            Desarrollador Full Stack | Estudiante de Ingeniería de Software
          </h2>
          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#proyectos">
              Ver proyectos
            </a>

            <a
              className="hero__button hero__button--secondary"
              href="/CV-Steven-Gallegos-2026.pdf"
              download
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img src={Steven} alt="Steven Gallegos" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
