import React from "react";
import "./services.css";
import { BsCheck2, BsArrowRight } from "react-icons/bs";
import { FaCode, FaMobileAlt, FaRocket } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode className="service__icon" />,
      title: "Web Development",
      description:
        "Building modern, responsive websites and web applications with cutting-edge technologies",
      features: [
        "Build responsive websites using HTML, CSS, JavaScript, and React",
        "Create cross-browser compatible web applications",
        "Develop interactive apps with modern JavaScript frameworks",
        "Optimize website performance and loading times",
        "Ensure accessibility and user-friendly interfaces",
      ],
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    },
    {
      icon: <FaMobileAlt className="service__icon" />,
      title: "Responsive Design",
      description:
        "Creating flawless user experiences across all devices and screen sizes",
      features: [
        "Design layouts for mobiles, tablets, and desktops",
        "Implement adaptive designs with media queries",
        "Test across multiple devices for consistency",
        "Optimize performance on all platforms",
        "Enhance touchscreen usability and interactions",
      ],
      gradient: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    },
    {
      icon: <FaRocket className="service__icon" />,
      title: "Full-Stack Development",
      description: "End-to-end project development from concept to deployment",
      features: [
        "Build scalable projects with clean architecture",
        "Write maintainable and reusable code",
        "Implement version control with Git",
        "Comprehensive testing and debugging",
        "Seamless deployment and hosting solutions",
      ],
      gradient: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        {/* Section Header */}
        <div className="services__header">
          <h5>What I Offer</h5>
          <h2>My Services</h2>
          <p className="services__subtitle">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="services__container">
          {services.map((service, index) => (
            <article key={index} className="service__card">
              {/* Service Header */}
              <div
                className="service__header"
                style={{ background: service.gradient }}
              >
                <div className="service__icon-wrapper">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              {/* Service Features */}
              <div className="service__content">
                <ul className="service__features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature__item">
                      <div className="feature__icon">
                        <BsCheck2 className="check__icon" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Service Footer */}
                <div className="service__footer">
                  <button className="service__cta">
                    <span>Learn More</span>
                    <BsArrowRight className="cta__icon" />
                  </button>
                  <div className="service__badge">
                    <span>Popular</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="service__hover-effect"></div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="services__cta-section">
          <div className="cta__content">
            <h3>Ready to start your project?</h3>
            <p>Let's work together to bring your ideas to life</p>
            <a href="#contact" className="btn btn-primary cta__button">
              <span>Get Started</span>
              <BsArrowRight className="button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
