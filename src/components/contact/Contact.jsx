import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineWhatsApp} from 'react-icons/ai'
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail =(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_4riz0ta','template_er3drxd',form.current,'AlbFVt6oriBSlu6Ww')
    e.target.reset();
    alert('Message sent');
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h3>Himanshusamal60@gmail.com</h3>
          <a target='_blank' href="mailto:himanshusamal60@gmail.com">
            Send a Message
          </a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>9589686400</h5>
          <a target='_blank' href="https://wa.me/919589686400">
            Send a Message
          </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Enter Your Email' required />
          <textarea name="message" placeholder='Your Message' id="" cols="30" rows="10" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
