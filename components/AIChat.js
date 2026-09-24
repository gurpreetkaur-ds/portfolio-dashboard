"use client";

import { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm Kaur's AI Assistant. Ask me anything about projects, skills, education or contact information."
    }
  ]);

  function askAI() {
    if (!input.trim()) return;

    const question = input.toLowerCase();

    const newMessages = [
      ...messages,
      {
        sender: "user",
        text: input
      }
    ];

    let answer =
      "I'm still learning. Try asking about projects, skills, education, certifications, resume or contact.";

    if (question.includes("project")) {
      answer =
        "Kaur has built an AI Scientist Dashboard, a Network Intrusion Detection System and an LSTM Cryptocurrency Forecasting model.";
    }

    if (question.includes("skill")) {
      answer =
        "Python, Machine Learning, Deep Learning, TensorFlow, Scikit-learn, Streamlit, JavaScript, SQL, Power BI and Data Analytics.";
    }

    if (question.includes("education")) {
      answer =
        "Master's in Data Science with projects focused on Artificial Intelligence and Machine Learning.";
    }

    if (question.includes("certificate")) {
      answer =
        "Multiple AI and Machine Learning certifications are showcased in the Certifications section.";
    }

    if (question.includes("contact")) {
      answer =
        "Scroll to the Contact section to connect through Email, LinkedIn or GitHub.";
    }

    if (question.includes("resume")) {
      answer =
        "Click the Resume button in the Hero section to download it.";
    }

    newMessages.push({
      sender: "ai",
      text: answer
    });

    setMessages(newMessages);

    setInput("");
  }

  return (
    <>
      <button
        className="ai-button"
        onClick={() => setOpen(true)}
      >
        <FaRobot size={24} />
      </button>

      {open && (
        <div className="chat-window">

          <div className="chat-header">

            <span>AI Assistant</span>

            <button
              onClick={() => setOpen(false)}
            >
              <FaTimes />
            </button>

          </div>

          <div className="chat-body">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "user-message"
                    : "ai-message"
                }
              >
                {msg.text}
              </div>

            ))}

          </div>

          <div className="chat-input">

            <input
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") askAI();
              }}
            />

            <button onClick={askAI}>
              <FaPaperPlane />
            </button>

          </div>

        </div>
      )}
    </>
  );
}