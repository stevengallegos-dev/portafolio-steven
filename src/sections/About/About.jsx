import "./About.css";

function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__container">

        <p className="about__label">Conóceme un poco</p>

        <h2 className="about__title">
          Sobre <span className="about__highlight">mí</span>
        </h2>

        <div className="about__content">
          <p className="about__description">
            Actualmente curso el quinto semestre de Ingeniería de Software
            y estoy enfocado en seguir desarrollándome como Full Stack.
            A través de proyectos académicos y personales he trabajado en
            el desarrollo de aplicaciones web y móviles, integrando frontend,
            backend y bases de datos.
          </p>

          <p className="about__description">
            Me interesa el desarrollo de software y continuar ampliando mis
            conocimientos mediante proyectos prácticos, explorando nuevas
            tecnologías y buscando soluciones funcionales a los desafíos que
            se presentan durante el desarrollo.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;