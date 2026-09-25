import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./SocialLinks.css";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/stevengallegos-dev"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links__item"
        aria-label="GitHub"
      >
        <FaGithub />
        <span className="social-links__tooltip">GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/steven-gallegos-"
        target="_blank"
        rel="noopener noreferrer"
        className="social-links__item"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
        <span className="social-links__tooltip">LinkedIn</span>
      </a>

      <ThemeToggle />
    </div>
  );
}

export default SocialLinks;