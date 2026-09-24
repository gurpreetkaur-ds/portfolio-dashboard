"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from "react-icons/fa";

function formatRepoName(name) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function ProjectGallery({ repos }) {
  const hasRepos = Array.isArray(repos) && repos.length > 0;

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <p>AUTO-SYNCED FROM GITHUB</p>
        <h2>Repository Gallery</h2>
        <span>
          Every public repository below is fetched live from my GitHub
          profile, so it always reflects my latest work.
        </span>
      </div>

      {hasRepos ? (
        <div className="gallery-grid">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(index * 0.08, 0.4) }}
              viewport={{ once: true }}
              className="gallery-card"
            >
              <div className="gallery-content">
                <div className="gallery-card-top">
                  <h3>{formatRepoName(repo.name)}</h3>
                  {repo.language && (
                    <span className="gallery-language">{repo.language}</span>
                  )}
                </div>

                <p>
                  {repo.description ||
                    "No description provided for this repository yet."}
                </p>

                {repo.topics.length > 0 && (
                  <div className="gallery-topics">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                )}

                <div className="gallery-meta">
                  <span>
                    <FaStar /> {repo.stars}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks}
                  </span>
                </div>

                <div className="gallery-buttons">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-btn"
                  >
                    <FaGithub />
                    Code
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="gallery-btn live"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="gallery-empty">
          GitHub repositories couldn't be loaded right now. Check back soon.
        </p>
      )}
    </section>
  );
}
