import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import PN1 from '../../assets/project_name1.png'
import PN2 from '../../assets/project_name2.png'
import PN3 from '../../assets/project_name3.png'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2
        className="animate"
        data-animate="tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both"
      >
        Portfolio
      </h2>
      <Swiper className="container container__portfolio"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="project">
          <div className="project__img">
            <a href="#">
              <img src={PN1} alt="Project" />
            </a>
          </div>
          <div className="project__content">
            <h3>Project Name</h3>
            <p className="project__content-des">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
            <ul>
              <li>React</li>
            </ul>
            <div className="project__content-btn">
              <a href="#" className="btn">View Project</a>
              <a href="#" className="btn">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="project">
          <div className="project__img">
            <a href="#">
              <img src={PN2} alt="Project Image" />
            </a>
          </div>
          <div className="project__content">
            <h3>Project Name</h3>
            <p className="project__content-des">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
            <ul>
              <li>React</li>
            </ul>
            <div className="project__content-btn">
              <a href="#" className="btn">View Project</a>
              <a href="#" className="btn">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="project">
          <div className="project__img">
            <a href="#">
              <img src={PN3} alt="Project Image" />
            </a>
          </div>
          <div className="project__content">
            <h3>Project Name</h3>
            <p className="project__content-des">I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
            <ul>
              <li>React</li>
            </ul>
            <div className="project__content-btn">
              <a href="#" className="btn">View Project</a>
              <a href="#" className="btn">Live Demo</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Portfolio