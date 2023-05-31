import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/hacker-25896.png'
import HeaderSocial from './HeaderSocial'


function Header() {
  return (
    <div className='header'>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Himanshu samal</h1>
      <h5 className='text-light'>MERN Stack Developer</h5>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={ME}  />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </div>


    </div>
  )
}

export default Header
