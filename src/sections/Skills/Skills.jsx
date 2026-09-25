import {
  SiJavascript,
  SiPython,
  SiKotlin,
  SiHtml5,
  SiCss,
  SiReact,
  SiIonic,
  SiMui,
  SiNodedotjs,
  SiDjango,
  SiJetpackcompose,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiAndroidstudio,
} from "react-icons/si";
import "./Skills.css";

import { VscVscode } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="habilidades">
      <div className="skills__container">
        <p className="skills__label">Tecnologías que utilizo</p>

        <h2 className="skills__title">
          Mis <span className="skills__highlight">habilidades</span>
        </h2>

        <p className="skills__description">
          Lenguajes, frameworks, bibliotecas y herramientas que he utilizado en
          el desarrollo de mis proyectos.
        </p>

        <div className="skills__groups">
          <div className="skills__group">
            <h3 className="skills__group-title">Lenguajes</h3>

            <div className="skills__icons">
              <div className="skills__item">
                <SiJavascript />
                <span className="skills__tooltip">JavaScript</span>
              </div>

              <div className="skills__item">
                <SiPython />
                <span className="skills__tooltip">Python</span>
              </div>

              <div className="skills__item">
                <SiKotlin />
                <span className="skills__tooltip">Kotlin</span>
              </div>
            </div>
          </div>

          {/* FRONTEND */}
          <div className="skills__group">
            <h3 className="skills__group-title">Frontend</h3>

            <div className="skills__icons">
              <div className="skills__item">
                <SiHtml5 />
                <span className="skills__tooltip">HTML5</span>
              </div>
              <div className="skills__item">
                <SiCss />
                <span className="skills__tooltip">CSS3</span>
              </div>
              <div className="skills__item">
                <SiReact />
                <span className="skills__tooltip">React</span>
              </div>
              <div className="skills__item">
                <SiIonic />
                <span className="skills__tooltip">Ionic</span>
              </div>
              <div className="skills__item">
                <SiMui />
                <span className="skills__tooltip">Material UI</span>
              </div>
              <div className="skills__item">
                <SiJetpackcompose />
                <span className="skills__tooltip">Jetpack Compose</span>
              </div>
            </div>
          </div>

          {/* BACKEND */}
          <div className="skills__group">
            <h3 className="skills__group-title">Backend</h3>

            <div className="skills__icons">
              <div className="skills__item">
                <SiNodedotjs />
                <span className="skills__tooltip">Node.js</span>
              </div>

              <div className="skills__item">
                <SiDjango />
                <span className="skills__tooltip">Django</span>
              </div>
            </div>
          </div>

          {/* BASES DE DATOS */}
          <div className="skills__group">
            <h3 className="skills__group-title">Bases de datos</h3>

            <div className="skills__icons">
              <div className="skills__item">
                <SiPostgresql />
                <span className="skills__tooltip">PostgreSQL</span>
              </div>

              <div className="skills__item">
                <SiMysql />
                <span className="skills__tooltip">MySQL</span>
              </div>
            </div>
          </div>
          {/* HERRAMIENTAS */}
          <div className="skills__group">
            <h3 className="skills__group-title">Herramientas</h3>

            <div className="skills__icons">
              <div className="skills__item">
                <SiGit />
                <span className="skills__tooltip">Git</span>
              </div>

              <div className="skills__item">
                <SiGithub />
                <span className="skills__tooltip">GitHub</span>
              </div>

              <div className="skills__item">
                <SiDocker />
                <span className="skills__tooltip">Docker</span>
              </div>

              <div className="skills__item">
                <SiPostman />
                <span className="skills__tooltip">Postman</span>
              </div>

              <div className="skills__item">
                <VscVscode />
                <span className="skills__tooltip">Visual Studio Code</span>
              </div>

              <div className="skills__item">
                <SiAndroidstudio />
                <span className="skills__tooltip">Android Studio</span>
              </div>

              <div className="skills__item">
                <FaDatabase />
                <span className="skills__tooltip">pgAdmin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
