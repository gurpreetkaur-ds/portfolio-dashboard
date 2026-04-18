"use client";

import { useState } from "react";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const reply = (text) => {
    if (text.includes("projects")) return "AI, ML, Voice systems";
    if (text.includes("about")) return "Futuristic AI developer portfolio";
    return "Ask about projects or about";
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} style={btn}>AI</button>

      {open && (
        <div style={box}>
          <input onChange={(e) => setMsg(e.target.value)} />
          <p>{reply(msg)}</p>
        </div>
      )}
    </>
  );
}

const btn = {
  position: "fixed",
  bottom: 100,
  right: 30,
  background: "#4da3ff",
  width: 50,
  height: 50,
  borderRadius: "50%",
};

const box = {
  position: "fixed",
  bottom: 170,
  right: 30,
  width: 200,
  background: "#111",
  padding: "10px",
};