"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { DEFAULT_CONTENT } from "../lib/content-defaults";

export default function Certifications({
  items = DEFAULT_CONTENT.certifications,
}) {
  return (
    <section id="certifications" className="certifications-section">
      <motion.div
        className="certifications-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-label">06 — ACHIEVEMENTS</span>
        <h2>
          Certifications &
          <span> Credentials.</span>
        </h2>
        <p>
          Courses and specializations that shaped my foundation in data
          science, machine learning and artificial intelligence.
        </p>
      </motion.div>

      <div className="certifications-grid">
        {items.map((cert, index) => (
          <motion.div
            key={index}
            className="certification-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="certification-icon">
              <FaCertificate />
            </div>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
