import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiGit, DiResponsive, DiMsqlServer } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { GrReactjs } from 'react-icons/gr'
import { SiPostman } from 'react-icons/si'

import './Skills.css'

const icons = [
  {
    icon: <AiFillHtml5/>,
    title: 'HTML',
  },
  {
    icon: <DiCss3/>,
    title: 'CSS',
  },
  {
    icon: <IoLogoJavascript/>,
    title: 'Javascript',
  },
  {
    icon: <GrReactjs/>,
    title: 'Reactjs',
  },
  {
    icon: <SiPostman/>,
    title: 'Postman',
  },
  {
    icon: <DiGit/>,
    title: 'Git',
  },
  {
    icon: <DiResponsive/>,
    title: 'Responsive',
  },
  {
    icon: <DiMsqlServer/>,
    title: 'SQL Server',
  },
]

const Skills = () => {
  return (
    <section id="skills">
      <h2 
        className="animate"
        data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
      >
        Skills
      </h2>
      <div className="container skills__container animate" data-animate="slideInLeft 2s">
        {icons.map((item, index) => {
          return (
            <div key={index} className="skills__card">
              {item.icon}
              <span>{item.title}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Skills