"use client";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { DEFAULT_CONTENT } from "../lib/content-defaults";

const quickLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "GitHub", id: "github" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Footer({
  githubProfile,
  social = DEFAULT_CONTENT.social,
  name = `${DEFAULT_CONTENT.hero.firstName} ${DEFAULT_CONTENT.hero.lastName}`,
}) {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            GK<span>.</span>
          </span>
          <p>
            {githubProfile?.bio ||
              "Data Scientist building intelligent, data-driven applications."}
          </p>
        </div>

        <div className="footer-links">
          <span className="footer-heading">QUICK LINKS</span>
          <div className="footer-links-grid">
            {quickLinks.map((link) => (
              <button key={link.id} onClick={() => goTo(link.id)}>
                {link.name}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-socials">
          <span className="footer-heading">CONNECT</span>
          <div className="footer-socials-row">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a href={`mailto:${social.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {name}</span>
        <span>Data Science · AI · Machine Learning</span>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}
