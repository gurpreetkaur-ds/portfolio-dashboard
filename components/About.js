"use client";

import { motion } from "framer-motion";
import {
  FaBrain,
  FaDatabase,
  FaChartLine,
  FaChartBar,
  FaCode,
  FaRobot,
  FaPython,
  FaNetworkWired,
} from "react-icons/fa";
import { DEFAULT_CONTENT } from "../lib/content-defaults";

const ICONS = {
  brain: <FaBrain />,
  database: <FaDatabase />,
  chart: <FaChartLine />,
  chartBar: <FaChartBar />,
  code: <FaCode />,
  robot: <FaRobot />,
  python: <FaPython />,
  network: <FaNetworkWired />,
};

export default function About({ content = DEFAULT_CONTENT.about }) {
  return (
    <section id="about" className="about-section">

      {/* Section heading */}

      <motion.div
        className="about-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">
          01 — ABOUT ME
        </span>

        <h2>
          {content.headingLine1}
          <span> {content.headingLine2}</span>
        </h2>

        <p>
          {content.intro}
        </p>
      </motion.div>

      {/* Main About Card */}

      <motion.div
        className="about-main-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="about-profile">

          <div className="about-avatar">
            {content.avatarInitials}
          </div>

          <div>
            <span className="about-small">
              {content.subheading}
            </span>

            <h3>
              {content.cardTitle}
            </h3>
          </div>

        </div>

        <div className="about-text">

          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

        </div>

      </motion.div>

      {/* Highlight Cards */}

      <div className="about-highlights">

        {content.highlights.map((item, index) => (
          <motion.div
            key={item.title}
            className="about-highlight-card"
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
              scale: 1.025,
            }}
          >

            <div className="highlight-icon">
              {ICONS[item.iconKey] || ICONS.code}
            </div>

            <h4>
              {item.title}
            </h4>

            <p>
              {item.text}
            </p>

            <span className="highlight-arrow">
              →
            </span>

          </motion.div>
        ))}

      </div>

      {/* Stats */}

      <div className="about-stats">

        {content.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="about-stat"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >

            <strong>
              {stat.number}
            </strong>

            <span>
              {stat.label}
            </span>

          </motion.div>
        ))}

      </div>

    </section>
  );
}
