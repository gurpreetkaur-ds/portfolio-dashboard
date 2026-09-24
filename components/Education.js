"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { DEFAULT_CONTENT } from "../lib/content-defaults";

export default function Education({ items = DEFAULT_CONTENT.education }) {
  return (
    <section id="education" className="education-section">
      <motion.div
        className="education-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-label">04 — EDUCATION</span>
        <h2>
          Academic
          <span> Background.</span>
        </h2>
      </motion.div>

      <div className="education-list">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="education-icon">
              <FaGraduationCap />
            </div>

            <div className="education-content">
              <h3>{item.degree}</h3>
              <span className="education-meta">{item.school}</span>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
