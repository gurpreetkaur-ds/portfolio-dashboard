"use client";

import { useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { DEFAULT_CONTENT } from "../lib/content-defaults";

export default function Contact({ content = DEFAULT_CONTENT }) {
  const { hero, contact, social } = content;

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    email: "",
    type: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact — ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Role: ${formData.role}\n` +
      `Email: ${formData.email}\n` +
      `I am: ${formData.type}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href =
      `mailto:${social.email}?subject=${subject}&body=${body}`;

    setSent(true);
  };

  return (
    <section id="contact" className="contact-section">

      {/* HEADER */}
      <div className="contact-heading">

        <span className="section-label">
          07 — GET IN TOUCH
        </span>

        <div className="contact-heading-row">

          <div>
            <h2>
              Let's Build
              <span> Something.</span>
            </h2>

            <p>
              Have an opportunity, project idea, or just want
              to connect? I'd love to hear from you.
            </p>
          </div>

          <div className="contact-status">
            <span className="contact-status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

        </div>
      </div>

      {/* MAIN CONTACT AREA */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-profile">

          <div className="contact-profile-top">

            <div className="contact-avatar">
              {hero.firstName?.[0]}
              {hero.lastName?.[0]}
            </div>

            <div>
              <h3>
                {hero.firstName} {hero.lastName}
              </h3>

              <p>
                {hero.roles.join(" · ")}
              </p>
            </div>

          </div>

          <div className="contact-line" />

          <p className="contact-intro">
            {contact.intro}
          </p>

          {/* SOCIAL LINKS */}
          <div className="contact-socials">

            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
              <FaArrowUp className="contact-external" />
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
              <span>LinkedIn</span>
              <FaArrowUp className="contact-external" />
            </a>

            <a href={`mailto:${social.email}`}>
              <FaEnvelope />
              <span>Email</span>
              <FaArrowUp className="contact-external" />
            </a>

          </div>

          <div className="contact-availability">

            <div className="availability-pulse" />

            <div>
              <strong>{contact.availabilityTitle}</strong>
              <span>{contact.availabilityText}</span>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="contact-form-wrapper">

          <div className="contact-form-header">
            <span>START A CONVERSATION</span>

            <p>
              Tell me a little about yourself and
              what you'd like to discuss.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME + ROLE */}
            <div className="contact-form-row">

              <div className="contact-field">
                <label>
                  FULL NAME <span>*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label>
                  YOUR ROLE
                </label>

                <input
                  type="text"
                  name="role"
                  placeholder="e.g. Recruiter, Student..."
                  value={formData.role}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* EMAIL */}
            <div className="contact-field">
              <label>
                EMAIL ADDRESS <span>*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* I AM */}
            <div className="contact-field">

              <label>
                I AM... <span>*</span>
              </label>

              <div className="contact-options">

                {[
                  "A Recruiter",
                  "A Hiring Manager",
                  "Looking to Collaborate",
                  "Just Connecting",
                ].map((option) => (

                  <button
                    type="button"
                    key={option}
                    className={
                      formData.type === option
                        ? "contact-option active"
                        : "contact-option"
                    }
                    onClick={() =>
                      setFormData({
                        ...formData,
                        type: option,
                      })
                    }
                  >
                    {option}
                  </button>

                ))}

              </div>

            </div>

            {/* MESSAGE */}
            <div className="contact-field">

              <label>
                MORE INFO <span>*</span>
              </label>

              <textarea
                name="message"
                placeholder="Tell me what you'd like to talk about..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />

            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="contact-submit"
            >
              {sent ? "OPENING EMAIL..." : "SEND MESSAGE"}

              <FaArrowUp />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}
