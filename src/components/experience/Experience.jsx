import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const skills = {
    frontend: [
      { name: "HTML", level: 90, icon: "🔷" },
      { name: "CSS", level: 85, icon: "🎨" },
      { name: "JavaScript", level: 80, icon: "⚡" },
      { name: "React", level: 75, icon: "⚛️" },
      { name: "Bootstrap", level: 85, icon: "🅱️" },
      { name: "Tailwind", level: 70, icon: "💨" }
    ],
    backend: [
      { name: "Node.js", level: 70, icon: "🟢" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "PHP", level: 80, icon: "🐘" },
      { name: "Python", level: 75, icon: "🐍" },
      { name: "MySQL", level: 80, icon: "🗄️" }
    ]
  };
  const getLevelColor = (level) => {
  if (level >= 80) return "#1d4ed8"; // Experienced - Dark Blue
  if (level >= 70) return "#3b82f6"; // Intermediate - Blue
  return "#60a5fa"; // Basic - Light Blue
};

  const getLevelText = (level) => {
    if (level >= 80) return "Experienced";
    if (level >= 70) return "Intermediate";
    return "Basic";
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        {/* Section Header */}
        <div className="experience__header">
          <h5>Skills & Technologies</h5>
          <h2>Technical Expertise</h2>
          <p className="experience__subtitle">
            Technologies I work with to create amazing digital experiences
          </p>
        </div>

        <div className="experience__container">
          {/* Frontend Skills */}
          <div className="skills__category">
            <div className="category__header">
              <div className="category__icon">
                <div className="icon__circle frontend">
                  💻
                </div>
              </div>
              <div className="category__info">
                <h3>Frontend Development</h3>
                <p>Creating responsive and interactive user interfaces</p>
              </div>
            </div>
            
            <div className="skills__grid">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill__card">
                  <div className="skill__header">
                    <div className="skill__icon">
                      {skill.icon}
                    </div>
                    <h4>{skill.name}</h4>
                    <span 
                      className="skill__percentage"
                      style={{ color: getLevelColor(skill.level) }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="skill__progress-container">
                    <div className="skill__progress-track">
                      <div 
                        className="skill__progress-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${getLevelColor(skill.level)}, ${getLevelColor(skill.level)}80)`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="skill__footer">
                    <div className="skill__level">
                      <BsFillPatchCheckFill className="level__icon" />
                      <span>{getLevelText(skill.level)}</span>
                    </div>
                    <div className="skill__experience">
                      <div 
                        className="experience__dot"
                        style={{ backgroundColor: getLevelColor(skill.level) }}
                      ></div>
                      <span>{skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Proficient" : "Learning"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="skills__category">
            <div className="category__header">
              <div className="category__icon">
                <div className="icon__circle backend">
                  ⚙️
                </div>
              </div>
              <div className="category__info">
                <h3>Backend Development</h3>
                <p>Building robust server-side applications and APIs</p>
              </div>
            </div>
            
            <div className="skills__grid">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill__card">
                  <div className="skill__header">
                    <div className="skill__icon">
                      {skill.icon}
                    </div>
                    <h4>{skill.name}</h4>
                    <span 
                      className="skill__percentage"
                      style={{ color: getLevelColor(skill.level) }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="skill__progress-container">
                    <div className="skill__progress-track">
                      <div 
                        className="skill__progress-fill"
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${getLevelColor(skill.level)}, ${getLevelColor(skill.level)}80)`
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="skill__footer">
                    <div className="skill__level">
                      <BsFillPatchCheckFill className="level__icon" />
                      <span>{getLevelText(skill.level)}</span>
                    </div>
                    <div className="skill__experience">
                      <div 
                        className="experience__dot"
                        style={{ backgroundColor: getLevelColor(skill.level) }}
                      ></div>
                      <span>{skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Proficient" : "Learning"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="skills__summary">
          <div className="summary__card">
            <div className="summary__icon">🚀</div>
            <h4>Fast Learning</h4>
            <p>Quick to adapt and learn new technologies</p>
          </div>
          <div className="summary__card">
            <div className="summary__icon">💡</div>
            <h4>Problem Solver</h4>
            <p>Creative solutions for complex challenges</p>
          </div>
          <div className="summary__card">
            <div className="summary__icon">🔧</div>
            <h4>Versatile</h4>
            <p>Fullstack development expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;