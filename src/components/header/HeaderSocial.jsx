import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import './HeaderSocial.css'; // Make sure to import the CSS

const HeaderSocial = () => {
  const socialLinks = [
    {
      icon: BsLinkedin,
      url: 'https://www.linkedin.com/in/jamil-ansari/',
      label: 'LinkedIn'
    },
    {
      icon: FaGithub,
      url: 'https://github.com/JamilAnsari786',
      label: 'GitHub'
    },
    {
      icon: FaSquareInstagram,
      url: 'https://www.instagram.com/jamill__13/',
      label: 'Instagram'
    }
  ];

  return (
    <div className='header__socials'>
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <a 
            key={index}
            href={social.url} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='social__link'
            aria-label={social.label}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
};

export default HeaderSocial;