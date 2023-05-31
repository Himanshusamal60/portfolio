import React from 'react'
import './portfolio.css'
import SAM1 from '../../assets/sa,1.jpg'
import SAM2 from '../../assets/sam2.jpg'
import SAM3 from '../../assets/sam3.jpg'
import SAM4 from '../../assets/sam4.jpg'
import SAM5 from '../../assets/sam5.jpeg'
import SAM6 from '../../assets/sam6.png'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={SAM1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={SAM2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={SAM3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={SAM4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={SAM5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={SAM6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com" target='_blank' className='btn'>Github</a>
          <a href="https://github.com" target='_blank' className='btn btn-primary'>Live Demo</a>
        </div>
        </article>
     
      </div>
    </section>
  )
}

export default Portfolio
