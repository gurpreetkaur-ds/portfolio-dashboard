"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaCode,
  FaRobot,
  FaNetworkWired,
} from "react-icons/fa";
import { DEFAULT_CONTENT } from "../lib/content-defaults";

const ICONS = {
  python: <FaPython />,
  database: <FaDatabase />,
  brain: <FaBrain />,
  chartBar: <FaChartBar />,
  chart: <FaChartLine />,
  code: <FaCode />,
  robot: <FaRobot />,
  network: <FaNetworkWired />,
};

const COLORS = ["#4DA3FF", "#00D9FF"];

export default function Skills({ items = DEFAULT_CONTENT.skills }) {
  return (
    <section className="skills">

      <div className="skills-header">

        <span className="section-tag">
          MY SKILLS
        </span>

        <h2>
          Technical Expertise
        </h2>

        <p>
          A collection of technologies, frameworks and tools
          I've used to build Artificial Intelligence,
          Machine Learning and Data Science projects.
        </p>

      </div>

      <div className="skills-grid">

        {items.map((skill, index) => (

          <motion.div
            key={skill.title}
            className="skill-card"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .6,
              delay: index * .15,
            }}
            viewport={{
              once: true,
            }}
          >

            <div className="skill-top">

              <div
                className="skill-icon"
                style={{
                  color: COLORS[index % COLORS.length],
                }}
              >
                {ICONS[skill.iconKey] || ICONS.code}
              </div>

              <h3>
                {skill.title}
              </h3>

            </div>

            <div className="progress">

              <motion.div
                className="progress-fill"
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: `${skill.level}%`,
                }}
                transition={{
                  duration: 1.4,
                }}
                viewport={{
                  once: true,
                }}
              />

            </div>

            <span className="skill-level">

              {skill.level}%

            </span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
