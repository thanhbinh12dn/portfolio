import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

import './Header.css'
import ME from '../../assets/me.png'
import Button from './Btn'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="header__wrapper">
          <h5>Front-end Developer</h5>
          <h1>Hello, I'm Binh Bui Thanh</h1>
          <Button />
          <div className="header__socials">
            <a href="www.linkedin.com/in/binhbuithanh" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/thanhbinh12dn" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><BsInstagram/></a>
          </div>
        </div>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header