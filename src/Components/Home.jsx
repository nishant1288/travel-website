import React from 'react'
import Hero from './Hero';
import Destination from './Destination'
import Trip from './Trip';
import Footer from './Footer';
const Home = () =>
{
    return(
        <div>
            <Hero
            mainClass = 'hero-img-text'
            subClass1 = 'hero-text'
            heading = 'Embark on a Journey'
            paragraph = 'Find Yourself!!'
            subClass2 = "hero-img"
            imgSource = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            />
            <Destination />
            <Trip />
            <Footer />
        </div>
    )
}

export default Home;