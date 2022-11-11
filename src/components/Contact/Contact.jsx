import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { GrLocation } from 'react-icons/gr'
import { BsPhone } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'

import './Contact.css'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ec6wx5e', 'template_z1kpckc', form.current, 'rx-pOYN_ZDsDmKgt7')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h2
        className="animate"
        data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
      >
        Contact
      </h2>
      <div className="container contact__container">
        <div className="contact__info animate" data-animate="slideInLeft 2s">
          <ul className="contact__info-list">
            <li className="contact__info-item">
              <GrLocation className="contact__info-icon"/>
              <span>Address: Da Nang City, Vietnam</span>
            </li>
            <li className="contact__info-item">
              <BsPhone className="contact__info-icon"/>
              <span>Phone: +84 387879492</span>
            </li>
            <li className="contact__info-item">
              <MdOutlineMailOutline className="contact__info-icon"/>
              <span>Email: buithanhbinh.dn11@gmail.com</span>
            </li>
          </ul>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form animate" data-animate="slideInRight 2s">
          <input type="text" placeholder='Your Name' required/>
          <input type="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'  required/>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact