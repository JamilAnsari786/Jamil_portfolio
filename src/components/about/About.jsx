import React from "react";
import "./about.css";
import ME from "../../assets/Image1.jpg";
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { RiFolderChartLine } from "react-icons/ri";

function about() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image"  />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <LuUsers className="about__icon" />
              <h5>Clients</h5>
              <small>No Client Yet</small>
            </article>
            <article className="about__card">
              <RiFolderChartLine className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>
            <strong>Hi, I'm Jamil Ansari </strong> — a Web eveloper skilled in HTML, CSS, JavaScript, React, Java, and MySQL. I build clean, responsive
            websites and applications. Passionate about tech, problem-solving,
            and continuous learning.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about;
