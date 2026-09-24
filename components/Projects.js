"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaBrain,
  FaNetworkWired,
  FaChartLine,
  FaChartBar,
  FaDatabase,
  FaCode,
  FaRobot,
  FaPython,
} from "react-icons/fa";
import { DEFAULT_CONTENT } from "../lib/content-defaults";

const ICONS = {
  brain: <FaBrain />,
  network: <FaNetworkWired />,
  chart: <FaChartLine />,
  chartBar: <FaChartBar />,
  database: <FaDatabase />,
  code: <FaCode />,
  robot: <FaRobot />,
  python: <FaPython />,
};

export default function Projects({
  items = DEFAULT_CONTENT.projects,
  githubRepos = [],
  social = DEFAULT_CONTENT.social,
}) {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (index) => {
    setOpenProject(
      openProject === index ? null : index
    );
  };

  const resolveGithubUrl = (repoSlug) => {
    const match = githubRepos.find((repo) => repo.name === repoSlug);
    return match ? match.url : social.github;
  };

  return (
    <section
      id="projects"
      className="projects-section"
    >

      <motion.div
        className="projects-heading"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <span className="section-label">
          02 — SELECTED WORK
        </span>

        <h2>
          Projects That
          <span> Solve Problems.</span>
        </h2>

        <p>
          A collection of machine learning,
          artificial intelligence and data science
          projects built to explore ideas and solve
          practical problems.
        </p>
      </motion.div>

      <div className="projects-list">

        {items.map((project, index) => {

          const isOpen =
            openProject === index;

          return (
            <motion.div
              key={project.title}
              className={`project-card ${
                isOpen
                  ? "project-card-open"
                  : ""
              }`}
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
                delay: index * 0.08,
              }}
              whileHover={{
                y: -7,
              }}
            >

              <button
                className="project-card-header"
                onClick={() =>
                  toggleProject(index)
                }
              >

                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-icon">
                  {ICONS[project.iconKey] || ICONS.code}
                </div>

                <div className="project-main-info">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.shortDescription}
                  </p>

                </div>

                <motion.div
                  className="project-chevron"
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                >
                  <FaChevronDown />
                </motion.div>

              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="project-expanded"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                  >

                    <div className="project-expanded-inner">

                      {/* PROJECT IMAGE */}

                      <div className="project-preview">

                        <div className="preview-label">
                          PROJECT PREVIEW
                        </div>

                        <div className="preview-window">

                          <div className="preview-topbar">
                            <span />
                            <span />
                            <span />

                            <small>
                              {project.title}
                            </small>
                          </div>

                          <div className="preview-image-wrapper">

                            {project.image && (
                              <img
                                src={project.image}
                                alt={project.title}
                                onError={(e) => {
                                  e.currentTarget.style.display =
                                    "none";
                                }}
                              />
                            )}

                            <div className="preview-placeholder">

                              <div>
                                {ICONS[project.iconKey] || ICONS.code}
                              </div>

                              <span>
                                PROJECT VISUAL
                              </span>

                            </div>

                          </div>

                        </div>

                      </div>

                      {/* DESCRIPTION */}

                      <div className="project-description">

                        <span>
                          PROJECT OVERVIEW
                        </span>

                        <p>
                          {project.description}
                        </p>

                      </div>

                      {/* TECHNOLOGIES */}

                      <div className="project-tech">

                        <span>
                          TECHNOLOGIES
                        </span>

                        <div className="tech-list">

                          {project.technologies.map(
                            (technology) => (
                              <span
                                key={technology}
                              >
                                {technology}
                              </span>
                            )
                          )}

                        </div>

                      </div>

                      {/* LINKS */}

                      <div className="project-links">

                        <a
                          href={resolveGithubUrl(project.repoSlug)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub />
                          GitHub
                        </a>

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaExternalLinkAlt />
                            Live Demo
                          </a>
                        )}

                      </div>

                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}
