"use client";

import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch, FaUsers } from "react-icons/fa";

export default function GithubActivity({ profile, repos }) {
  const totalStars = (repos || []).reduce(
    (sum, repo) => sum + (repo.stars || 0),
    0
  );

  const stats = [
    { icon: <FaGithub />, value: profile?.publicRepos ?? "—", label: "PUBLIC REPOS" },
    { icon: <FaStar />, value: totalStars, label: "TOTAL STARS" },
    { icon: <FaUsers />, value: profile?.followers ?? "—", label: "FOLLOWERS" },
    {
      icon: <FaCodeBranch />,
      value: (repos || []).reduce((s, r) => s + (r.forks || 0), 0),
      label: "TOTAL FORKS",
    },
  ];

  return (
    <section className="github-activity-section">
      <motion.div
        className="github-activity-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-label">03 — GITHUB ACTIVITY</span>
        <h2>
          Live From
          <span> GitHub.</span>
        </h2>
        <p>
          Real-time contribution activity and repository stats, pulled
          directly from my GitHub profile.
        </p>
      </motion.div>

      <div className="github-stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="github-stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="github-stat-icon">{stat.icon}</div>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      {profile?.login && (
        <motion.div
          className="github-contribution-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="github-contribution-header">
            <span>CONTRIBUTION GRAPH</span>
            <a
              href={profile.htmlUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Profile <FaGithub />
            </a>
          </div>

          <img
            src={`https://ghchart.rshah.org/4da3ff/${profile.login}`}
            alt={`${profile.name}'s GitHub contribution graph`}
            className="github-contribution-graph"
            loading="lazy"
          />
        </motion.div>
      )}
    </section>
  );
}
