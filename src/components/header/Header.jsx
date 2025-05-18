import React from "react";
import "./header.css";
import CTA from './CTA'
import ME from '../../assets/jamil.png'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'M</h5>
        <h1>Jamil Ansari</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
