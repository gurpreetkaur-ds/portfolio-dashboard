export default function Education() {
  return (
    <section id="education" style={section}>
      <h2 style={title}>Education</h2>

      <div style={card}>
        <h3>MSc Data Science & AI</h3>
        <p style={meta}>GISMA — Potsdam, Germany</p>

        <p>
          Focused on machine learning, deep learning, and data analytics.
          Built multiple AI projects and research-based models.
        </p>
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

const card = {
  background: "rgba(0,140,255,0.05)",
  border: "1px solid rgba(0,140,255,0.2)",
  padding: "20px",
  borderRadius: "12px",
};

const meta = { color: "#aaa", fontSize: "12px" };