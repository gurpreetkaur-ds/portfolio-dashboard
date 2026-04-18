"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <motion.h1 style={{ fontSize: "80px", color: "#4da3ff" }}>
        GURPREET KAUR
      </motion.h1>

      <p style={{ color: "#aaa" }}>
        Data Scientist · ML Engineer · AI Engineer
      </p>
    </section>
  );
}