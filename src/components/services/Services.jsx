import React from "react";
import "./services.css";
import { BsCheck2 } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>
                Build responsive websites using HTML, CSS, JavaScript, and
                React.
              </p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Make websites work well on all browsers.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Use modern JavaScript tools for interactive apps.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Improve website speed and loading times.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Make websites easy to use for everyone.</p>
            </li>
          </ul>
        </article>
        {/* END OF Web development  */}

        <article className="service">
          <div className="service__head">
            <h3>Responsive Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Design layouts that work on mobiles, tablets, and desktops.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Use media queries to adjust styles for different screens.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Test designs on multiple devices for consistency.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Ensure fast loading on all devices.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Improve usability on touchscreens.</p>
            </li>
          </ul>
        </article>
        {/* END OF Responsive Design */}

        <article className="service">
          <div className="service__head">
            <h3>Project Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Build small to medium projects with good structure.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Write clean and reusable code.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Use Git for version control.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Test and debug code carefully.</p>
            </li>
            <li>
              <BsCheck2 className="service__list-icon" />
              <p>Deploy projects online smoothly.</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation  */}
      </div>
    </section>
  );
};

export default Services;
