import React from "react";
import Hero from "./Hero";
import Footer from "./Footer"
import ContactData from "./ContactData";
const Contact = () => {
  return (
    <div>
      <Hero
        mainClass='hero-img-text'
        subClass1='hero-text'
        heading='Connect with us'
        paragraph='Refresh Yourself'
        subClass2="hero-img"
        imgSource='https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
      />

    <ContactData />
      <Footer />
    </div>
  )
}

export default Contact;