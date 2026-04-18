"use client";

import { useEffect } from "react";

export default function VoiceAssistant() {
  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  useEffect(() => {
    speak("Welcome to portfolio");
  }, []);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.start();

    recognition.onresult = (e) => {
      const cmd = e.results[0][0].transcript.toLowerCase();

      if (cmd.includes("about"))
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });

      if (cmd.includes("projects"))
        document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    };
  };

  return (
    <button onClick={startListening} style={btn}>
      🎤
    </button>
  );
}

const btn = {
  position: "fixed",
  bottom: 30,
  right: 30,
  width: 60,
  height: 60,
  borderRadius: "50%",
  background: "#4da3ff",
  border: "none",
  boxShadow: "0 0 20px rgba(0,140,255,0.5)",
};