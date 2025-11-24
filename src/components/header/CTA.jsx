import React from 'react';
import CV from '../../assets/JamilAnsari_Resume.pdf';
import { FaDownload, FaPaperPlane, FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  return (
    <div className='cta__container'>
      <a href={CV} download className='cta__btn cta__primary'>
        <div className="btn__content">
          <FaDownload className='btn__icon' />
          <span>Download CV</span>
        </div>
        <div className="btn__hover"></div>
      </a>
      
      <a href='#contact' className='cta__btn cta__secondary'>
        <div className="btn__content">
          <FaPaperPlane className='btn__icon' />
          <span>Let's Talk</span>
        </div>
        <FaArrowRight className='btn__arrow' />
      </a>
    </div>
  );
};

export default CTA;