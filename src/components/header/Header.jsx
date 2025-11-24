import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from './CTA';
import ME from '../../assets/jamil.png';
import HeaderSocial from './HeaderSocial';

function Header() {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const titles = ['Fullstack Developer', 'Web Designer', 'Problem Solver'];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    const typingInterval = setInterval(() => {
      if (!isDeleting && currentIndex < currentTitle.length) {
        setTypedText(currentTitle.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setTypedText(currentTitle.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      } else if (!isDeleting && currentIndex === currentTitle.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex, isDeleting, titleIndex, titles]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header id="home" className="header">
      {/* Animated Background */}
      <div className="header__bg">
        <div 
          className="bg__gradient" 
          style={{
            '--mouse-x': `${mousePosition.x}%`,
            '--mouse-y': `${mousePosition.y}%`
          }}
        ></div>
        <div className="bg__particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--i': i,
              '--size': Math.random() * 4 + 2,
              '--left': Math.random() * 100,
              '--delay': Math.random() * 5
            }}></div>
          ))}
        </div>
      </div>

      <div className="container header__container">
        {/* Main Content */}
        <div className="header__content">
          {/* Badge */}
          <div className="welcome__badge">
            <span>👋 Welcome to my portfolio</span>
          </div>

          {/* Main Heading */}
          <h1 className="header__title">
            <span className="title__line">Hi, I'm</span>
            <span className="title__name">Jamil Ansari</span>
          </h1>

          {/* Typing Animation */}
          <div className="header__typing">
            <div className="typing__container">
              <span className="typed__text">{typedText}</span>
              <span className="cursor">|</span>
            </div>
          </div>

          {/* Description */}
          <p className="header__description">
            I create <span className="highlight">beautiful</span> and <span className="highlight">functional</span> 
            digital experiences using modern web technologies. Passionate about clean code and user-centered design.
          </p>

          {/* CTA Buttons */}
          <CTA />

          {/* Stats */}
          <div className="header__stats">
            <div className="stat">
              <span className="stat__number">2+</span>
              <span className="stat__label">Months Experience</span>
            </div>
            <div className="stat">
              <span className="stat__number">5+</span>
              <span className="stat__label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat__number">2+</span>
              <span className="stat__label">Happy Clients</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="header__image">
          <div className="image__container">
            <div className="image__wrapper">
              <img src={ME} alt="Jamil Ansari" className="profile__image" />
              
              {/* Floating Elements */}
              <div className="floating__element element-1">⚡</div>
              <div className="floating__element element-2">🚀</div>
              <div className="floating__element element-3">💻</div>
              
              {/* Background Glow */}
              <div className="image__glow"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="experience__badge">
              <div className="badge__content">
                <span className="badge__years">2+</span>
                <span className="badge__text">Months Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <HeaderSocial />

        {/* Scroll Indicator */}
        <div className="scroll__indicator">
          <div className="scroll__line">
            <div className="scroll__progress"></div>
          </div>
          <span className="scroll__text">Scroll to explore</span>
        </div>
      </div>
    </header>
  );
}

export default Header;