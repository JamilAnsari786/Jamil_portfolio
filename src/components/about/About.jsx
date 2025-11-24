import React from "react";
import "./about.css";
import ME from "../../assets/Image1.jpg";
import { FaAward, FaUsers, FaProjectDiagram } from "react-icons/fa";

function About() {
  const stats = [
    {
      icon: FaAward,
      number: "2+",
      title: "Months Experience",
      description: "Building web applications"
    },
    {
      icon: FaUsers,
      number: "2+",
      title: "Happy Clients",
      description: "Satisfied with my work"
    },
    {
      icon: FaProjectDiagram,
      number: "5+",
      title: "Projects Completed",
      description: "Across various technologies"
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container about__container">
        {/* Section Header */}
        <div className="about__header">
          <h5>Get to Know</h5>
          <h2>About Me</h2>
          <div className="section__underline"></div>
        </div>

        {/* Main Content */}
        <div className="about__content">
          {/* Image Section */}
          <div className="about__image-section">
            <div className="about__image-wrapper">
              <div className="image__container">
                <img src={ME} alt="Jamil Ansari - Fullstack Developer" className="about__image" />
                <div className="image__overlay">
                  <div className="overlay__content">
                    <h3>Jamil Ansari</h3>
                    <p>Fullstack Developer</p>
                  </div>
                </div>
              </div>
              <div className="image__border-gradient"></div>
              <div className="image__glow-effect"></div>
            </div>
          </div>

          {/* Info Section */}
          <div className="about__info-section">
            {/* Stats Cards */}
            <div className="stats__grid">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="stat__card">
                    <div className="stat__icon-wrapper">
                      <IconComponent className="stat__icon" />
                    </div>
                    <div className="stat__content">
                      <h3 className="stat__number">{stat.number}</h3>
                      <h5 className="stat__title">{stat.title}</h5>
                      <p className="stat__description">{stat.description}</p>
                    </div>
                    <div className="stat__hover-effect"></div>
                  </div>
                );
              })}
            </div>

            {/* Description */}
            <div className="about__description">
              <div className="description__text">
                <p>
                  <span className="highlight">Hi, I'm Jamil Ansari</span> — a passionate Fullstack Developer 
                  with expertise in modern web technologies. I specialize in creating responsive, 
                  user-friendly applications using <strong>React, Node.js, and modern CSS frameworks</strong>.
                </p>
                <p>
                  With a strong foundation in both frontend and backend development, I bring ideas to life 
                  through clean, efficient code and innovative solutions. I'm constantly learning and adapting 
                  to new technologies to deliver the best possible user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="about__cta">
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
              <a href="#portfolio" className="btn btn-outline">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;