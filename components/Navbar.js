"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const items = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  // 🔥 detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      items.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🚀 scroll to section
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={nav}>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          style={{
            ...btn,
            ...(active === item.id ? activeBtn : {}),
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

/* STYLES */

const nav = {
  position: "fixed",
  bottom: 20,
  left: "50%",
  transform: "translateX(-50%)",

  display: "flex",
  gap: "10px",
  padding: "10px 15px",

  background: "rgba(0, 0, 0, 0.6)",
  border: "1px solid rgba(255,255,255,0.1)",

  borderRadius: "40px",

  backdropFilter: "blur(15px)",
  WebkitBackdropFilter: "blur(15px)",

  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",

  zIndex: 1000,
};

const btn = {
  padding: "8px 14px",
  borderRadius: "20px",
  border: "none",

  background: "transparent",
  color: "#aaa",

  fontSize: "12px",
  cursor: "pointer",

  transition: "0.3s",
};

const activeBtn = {
  background: "#fff",
  color: "#000",
};