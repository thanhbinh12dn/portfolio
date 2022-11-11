import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineProject} from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'

import './Nav.css'

const Nav = () => {

  const [navActive, setNavActive] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setNavActive('#')} className={navActive === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setNavActive('#about')} className={navActive === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#skills" onClick={() => setNavActive('#skills')} className={navActive === '#skills' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={() => setNavActive('#portfolio')} className={navActive === '#portfolio' ? 'active' : ''}><AiOutlineProject/></a>
      <a href="#contact" onClick={() => setNavActive('#contact')} className={navActive === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav