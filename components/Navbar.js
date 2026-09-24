"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <nav className="gk-navbar">
      <div className="gk-navbar-box">

        <button
          className="gk-navbar-logo"
          onClick={() => goTo("home")}
        >
          GK<span>.</span>
        </button>

        <div className={`gk-navbar-menu ${open ? "gk-menu-active" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="gk-navbar-link"
              onClick={() => goTo(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          className="gk-mobile-button"
          onClick={() => setOpen(!open)}
          aria-label="Open navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>
    </nav>
  );
}