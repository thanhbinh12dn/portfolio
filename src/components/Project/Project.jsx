import React from 'react'
import './Project.css'

const Project = ({project}) => {
  return (
    <>
        <div className="project__img">
            <a href="#">
                <img src={project.img} alt="Project" />
            </a>
        </div>
        <div className="project__content">
            <h3>{project.title}</h3>
            <p className="project__content-des">{project.description}</p>
            <ul>
                <li>React</li>
            </ul>
            <div className="project__content-btn">
                <a href={project.source} className="btn">View Project</a>
                <a href={project.link} className="btn">Live Demo</a>
            </div>
        </div>
    </>
  )
}

export default Project