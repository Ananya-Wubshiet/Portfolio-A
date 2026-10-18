import React, { useState } from "react";
import "./Portfolio.css";
// 🪄 Imports both distinct asset layouts for dark and light modes
import codingImgDark from "../assets/coding.jpg";
import codingImgLight from "../assets/coding2.jpg";

function Portfolio() {
  // React State Hook tracking the dynamic theme status
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const coreSkills = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL Database",
    "REST APIs",
    "JSON Web Tokens (JWT)",
    "Git & GitHub",
    "HTML5 & CSS3",
    "Deployment (Netlify/Render/Avien)",
  ];

  const capstoneProjects = [
    {
      title: "Netflix Clone Application",
      description:
        "A full-stack entertainment streaming application utilizing asynchronous REST API integrations, responsive row carousels, and dynamic database content management.",
      tech: ["React.js", "Node.js", "Express", "MySQL", "TMDB API", "CSS3"],
      github: "https://github.com/Ananya-Wubshiet/Netflix-Clone.git",
      live: "https://ananya-netflix-clone-pro.onrender.com",
      cardClass: "netflix-theme-card",
    },
    {
      title: "ChatGPT Clone Application",
      description:
        "An AI-powered conversational platform featuring streaming layout responses, real-time message state management, and custom request processing handlers.",
      tech: ["React.js", "Node.js", "Express", "MySQL", "Gemini API", "CSS3"],
      github: "https://github.com/Ananya-Wubshiet/ChatGpt-Clone.git",
      live: "https://ananya-chatgpt.netlify.app/",
      cardClass: "chatgpt-theme-card",
    },
    {
      title: "Evangadi Forum",
      description:
        "A complete multi-user technical communication infrastructure enabling structured question boards, threaded answer sections, and token-verified route protocols.",
      tech: [
        "React.js",
        "Node.js",
        "Express",
        "MySQL",
        "JWT Authentication",
        "REST APIs",
        "Resend Email API",
        "CSS3",
      ],
      github: "https://github.com/Ananya-Wubshiet/Evangadi-Forum.git",
      live: "https://ananya-evangadi-forum.netlify.app/",
      cardClass: "evangadi-theme-card",
    },
  ];

  return (
    <div className={`portfolio-container ${isLightMode ? "light-theme" : ""}`}>
      {/* --- STICKY NAVIGATION BAR WITH TOGGLE BUTTON --- */}
      <nav className="navbar">
        <div className="nav-logo">
          <code>&lt;</code>AW <span>/&gt;</span>
        </div>
        <div className="nav-right-cluster">
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Technical Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          {/* THE LIGHT / DARK RADIAL BUTTON */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle Theme"
          >
            {isLightMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {/* --- BRAND NEW SPLIT HERO CONFIGURATION --- */}
      <header className="hero-section" id="about">
        <div className="hero-grid-split">
          {/* Left Column: Your Intro Text */}
          <div className="hero-content-left">
            <span className="badge">AI Powered Full-Stack Developer</span>
            <h1>
              Hi, I'm <span className="highlight">Ananya Wubshiet</span>
            </h1>
            <p>
              Graduate of the intensive{" "}
              <strong>Evangadi Full-Stack Development Program</strong>.
              Specializing in crafting robust frontend application modules,
              building secure middleware layers, and architecting relational
              database structures.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                Review My Projects
              </a>
              <a href="#skills" className="btn btn-secondary">
                View Core Skills
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic Graphic Panel */}
          <div className="hero-graphic-right">
            <img
              /* 🪄 Dynamically swaps file sources on click to match the light background flawlessly */
              src={isLightMode ? codingImgLight : codingImgDark}
              alt="Full Stack Software Architecture Engineering Layout"
              className="developer-hero-img"
            />
          </div>
        </div>
      </header>

      {/* --- TECHNICAL SKILLS BLOCK --- */}
      <section className="skills-section" id="skills">
        <h2 className="section-title">Core Technical Stack</h2>
        <p className="section-subtitle">
          Verified stack capabilities utilized across individual development
          builds.
        </p>
        <div className="skills-container">
          {coreSkills.map((skill, index) => (
            <div className="skill-badge-item" key={index}>
              <span className="skill-dot">⚡</span> {skill}
            </div>
          ))}
        </div>
      </section>

      {/* --- TRIPLE CAPSTONE PROJECTS BLOCK WITH BRANDED CARD BACKGROUNDS --- */}
      <main className="projects-section" id="projects">
        <h2 className="section-title">Verified Capstone Work</h2>
        <p className="section-subtitle">
          Production-ready applications architected, developed, and deployed
          independently.
        </p>
        <div className="projects-grid">
          {capstoneProjects.map((project, index) => (
            <div className={`project-card ${project.cardClass}`} key={index}>
              <div className="card-header">
                <span className="folder-icon">📁</span>
                <span className="project-badge">Verified Release</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((techItem, idx) => (
                  <span className="tech-tag" key={idx}>
                    {techItem}
                  </span>
                ))}
              </div>
              <div className="card-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="action-link github-btn"
                >
                  Codebase (GitHub)
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="action-link live-btn"
                >
                  Interactive Live App
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- CONTACT ACCESS PANEL --- */}
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <p>
          Review my open-source code networks, professional profiles, or reach
          out directly via email.
        </p>
        <div className="contact-methods">
          <a
            href="https://github.com/Ananya-Wubshiet"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">💻 GitHub</span>
            <p>@Ananya-Wubshiet</p>
          </a>
          <a
            href="https://linkedin.com/in/ananya-wubshiet"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">👔 LinkedIn</span>
            <p>Connect Externally</p>
          </a>
          {/* Clipboard tracking click interface layout */}
          <div
            onClick={() => {
              navigator.clipboard.writeText("ananyawub20@gmail.com");
              alert(
                "Email copied to clipboard! You can now paste it directly into your email app.",
              );
            }}
            className="contact-card"
            style={{ cursor: "pointer" }}
          >
            <span className="contact-icon">✉️ Email (Click to Copy)</span>
            <p>ananyawub20@gmail.com</p>
          </div>
        </div>
      </section>

      {/* --- PRODUCTION FOOTER MARKER --- */}
      <footer className="portfolio-footer">
        <p>
          © 2026 Ananya Wubshiet. All infrastructure deployments individually
          maintained.
        </p>
      </footer>
    </div>
  );
}

export default Portfolio;
