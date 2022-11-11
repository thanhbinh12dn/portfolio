import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import { AiFillHeart } from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='animate' data-animate="slideInTop 2s">
        <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100007089617359" target="_blank" rel="noreferrer"><FaFacebook/></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><BsInstagram/></a>
          <a href="www.linkedin.com/in/binhbuithanh" target="_blank" rel="noreferrer"><GrLinkedinOption/></a>
        </div>
        <div className="footer__copyright" ><span>Bui Thanh Binh {new Date().getFullYear()}</span> <AiFillHeart className="footer__copyright-icon"/></div>
      </div>
    </footer>
  )
}

export default Footer