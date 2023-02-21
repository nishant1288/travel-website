import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import './about.css'
const About = () => {
  return (
    <div>
      <Hero
        mainClass='hero-img-text'
        subClass1='hero-text'
        heading='About Us'
        paragraph='Know about us'
        subClass2="hero-img"
        imgSource='https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      />

<div className='about'>
  <div className='history'>
    <h2>Our History</h2>
    <p>TravelSite is developed by Nishant Krishna Ghadigaonkar. We provide various services including Web designing and development. We will be more than happy to work with you. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quaerat delectus dolorum recusandae, dolorem explicabo saepe quisquam magni nam beatae, odio magnam tenetur consectetur expedita. Veritatis, pariatur quidem nam atque obcaecati accusamus omnis sint, incidunt, explicabo adipisci consequatur autem! At debitis voluptatum porro, totam nesciunt numquam dolor impedit itaque nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, suscipit! Similique maiores distinctio consequatur amet placeat inventore dignissimos nesciunt harum.
    </p>
  </div>

  <div className='Mission'>
    <h2>Our Mission</h2>
    <p>Our Mission is to help everyone take their buisnesses online and help them grow on an international level. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro asperiores temporibus, ipsam mollitia fugit unde quas. Nobis ab obcaecati quas nesciunt cupiditate alias eius et, quisquam velit corporis ducimus accusantium laudantium iure error, sed omnis unde laborum necessitatibus itaque, nemo quos! Dolorem, voluptates repudiandae? Modi aspernatur eligendi beatae, est repellendus eaque aliquid sint! Cupiditate voluptate eveniet possimus inventore doloribus blanditiis!</p>
  </div>
</div>
      <Footer />
    </div>
  )
}

export default About