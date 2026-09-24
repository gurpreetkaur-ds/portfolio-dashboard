"use client";

import { useState } from "react";
import Link from "next/link";

const TABS = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact & Social" },
];

const ICON_OPTIONS = [
  { key: "brain", label: "Brain (AI)" },
  { key: "database", label: "Database" },
  { key: "chart", label: "Chart (Line)" },
  { key: "chartBar", label: "Chart (Bar)" },
  { key: "code", label: "Code" },
  { key: "robot", label: "Robot" },
  { key: "python", label: "Python" },
  { key: "network", label: "Network" },
];

function Field({ label, children }) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export default function AdminEditor({
  initialContent,
  storeConfigured,
  logoutAction,
}) {
  const [content, setContent] = useState(initialContent);
  const [activeTab, setActiveTab] = useState("hero");
  const [status, setStatus] = useState(null);
  const [saving, setSaving] = useState(false);

  const updateSection = (section, field, value) => {
    setContent((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    setContent((prev) => {
      const list = [...prev[section]];
      list[index] = { ...list[index], [field]: value };
      return { ...prev, [section]: list };
    });
  };

  const addArrayItem = (section, template) => {
    setContent((prev) => ({
      ...prev,
      [section]: [...prev[section], template],
    }));
  };

  const removeArrayItem = (section, index) => {
    setContent((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setStatus(null);

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus({ type: "error", message: data.error || "Save failed." });
      } else {
        setContent(data.content);
        setStatus({ type: "success", message: "Saved successfully." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error while saving." });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          GK<span>.</span>
        </div>

        <nav>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <Link href="/" target="_blank">
            View live site ↗
          </Link>
          <form action={logoutAction}>
            <button type="submit" className="admin-logout">
              Log Out
            </button>
          </form>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <h1>Edit Portfolio Content</h1>

          <div className="admin-topbar-actions">
            {status && (
              <span className={`admin-status admin-status-${status.type}`}>
                {status.message}
              </span>
            )}
            <button
              className="admin-save-btn"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </header>

        {!storeConfigured && (
          <div className="admin-warning">
            Content storage isn't configured yet — DATABASE_URL (a Postgres
            connection string) is missing from your environment. Changes
            won't persist until you set this up (see the setup guide provided
            with this project).
          </div>
        )}

        {activeTab === "hero" && (
          <section className="admin-panel">
            <Field label="Greeting">
              <input
                value={content.hero.greeting}
                onChange={(e) =>
                  updateSection("hero", "greeting", e.target.value)
                }
              />
            </Field>

            <div className="admin-row">
              <Field label="First Name">
                <input
                  value={content.hero.firstName}
                  onChange={(e) =>
                    updateSection("hero", "firstName", e.target.value)
                  }
                />
              </Field>

              <Field label="Last Name">
                <input
                  value={content.hero.lastName}
                  onChange={(e) =>
                    updateSection("hero", "lastName", e.target.value)
                  }
                />
              </Field>
            </div>

            <Field label="Roles (comma-separated)">
              <input
                value={content.hero.roles.join(", ")}
                onChange={(e) =>
                  updateSection(
                    "hero",
                    "roles",
                    e.target.value.split(",").map((r) => r.trim())
                  )
                }
              />
            </Field>

            <Field label="Description">
              <textarea
                rows={4}
                value={content.hero.description}
                onChange={(e) =>
                  updateSection("hero", "description", e.target.value)
                }
              />
            </Field>

            <Field label="Availability Badge Text">
              <input
                value={content.hero.availabilityText}
                onChange={(e) =>
                  updateSection("hero", "availabilityText", e.target.value)
                }
              />
            </Field>
          </section>
        )}

        {activeTab === "about" && (
          <section className="admin-panel">
            <div className="admin-row">
              <Field label="Heading Line 1">
                <input
                  value={content.about.headingLine1}
                  onChange={(e) =>
                    updateSection("about", "headingLine1", e.target.value)
                  }
                />
              </Field>
              <Field label="Heading Line 2 (gradient)">
                <input
                  value={content.about.headingLine2}
                  onChange={(e) =>
                    updateSection("about", "headingLine2", e.target.value)
                  }
                />
              </Field>
            </div>

            <Field label="Intro">
              <textarea
                rows={3}
                value={content.about.intro}
                onChange={(e) =>
                  updateSection("about", "intro", e.target.value)
                }
              />
            </Field>

            <div className="admin-row">
              <Field label="Avatar Initials">
                <input
                  value={content.about.avatarInitials}
                  onChange={(e) =>
                    updateSection("about", "avatarInitials", e.target.value)
                  }
                />
              </Field>
              <Field label="Subheading">
                <input
                  value={content.about.subheading}
                  onChange={(e) =>
                    updateSection("about", "subheading", e.target.value)
                  }
                />
              </Field>
            </div>

            <Field label="Card Title">
              <input
                value={content.about.cardTitle}
                onChange={(e) =>
                  updateSection("about", "cardTitle", e.target.value)
                }
              />
            </Field>

            <Field label="Paragraph 1">
              <textarea
                rows={3}
                value={content.about.paragraphs[0] || ""}
                onChange={(e) => {
                  const next = [...content.about.paragraphs];
                  next[0] = e.target.value;
                  updateSection("about", "paragraphs", next);
                }}
              />
            </Field>

            <Field label="Paragraph 2">
              <textarea
                rows={3}
                value={content.about.paragraphs[1] || ""}
                onChange={(e) => {
                  const next = [...content.about.paragraphs];
                  next[1] = e.target.value;
                  updateSection("about", "paragraphs", next);
                }}
              />
            </Field>

            <h3 className="admin-subheading">Highlight Cards</h3>

            {content.about.highlights.map((item, index) => (
              <div className="admin-card" key={index}>
                <div className="admin-row">
                  <Field label="Icon">
                    <select
                      value={item.iconKey}
                      onChange={(e) => {
                        const next = [...content.about.highlights];
                        next[index] = { ...item, iconKey: e.target.value };
                        updateSection("about", "highlights", next);
                      }}
                    >
                      {ICON_OPTIONS.map((opt) => (
                        <option key={opt.key} value={opt.key}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Title">
                    <input
                      value={item.title}
                      onChange={(e) => {
                        const next = [...content.about.highlights];
                        next[index] = { ...item, title: e.target.value };
                        updateSection("about", "highlights", next);
                      }}
                    />
                  </Field>
                </div>
                <Field label="Text">
                  <input
                    value={item.text}
                    onChange={(e) => {
                      const next = [...content.about.highlights];
                      next[index] = { ...item, text: e.target.value };
                      updateSection("about", "highlights", next);
                    }}
                  />
                </Field>
                <button
                  className="admin-remove-btn"
                  onClick={() => {
                    const next = content.about.highlights.filter(
                      (_, i) => i !== index
                    );
                    updateSection("about", "highlights", next);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              className="admin-add-btn"
              onClick={() =>
                updateSection("about", "highlights", [
                  ...content.about.highlights,
                  { iconKey: "code", title: "New Highlight", text: "" },
                ])
              }
            >
              + Add Highlight
            </button>

            <h3 className="admin-subheading">Stats</h3>

            {content.about.stats.map((stat, index) => (
              <div className="admin-row admin-inline-row" key={index}>
                <Field label="Number">
                  <input
                    value={stat.number}
                    onChange={(e) => {
                      const next = [...content.about.stats];
                      next[index] = { ...stat, number: e.target.value };
                      updateSection("about", "stats", next);
                    }}
                  />
                </Field>
                <Field label="Label">
                  <input
                    value={stat.label}
                    onChange={(e) => {
                      const next = [...content.about.stats];
                      next[index] = { ...stat, label: e.target.value };
                      updateSection("about", "stats", next);
                    }}
                  />
                </Field>
                <button
                  className="admin-remove-btn"
                  onClick={() => {
                    const next = content.about.stats.filter(
                      (_, i) => i !== index
                    );
                    updateSection("about", "stats", next);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              className="admin-add-btn"
              onClick={() =>
                updateSection("about", "stats", [
                  ...content.about.stats,
                  { number: "0", label: "NEW STAT" },
                ])
              }
            >
              + Add Stat
            </button>
          </section>
        )}

        {activeTab === "education" && (
          <section className="admin-panel">
            {content.education.map((item, index) => (
              <div className="admin-card" key={index}>
                <Field label="Degree">
                  <input
                    value={item.degree}
                    onChange={(e) =>
                      updateArrayItem("education", index, "degree", e.target.value)
                    }
                  />
                </Field>
                <Field label="School">
                  <input
                    value={item.school}
                    onChange={(e) =>
                      updateArrayItem("education", index, "school", e.target.value)
                    }
                  />
                </Field>
                <Field label="Description">
                  <textarea
                    rows={3}
                    value={item.description}
                    onChange={(e) =>
                      updateArrayItem(
                        "education",
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </Field>
                <button
                  className="admin-remove-btn"
                  onClick={() => removeArrayItem("education", index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              className="admin-add-btn"
              onClick={() =>
                addArrayItem("education", {
                  degree: "New Degree",
                  school: "School Name",
                  description: "",
                })
              }
            >
              + Add Education Entry
            </button>
          </section>
        )}

        {activeTab === "experience" && (
          <section className="admin-panel">
            {content.experience.map((item, index) => (
              <div className="admin-card" key={index}>
                <div className="admin-row">
                  <Field label="Role / Title">
                    <input
                      value={item.role}
                      onChange={(e) =>
                        updateArrayItem(
                          "experience",
                          index,
                          "role",
                          e.target.value
                        )
                      }
                    />
                  </Field>
                  <Field label="Company">
                    <input
                      value={item.company}
                      onChange={(e) =>
                        updateArrayItem(
                          "experience",
                          index,
                          "company",
                          e.target.value
                        )
                      }
                    />
                  </Field>
                </div>

                <Field label="Period (e.g. Jan 2024 — Present)">
                  <input
                    value={item.period}
                    onChange={(e) =>
                      updateArrayItem(
                        "experience",
                        index,
                        "period",
                        e.target.value
                      )
                    }
                  />
                </Field>

                <Field label="Description">
                  <textarea
                    rows={3}
                    value={item.description}
                    onChange={(e) =>
                      updateArrayItem(
                        "experience",
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </Field>

                <button
                  className="admin-remove-btn"
                  onClick={() => removeArrayItem("experience", index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              className="admin-add-btn"
              onClick={() =>
                addArrayItem("experience", {
                  role: "New Role",
                  company: "Company Name",
                  period: "",
                  description: "",
                })
              }
            >
              + Add Experience Entry
            </button>
          </section>
        )}

        {activeTab === "skills" && (
          <section className="admin-panel">
            {content.skills.map((item, index) => (
              <div className="admin-card" key={index}>
                <div className="admin-row">
                  <Field label="Title">
                    <input
                      value={item.title}
                      onChange={(e) =>
                        updateArrayItem("skills", index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="Icon">
                    <select
                      value={item.iconKey}
                      onChange={(e) =>
                        updateArrayItem(
                          "skills",
                          index,
                          "iconKey",
                          e.target.value
                        )
                      }
                    >
                      {ICON_OPTIONS.map((opt) => (
                        <option key={opt.key} value={opt.key}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Level (%)">
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={item.level}
                      onChange={(e) =>
                        updateArrayItem(
                          "skills",
                          index,
                          "level",
                          Number(e.target.value)
                        )
                      }
                    />
                  </Field>
                </div>
                <button
                  className="admin-remove-btn"
                  onClick={() => removeArrayItem("skills", index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              className="admin-add-btn"
              onClick={() =>
                addArrayItem("skills", {
                  title: "New Skill",
                  iconKey: "code",
                  level: 80,
                })
              }
            >
              + Add Skill
            </button>
          </section>
        )}

        {activeTab === "certifications" && (
          <section className="admin-panel">
            {content.certifications.map((item, index) => (
              <div className="admin-card" key={index}>
                <div className="admin-row">
                  <Field label="Title">
                    <input
                      value={item.title}
                      onChange={(e) =>
                        updateArrayItem(
                          "certifications",
                          index,
                          "title",
                          e.target.value
                        )
                      }
                    />
                  </Field>
                  <Field label="Issuer">
                    <input
                      value={item.issuer}
                      onChange={(e) =>
                        updateArrayItem(
                          "certifications",
                          index,
                          "issuer",
                          e.target.value
                        )
                      }
                    />
                  </Field>
                </div>
                <button
                  className="admin-remove-btn"
                  onClick={() => removeArrayItem("certifications", index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              className="admin-add-btn"
              onClick={() =>
                addArrayItem("certifications", {
                  title: "New Certification",
                  issuer: "Issuer",
                })
              }
            >
              + Add Certification
            </button>
          </section>
        )}

        {activeTab === "projects" && (
          <section className="admin-panel">
            {content.projects.map((item, index) => (
              <div className="admin-card" key={index}>
                <div className="admin-row">
                  <Field label="Title">
                    <input
                      value={item.title}
                      onChange={(e) =>
                        updateArrayItem("projects", index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="Icon">
                    <select
                      value={item.iconKey}
                      onChange={(e) =>
                        updateArrayItem(
                          "projects",
                          index,
                          "iconKey",
                          e.target.value
                        )
                      }
                    >
                      {ICON_OPTIONS.map((opt) => (
                        <option key={opt.key} value={opt.key}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="Category">
                  <input
                    value={item.category}
                    onChange={(e) =>
                      updateArrayItem("projects", index, "category", e.target.value)
                    }
                  />
                </Field>

                <Field label="Short Description">
                  <textarea
                    rows={2}
                    value={item.shortDescription}
                    onChange={(e) =>
                      updateArrayItem(
                        "projects",
                        index,
                        "shortDescription",
                        e.target.value
                      )
                    }
                  />
                </Field>

                <Field label="Full Description">
                  <textarea
                    rows={4}
                    value={item.description}
                    onChange={(e) =>
                      updateArrayItem(
                        "projects",
                        index,
                        "description",
                        e.target.value
                      )
                    }
                  />
                </Field>

                <Field label="Technologies (comma-separated)">
                  <input
                    value={item.technologies.join(", ")}
                    onChange={(e) =>
                      updateArrayItem(
                        "projects",
                        index,
                        "technologies",
                        e.target.value.split(",").map((t) => t.trim())
                      )
                    }
                  />
                </Field>

                <div className="admin-row">
                  <Field label="GitHub repo name (must match your GitHub repo exactly, optional)">
                    <input
                      value={item.repoSlug || ""}
                      onChange={(e) =>
                        updateArrayItem(
                          "projects",
                          index,
                          "repoSlug",
                          e.target.value || null
                        )
                      }
                    />
                  </Field>
                  <Field label="Live Demo URL (optional)">
                    <input
                      value={item.demo || ""}
                      onChange={(e) =>
                        updateArrayItem("projects", index, "demo", e.target.value)
                      }
                    />
                  </Field>
                </div>

                <button
                  className="admin-remove-btn"
                  onClick={() => removeArrayItem("projects", index)}
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              className="admin-add-btn"
              onClick={() =>
                addArrayItem("projects", {
                  iconKey: "code",
                  title: "New Project",
                  category: "CATEGORY",
                  image: "",
                  shortDescription: "",
                  description: "",
                  technologies: [],
                  repoSlug: null,
                  demo: "",
                })
              }
            >
              + Add Project
            </button>
          </section>
        )}

        {activeTab === "contact" && (
          <section className="admin-panel">
            <Field label="Intro Text">
              <textarea
                rows={3}
                value={content.contact.intro}
                onChange={(e) =>
                  updateSection("contact", "intro", e.target.value)
                }
              />
            </Field>

            <div className="admin-row">
              <Field label="Availability Title">
                <input
                  value={content.contact.availabilityTitle}
                  onChange={(e) =>
                    updateSection(
                      "contact",
                      "availabilityTitle",
                      e.target.value
                    )
                  }
                />
              </Field>
              <Field label="Availability Text">
                <input
                  value={content.contact.availabilityText}
                  onChange={(e) =>
                    updateSection(
                      "contact",
                      "availabilityText",
                      e.target.value
                    )
                  }
                />
              </Field>
            </div>

            <h3 className="admin-subheading">Social Links</h3>

            <Field label="GitHub URL">
              <input
                value={content.social.github}
                onChange={(e) =>
                  updateSection("social", "github", e.target.value)
                }
              />
            </Field>
            <Field label="LinkedIn URL">
              <input
                value={content.social.linkedin}
                onChange={(e) =>
                  updateSection("social", "linkedin", e.target.value)
                }
              />
            </Field>
            <Field label="Email">
              <input
                value={content.social.email}
                onChange={(e) =>
                  updateSection("social", "email", e.target.value)
                }
              />
            </Field>
          </section>
        )}
      </main>
    </div>
  );
}
