import React, { useState } from 'react'
import './nav.css'
import {BiHomeAlt2, BiBookBookmark,BiDesktop} from 'react-icons/bi'
import {BsPerson,BsTelephone} from 'react-icons/bs'

function Nav() {
  const [activeNav,setActiveNav]= useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav==='#'?'active':''}><BiHomeAlt2/></a>
      <a href="#about" onClick={()=>{setActiveNav('#about')}}  className={activeNav==='#about'?'active':''}><BsPerson/></a>
      <a href="#experience" onClick={()=>{setActiveNav('#experience')}}  className={activeNav==='#experience'?'active':''}><BiBookBookmark/></a>
      <a href="#services" onClick={()=>{setActiveNav('#services')}}  className={activeNav==='#services'?'active':''}><BiDesktop/></a>
      <a href="#contact" onClick={()=>{setActiveNav('#contact')}}  className={activeNav==='#contact'?'active':''}><BsTelephone/></a>
    </nav>
  )
}

export default Nav
