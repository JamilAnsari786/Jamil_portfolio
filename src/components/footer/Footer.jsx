import React from 'react';
import './footer.css';
import { FaLinkedin, FaInstagram, FaGithub, FaArrowUp, FaHeart, FaCode } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: FaLinkedin, 
      url: 'https://linkedin.com/in/jamil-ansari', 
      label: 'LinkedIn',
      color: '#0077b5'
    },
    { 
      icon: FaGithub, 
      url: 'https://github.com/JamilAnsari786', 
      label: 'GitHub',
      color: '#333'
    },
    { 
      icon: FaInstagram, 
      url: 'https://instagram.com/jamill__13', 
      label: 'Instagram',
      color: '#e4405f'
    }
  ];

  const quickLinks = [
    { name: 'Home', url: '#', icon: '🏠' },
    { name: 'About', url: '#about', icon: '👨‍💻' },
    { name: 'Skills', url: '#experience', icon: '⚡' },
    { name: 'Projects', url: '#portfolio', icon: '💼' },
    { name: 'Contact', url: '#contact', icon: '📞' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer__main">
        <div className="container">
          <div className="footer__content">
            {/* Brand Section */}
            <div className="footer__brand">
              <div className="brand__header">
                <h3 className="brand__name">Jamil Ansari</h3>
                <span className="brand__title">Fullstack Developer</span>
              </div>
              <p className="brand__description">
                Creating digital experiences that combine beautiful design with 
                cutting-edge technology. Let's build something amazing together.
              </p>
              <div className="brand__stats">
                <div className="stat">
                  <span className="stat__number">10+</span>
                  <span className="stat__label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat__number">2+</span>
                  <span className="stat__label">Years</span>
                </div>
                <div className="stat">
                  <span className="stat__number">5+</span>
                  <span className="stat__label">Clients</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__section">
              <h4 className="section__title">Navigation</h4>
              <div className="links__grid">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="nav__link"
                  >
                    <span className="link__icon">{link.icon}</span>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="footer__section">
              <h4 className="section__title">Get In Touch</h4>
              <div className="contact__info">
                <div className="contact__item">
                  <MdEmail className="contact__icon" />
                  <div>
                    <span className="contact__label">Email</span>
                    <a href="mailto:jamilansari828@gmail.com" className="contact__value">
                      jamilansari828@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contact__item">
                  <MdLocationOn className="contact__icon" />
                  <div>
                    <span className="contact__label">Location</span>
                    <span className="contact__value">Remote • Worldwide</span>
                  </div>
                </div>
                <div className="contact__item">
                  <FaCode className="contact__icon" />
                  <div>
                    <span className="contact__label">Status</span>
                    <span className="contact__value available">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="footer__cta">
              <h4 className="section__title">Let's Connect</h4>
              <p>Ready to start your next project?</p>
              <a href="#contact" className="cta__button">
                Start a Conversation
              </a>
              <div className="social__links">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social__link"
                      style={{ '--social-color': social.color }}
                      aria-label={social.label}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="container">
          <div className="bottom__content">
            <div className="copyright">
              <p>
                &copy; {currentYear} Jamil Ansari. Crafted with <FaHeart className="heart" /> 
                using React & Modern CSS
              </p>
            </div>
            
            <div className="bottom__links">
              <a href="#privacy" className="bottom__link">Privacy</a>
              <a href="#terms" className="bottom__link">Terms</a>
              <a href="#sitemap" className="bottom__link">Sitemap</a>
            </div>

            <button className="scroll__top" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer__bg">
        <div className="bg__gradient"></div>
        <div className="bg__pattern"></div>
      </div>
    </footer>
  );
};

export default Footer;