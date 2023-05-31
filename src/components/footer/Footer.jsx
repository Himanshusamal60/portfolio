import React from 'react'
import './footer.css'
import {BsFacebook,BsInstagram, BsTwitter} from 'react-icons/bs'
function Footer() {
  return (
    <footer>
      <h5 className='footer__logo-h5'>

      <a href="#" className='footer__logo'>Portfolio</a>
      </h5>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><BsFacebook/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://twitter"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Himanshu's Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
