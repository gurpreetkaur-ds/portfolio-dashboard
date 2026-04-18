"use client";

import { useState } from "react";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const projects = [
    {
      title: "AI Scientist Dashboard — Intelligent Data Analysis Application",
      short:
        "AI-powered system that generates insights, correlations, and automated reports from datasets using LLMs.",
      full: `
Built an end-to-end AI-powered application integrating statistical analysis, LLM-generated insights, automated reporting, and interactive visualization — deployed as a working software product.

• Integrated GPT4All LLM to auto-generate research hypotheses and plain-language explanations of statistical correlation results from uploaded datasets.  
• Developed automated Pearson correlation analysis engine, PDF report generator, dataset comparison module, and voice output — modular architecture enabling independent testing of each component.
      `,
      tech: "Python · Streamlit · GPT4All · ReportLab",
    },
    {
      title: "Network Intrusion Detection System",
      short:
        "Machine learning system to detect cyber threats using ensemble and anomaly detection models.",
      full: `
Designed and deployed a multi-model ML classification system on 629,042 network flow records.

• Built Random Forest, Logistic Regression, and Isolation Forest models  
• Achieved ROC-AUC: 0.998 using optimized pipeline  
• Feature engineering with correlation filtering and scaling  
• Compared supervised vs unsupervised learning approaches  
• Research findings presented at Saint Peter's University  
      `,
      tech: "Python · Scikit-learn · Pandas",
    },
    {
      title: "LSTM Crypto Forecasting Model",
      short:
        "Deep learning model predicting cryptocurrency trends using sequential LSTM architecture.",
      full: `
Designed and trained an LSTM neural network for time-series forecasting.

• Built full pipeline using Yahoo Finance API  
• Applied Min-Max scaling and sequence generation  
• Tuned deep learning architecture using TensorFlow/Keras  
• Captured nonlinear temporal dependencies in financial data  
      `,
      tech: "Python · TensorFlow · Keras",
    },
  ];

  return (
    <section id="projects">
      <h2 style={title}>Projects</h2>

      <div style={grid}>
        {projects.map((p, i) => (
          <div key={i} style={card}>
            
            {/* TITLE + DROPDOWN */}
            <div style={header} onClick={() => toggle(i)}>
              <h3 style={h3}>{p.title}</h3>

              <span
                style={{
                  ...arrow,
                  transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                ▼
              </span>
            </div>

            {/* SHORT DESCRIPTION */}
            <p style={short}>{p.short}</p>

            {/* EXPANDED CONTENT */}
            {openIndex === i && (
              <div style={expanded}>
                <p style={{ whiteSpace: "pre-line" }}>{p.full}</p>
                <p style={tag}>{p.tech}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* STYLES */

const title = {
  fontSize: "40px",
  marginBottom: "30px",
  color: "#4da3ff",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const card = {
  background: "rgba(0,140,255,0.05)",
  border: "1px solid rgba(0,140,255,0.2)",
  padding: "20px",
  borderRadius: "14px",
  backdropFilter: "blur(10px)",
  transition: "0.3s",
};

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
};

const h3 = {
  fontSize: "16px",
  color: "#ffffff",
  margin: 0,
};

const arrow = {
  color: "#4da3ff",
  fontSize: "14px",
  transition: "0.3s",
};

const short = {
  fontSize: "13px",
  color: "#aaa",
  marginTop: "10px",
};

const expanded = {
  marginTop: "15px",
  fontSize: "13px",
  color: "#ddd",
  lineHeight: "1.6",
};

const tag = {
  marginTop: "10px",
  fontSize: "12px",
  color: "#4da3ff",
};