import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import  {useRef} from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1cagtxu', 'template_9v9c8hj', form.current, {
        publicKey: 'HPVFUKYArRpuwfxe7',
      })
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>jamilansari828@gmail.com</h5>
            <a href="mailto:jamilansari828@gmail.com"  target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <FaInstagram className="contact_option-icon"/>
            <h4>Messanger</h4>
            <h5>jamill__13</h5>
            <a href="https://www.instagram.com/direct/t/jamill__13"  target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact_option">
            <FaLinkedin className="contact_option-icon"/>
            <h4>Linkedin</h4>
            <h5>jamil-ansari</h5>
            <a href="https://www.linkedin.com/in/jamil-ansari/"  target="_blank">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows='7' placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
