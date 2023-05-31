import React from 'react'
import './about.css'
import ME from '../../assets/sup.jpg'
import {BsAward} from 'react-icons/bs'
import {AiOutlineUserSwitch} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
         <div className="about__me-image">
          <img src={ME} alt="" />
         </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className='about__card'>
              <AiOutlineUserSwitch className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste totam unde itaque aliquid. Id, obcaecati? Nemo voluptatibus dicta, quam facere recusandae sequi, a autem quibusdam perspiciatis at iure totam natus.</p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
