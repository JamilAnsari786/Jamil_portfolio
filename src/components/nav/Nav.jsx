import React, { useState, useEffect } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  
  const navItems = [
    { id: '#home', icon: AiOutlineHome, label: 'Home' },
    { id: '#about', icon: AiOutlineUser, label: 'About' },
    { id: '#experience', icon: BiBook, label: 'Experience' },
    { id: '#services', icon: RiServiceLine, label: 'Services' },
    { id: '#contact', icon: BiMessageSquareDetail, label: 'Contact' }
  ];

  // Automatic section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id.substring(1));
      const scrollPosition = window.scrollY + 100;

      // Find the current active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveNav(`#${sections[i]}`);
          break;
        }
      }

      // If at top of page, set to home
      if (scrollPosition < 100) {
        setActiveNav('#home');
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll to section
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveNav(id);
    
    const targetId = id.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navigation">
      {navItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <a 
            key={item.id}
            href={item.id} 
            onClick={(e) => handleNavClick(e, item.id)}
            className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
            aria-label={item.label}
          >
            <IconComponent className="nav-icon" />
            <span className="nav-tooltip">{item.label}</span>
          </a>
        );
      })}
      {/* <div className="nav-indicator"></div> */}
    </nav>
  );
};

export default Nav;