import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaMobile, FaDesktop } from "react-icons/fa";

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      image: IMG1,
      title: "Traveling Website",
      description: " A sleek and responsive portfolio website to showcase projects and skills.",
      category: "Web Application",
      technologies: ["React"],
      github: "https://github.com/JamilAnsari786/Travelling_Website",
      demo: "https://moonyatri.netlify.app/",
      featured: true
    },
    {
      id: 2,
      image: IMG2,
      title: "Mobile Shop",
      description: "Modern e-commerce platform with user authentication, product listings, and shopping cart functionality.",
      category: "Web Application",
      technologies: ["React"],
      github: "https://github.com/JamilAnsari786/Mobile_Shop",
      demo: "https://mobile-shopss.netlify.app/",
      featured: true
    },
    {
      id: 3,
      image: IMG3,
      title: "Oman Enterprises",
      description: "oman Enterprises is a leading business conglomerate in Oman, with diversified interests in various sectors including construction, trading, and services. The company is known for its commitment to quality and excellence.",
      category: "Web Application",
      technologies: ["React", "Firebase"],
      github: "#",
      demo: "https://omanenterprises.in/",
      featured: false
    },
    {
      id: 4,
      image: IMG4,
      title: "MovieDb",
      description:  "MovieDb is a web application that allows users to search for movies, view details, and explore popular films. It features a clean and intuitive interface, making it easy for users to find information about their favorite movies.",
      category: "Web Application",
      technologies: ["React", "API"],
      github: "https://github.com/JamilAnsari786/MovieDb",
      demo: "https://moviedbbb.netlify.app/",
      featured: false
    },
    {
      id: 5,
      image: IMG5,
      title: "Bagiyah Food Delivery",
      description: "bagiyah food delivery app is a mobile application that allows users to order food from their favorite restaurants and have it delivered to their doorstep. The app features a user-friendly interface, real-time order tracking, and secure payment options.",
      category: "Web Application",
      technologies: ["React.js"],
      github: "https://github.com/JamilAnsari786/Bagiyah",
      demo: "https://bagiyahh.netlify.app/",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="portfolio__header">
          <div className="header__content">
            <span className="section__tag">Portfolio</span>
            <h2>Featured Projects</h2>
            <p>Showcasing my best work and creative solutions</p>
          </div>
        </div>

        {/* Main Project Showcase */}
        <div className="portfolio__showcase">
          <div className="showcase__image">
            <div className="image__container">
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="main__image"
              />
              <div className="image__overlay">
                <div className="overlay__content">
                  <span className="project__category">
                    {projects[activeProject].category}
                  </span>
                  <h3>{projects[activeProject].title}</h3>
                  <p>{projects[activeProject].description}</p>
                  <div className="tech__stack">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span key={index} className="tech__item">{tech}</span>
                    ))}
                  </div>
                  <div className="project__links">
                    <a 
                      href={projects[activeProject].demo} 
                      className="link__btn primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a 
                      href={projects[activeProject].github} 
                      className="link__btn secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase__content">
            <div className="content__header">
              <h3>Project Details</h3>
              {projects[activeProject].featured && (
                <span className="featured__badge">
                  <FaStar />
                  Featured
                </span>
              )}
            </div>
            
            <div className="project__info">
              <div className="info__grid">
                <div className="info__item">
                  <span className="info__label">Category</span>
                  <span className="info__value">{projects[activeProject].category}</span>
                </div>
                <div className="info__item">
                  <span className="info__label">Technologies</span>
                  <span className="info__value">{projects[activeProject].technologies.length}</span>
                </div>
                <div className="info__item">
                  <span className="info__label">Status</span>
                  <span className="info__value status__live">Live</span>
                </div>
                <div className="info__item">
                  <span className="info__label">Year</span>
                  <span className="info__value">2024</span>
                </div>
              </div>
            </div>

            <div className="project__description">
              <h4>About this project</h4>
              <p>{projects[activeProject].description}</p>
            </div>

            <div className="navigation__dots">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  className={`dot ${index === activeProject ? 'active' : ''}`}
                  onClick={() => setActiveProject(index)}
                  aria-label={`View ${project.title}`}
                >
                  <span></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          <div className="grid__header">
            <h3>All Projects</h3>
            <span className="projects__count">{projects.length} projects</span>
          </div>
          
          <div className="grid__container">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project__card ${index === activeProject ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <div className="card__image">
                  <img src={project.image} alt={project.title} />
                  <div className="card__overlay">
                    <div className="overlay__actions">
                      <button className="action__btn">
                        <FaExternalLinkAlt />
                      </button>
                      <button className="action__btn">
                        <FaGithub />
                      </button>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured__tag">
                      <FaStar />
                    </div>
                  )}
                </div>
                <div className="card__content">
                  <span className="card__category">
                    {project.category === "Web App" ? <FaDesktop /> : <FaMobile />}
                    {project.category}
                  </span>
                  <h4>{project.title}</h4>
                  <div className="card__tech">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <span key={techIndex} className="tech__tag">{tech}</span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="tech__more">+{project.technologies.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="portfolio__cta">
          <div className="cta__content">
            <h3>Have a project in mind?</h3>
            <p>Let's work together to bring your ideas to life</p>
            <div className="cta__buttons">
              <a href="#contact" className="btn btn__primary">
                Start a Project
              </a>
              <a href="#contact" className="btn btn__secondary">
                View All Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;