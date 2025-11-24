import React, { useState } from "react";
import "./contact.css";
import { MdOutlineEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_1cagtxu', 'template_9v9c8hj', form.current, {
        publicKey: 'HPVFUKYArRpuwfxe7',
      })
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          e.target.reset();
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          setIsSubmitting(false);
          console.log('FAILED...', error.text);
        }
      );
  };

  const contactMethods = [
    {
      icon: <MdOutlineEmail className="contact__icon" />,
      title: "Email",
      value: "jamilansari828@gmail.com",
      link: "mailto:jamilansari828@gmail.com",
      description: "Send me an email anytime",
      color: "#4ade80"
    },
    {
      icon: <FaLinkedin className="contact__icon" />,
      title: "LinkedIn",
      value: "jamil-ansari",
      link: "https://www.linkedin.com/in/jamil-ansari/",
      description: "Let's connect professionally",
      color: "#0a66c2"
    },
    {
      icon: <FaInstagram className="contact__icon" />,
      title: "Instagram",
      value: "@jamill__13",
      link: "https://www.instagram.com/direct/t/jamill__13",
      description: "DM me on Instagram",
      color: "#e4405f"
    },
    {
      icon: <FaGithub className="contact__icon" />,
      title: "GitHub",
      value: "JamilAnsari786",
      link: "https://github.com/JamilAnsari786",
      description: "Check out my projects",
      color: "#333333"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Section Header */}
        <div className="contact__header">
          <span className="section__tag">Contact</span>
          <h2>Let's Work Together</h2>
          <p className="contact__subtitle">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="contact__container">
          {/* Contact Information */}
          <div className="contact__info">
            <div className="info__header">
              <h3>Get in Touch</h3>
              <p>Choose your preferred method to reach out</p>
            </div>

            <div className="contact__methods">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__method"
                  style={{ '--method-color': method.color }}
                >
                  <div className="method__icon" style={{ backgroundColor: method.color }}>
                    {method.icon}
                  </div>
                  <div className="method__content">
                    <h4>{method.title}</h4>
                    <p className="method__value">{method.value}</p>
                    <span className="method__description">{method.description}</span>
                  </div>
                  <div className="method__arrow">
                    <FaPaperPlane />
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="contact__additional">
              <div className="additional__item">
                <MdLocationOn className="additional__icon" />
                <div>
                  <h5>Location</h5>
                  <p>Available for remote work worldwide</p>
                </div>
              </div>
              <div className="additional__item">
                <MdPhone className="additional__icon" />
                <div>
                  <h5>Response Time</h5>
                  <p>Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form-section">
            <div className="form__header">
              <h3>Send a Message</h3>
              <p>Fill out the form and I'll get back to you soon</p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
              {isSubmitted && (
                <div className="form__success">
                  <div className="success__icon">✓</div>
                  <div className="success__message">
                    <h4>Message Sent!</h4>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <div className="form__group">
                <div className="input__container">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder=" " 
                    required 
                    className="form__input"
                  />
                  <label className="form__label">Your Full Name</label>
                  <div className="input__underline"></div>
                </div>
              </div>

              <div className="form__group">
                <div className="input__container">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder=" " 
                    required 
                    className="form__input"
                  />
                  <label className="form__label">Your Email Address</label>
                  <div className="input__underline"></div>
                </div>
              </div>

              <div className="form__group">
                <div className="input__container">
                  <textarea 
                    name="message" 
                    rows="5" 
                    placeholder=" " 
                    required 
                    className="form__input form__textarea"
                  ></textarea>
                  <label className="form__label">Your Message</label>
                  <div className="input__underline"></div>
                </div>
              </div>

              <button 
                type="submit" 
                className={`submit__btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn__icon" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact__cta">
          <div className="cta__content">
            <h3>Ready to start your project?</h3>
            <p>Let's schedule a call to discuss your requirements</p>
            <div className="cta__buttons">
              <a href="#contact" className="btn btn__primary">
                Schedule a Call
              </a>
              <a href="#portfolio" className="btn btn__secondary">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;