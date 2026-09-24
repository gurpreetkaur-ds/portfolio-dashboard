"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { DEFAULT_CONTENT } from "../lib/content-defaults";

export default function Experience({ items = DEFAULT_CONTENT.experience }) {
  if (!items || items.length === 0) return null;

  return (
    <section id="experience" className="experience-section">
      <motion.div
        className="experience-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-label">05 — EXPERIENCE</span>
        <h2>
          Professional
          <span> Experience.</span>
        </h2>
      </motion.div>

      <div className="experience-list">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="experience-icon">
              <FaBriefcase />
            </div>

            <div className="experience-content">
              <h3>{item.role}</h3>
              <span className="experience-meta">
                {item.company}
                {item.period ? ` · ${item.period}` : ""}
              </span>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
