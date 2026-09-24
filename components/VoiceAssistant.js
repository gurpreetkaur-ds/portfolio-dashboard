"use client";

import { useEffect, useRef, useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";

export default function VoiceAssistant() {
  const recognitionRef = useRef(null);

  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onresult = (event) => {
      const transcript =
        event.results[event.results.length - 1][0].transcript.toLowerCase();

      console.log("Voice:", transcript);

      navigate(transcript);
    };

    recognitionRef.current = recognition;
  }, []);

  function navigate(text) {
    if (text.includes("home")) {
      scroll("home");
    }

    else if (text.includes("about")) {
      scroll("about");
    }

    else if (text.includes("project")) {
      scroll("projects");
    }

    else if (text.includes("gallery")) {
      scroll("gallery");
    }

    else if (text.includes("skill")) {
      scroll("skills");
    }

    else if (text.includes("certificate")) {
      scroll("certifications");
    }

    else if (text.includes("education")) {
      scroll("education");
    }

    else if (text.includes("contact")) {
      scroll("contact");
    }

    else if (text.includes("resume")) {
      window.open("/resume.pdf");
    }
  }

  function scroll(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function toggleMic() {
    if (!recognitionRef.current) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    if (listening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  }

  return (
    <button
      className="mic-button"
      onClick={toggleMic}
      title="Voice Assistant"
    >
      {listening ? (
        <FaMicrophoneSlash size={24} />
      ) : (
        <FaMicrophone size={24} />
      )}
    </button>
  );
}