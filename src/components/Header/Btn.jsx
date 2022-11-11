import React from 'react'
import CV from '../../assets/mycv.pdf'

const Btn = () => {
  return (
    <div className="mycv">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default Btn