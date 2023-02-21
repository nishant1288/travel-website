import React from 'react'
import "./contact.css"
const ContactData = (props) => {
  return (
    <div className='contact-form'>
        <h1>Contact Us</h1>
        <form action="">
            <input type={Text} placeholder='Name'/>
            <input type={'email'} placeholder='Email'/>
            <input type={Number} placeholder='Number'/>
            <textarea rows={4} placeholder="Message"></textarea>
            <button>Message Us</button>
        </form>
    </div>
  )
}

export default ContactData