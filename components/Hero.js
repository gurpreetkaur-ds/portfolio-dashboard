"use client";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { DEFAULT_CONTENT } from "../lib/content-defaults";

export default function Hero({
  content = DEFAULT_CONTENT.hero,
  social = DEFAULT_CONTENT.social,
}) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero-section">

      {/* Atmospheric background */}

      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-grid" />

      {/* Main content */}

      <div className="hero-inner">

        <motion.div
          className="hero-availability"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="availability-dot" />
          {content.availabilityText}
        </motion.div>

        <motion.p
          className="hero-small-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          {content.greeting}
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          {content.firstName}
          <span>{content.lastName}</span>
        </motion.h1>

        <motion.div
          className="hero-profession"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
        >
          {content.roles.map((role, index) => (
            <span key={role}>
              {index > 0 && <b>·</b>}
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
        >
          {content.description}
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
        >

          <button
            className="hero-main-button"
            onClick={() => scrollTo("projects")}
          >
            Explore My Work
            <FaArrowRight />
          </button>

          <button
            className="hero-outline-button"
            onClick={() => scrollTo("contact")}
          >
            Get In Touch
          </button>

        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.85,
          }}
        >

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

        </motion.div>

      </div>

      {/* Decorative data panel */}

      <motion.div
        className="hero-data-panel"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.8,
        }}
      >
        <div className="data-panel-header">
          <span />
          <span />
          <span />
        </div>

        <div className="data-panel-content">

          <div className="data-line">
            <span>AI</span>
            <div className="data-bar">
              <i style={{ width: "92%" }} />
            </div>
            <strong>92%</strong>
          </div>

          <div className="data-line">
            <span>ML</span>
            <div className="data-bar">
              <i style={{ width: "88%" }} />
            </div>
            <strong>88%</strong>
          </div>

          <div className="data-line">
            <span>DATA</span>
            <div className="data-bar">
              <i style={{ width: "95%" }} />
            </div>
            <strong>95%</strong>
          </div>

          <div className="data-code">
            <span>01</span>
            <span>model.predict(data)</span>
          </div>

          <div className="data-code">
            <span>02</span>
            <span>insights = analyze()</span>
          </div>

          <div className="data-code">
            <span>03</span>
            <span>result = intelligent</span>
          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}

      <motion.div
        className="hero-scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <div />
      </motion.div>

    </section>
  );
}
