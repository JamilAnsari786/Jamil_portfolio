import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/jamil-ansari/' target='blank'> <BsLinkedin /></a>
      <a href='https://github.com/JamilAnsari786' target='blank'><FaGithub /></a>
      <a href='https://www.instagram.com/jamill__13/' target='blank'> <FaSquareInstagram /> </a>
    </div>
  )
}

export default HeaderSocial
