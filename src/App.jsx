import React, { useEffect } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animate;
          }
          else {
            entry.target.style.animation = 'none';
          }
      });
    }, {});

    const animationItems = document.querySelectorAll('.animate');

    animationItems.forEach(item => {
      observer.observe(item);
    });
  },[])

  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App