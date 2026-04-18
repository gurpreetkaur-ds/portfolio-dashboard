export default function Skills() {
  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "Scikit-learn",
    "SQL",
    "Power BI",
    "Docker",
    "LangChain",
  ];

  return (
    <section id="skills" style={section}>
      <h2 style={title}>Skills</h2>

      <div style={grid}>
        {skills.map((skill, i) => (
          <span key={i} style={pill}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

const section = { padding: "80px 20px" };

const title = {
  fontSize: "36px",
  color: "#4da3ff",
  marginBottom: "20px",
};

const grid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const pill = {
  padding: "8px 14px",
  borderRadius: "20px",
  border: "1px solid rgba(77,163,255,0.3)",
  color: "#4da3ff",
  fontSize: "12px",
};