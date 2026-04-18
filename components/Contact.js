export default function Contact() {
  return (
    <section id="contact" style={section}>
      <h2 style={title}>Contact</h2>

      <p style={text}>Let’s connect and build something amazing.</p>

      <div style={links}>
        <a href="mailto:your@email.com" style={link}>Email</a>
        <a href="#" style={link}>LinkedIn</a>
        <a href="#" style={link}>GitHub</a>
      </div>
    </section>
  );
}

const section = {
  padding: "80px 20px",
  textAlign: "center",
};

const title = {
  fontSize: "36px",
  color: "#4da3ff",
  marginBottom: "20px",
};

const text = {
  color: "#aaa",
  marginBottom: "20px",
};

const links = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
};

const link = {
  color: "#4da3ff",
  textDecoration: "none",
  border: "1px solid rgba(77,163,255,0.3)",
  padding: "8px 16px",
  borderRadius: "20px",
};