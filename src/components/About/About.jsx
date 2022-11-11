import React from 'react'

import './About.css'
import ME from '../../assets/about-me.png'

const About = () => {
  return (
    <section id="about">
      <h2 
        className="animate"
        data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
      >
        About Me
      </h2>
      <div className="container about__container">
        <div className="about__me animate" data-animate="slideInLeft 2s">
          <div className="about__me-img">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content animate"  data-animate="slideInRight 2s">
          <h3>Education</h3>
          <div className="about__content-des">
            <p>2018 - 2022</p>
            <h4>Bachelor Of Information Technology - The University of Danang, University of Education</h4>
          </div>
          <h3>Get To Know Me!</h3>
          <div className="about__content-info">
            <p>Hi, My name is Bui Thanh Binh</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About