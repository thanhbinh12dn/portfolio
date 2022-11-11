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
import Project from '../Project/Project';

const projects = [
  {
    id: 1,
    img: PN1,
    title: 'Project Name',
    description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    link: '#',
    source: 'https://github.com'
  },
  {
    id: 2,
    img: PN2,
    title: 'Project Name',
    description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    link: '#',
    source: 'https://github.com'
  },
  {
    id: 3,
    img: PN3,
    title: 'Project Name',
    description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    link: '#',
    source: 'https://github.com'
  },
  {
    id: 4,
    img: PN1,
    title: 'Project Name',
    description: 'I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.',
    link: '#',
    source: 'https://github.com'
  },
]

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
        {
          projects.map(project => (
            <SwiperSlide key={project.id} className="project">
              <Project project={project}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Portfolio