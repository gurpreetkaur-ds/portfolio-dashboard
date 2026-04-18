"use client";

import { useEffect } from "react";

export default function Intro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={screen}>
      <h1 style={{ color: "#4da3ff" }}>
        Initializing AI System...
      </h1>
    </div>
  );
}

const screen = {
  position: "fixed",
  inset: 0,
  background: "#000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};