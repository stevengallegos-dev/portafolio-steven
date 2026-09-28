import { useState } from "react";
import { HiOutlineMapPin, HiOutlineEnvelope } from "react-icons/hi2";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    const email = "gallegossteven@hotmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("No se pudo copiar el correo:", error);
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        <h2 className="contact__title">
          Construyamos algo <span>juntos</span>
        </h2>

        <p className="contact__description">
          Quiero aportar mis conocimientos, responsabilidad y compromiso en
          proyectos de software, enfrentando nuevos retos y contribuyendo con
          soluciones que generen valor.
        </p>

        <div className="contact__card">
          <HiOutlineEnvelope className="contact__main-icon" />

          <h3>Hablemos</h3>

          <p className="contact__card-description">
            Puedes contactarme a través de cualquiera de estos medios.
          </p>

          <div className="contact__methods">
            <button
              className={`contact__method ${copied ? "contact__method--copied" : ""}`}
              type="button"
              onClick={copyEmail}
            >
              <HiOutlineEnvelope />
              {copied ? "✓ Correo copiado" : "Copiar correo"}
            </button>

            <a
              className="contact__method"
              href="https://wa.me/593987567750"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              className="contact__method"
              href="https://www.linkedin.com/in/steven-gallegos-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>
          </div>

          <div className="contact__location">
            <HiOutlineMapPin className="contact__location-icon" />
            <p>Quito, Ecuador</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
