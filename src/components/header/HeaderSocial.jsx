import React from 'react'
import {BsLinkedin ,BsGithub,BsInstagram} from 'react-icons/bs'
function HeaderSocial() {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/himanshu-s-b55b4323a" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/Himanshusamal60?tab=repositories" target='_blank'><BsGithub/></a>
      <a href="" target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial
