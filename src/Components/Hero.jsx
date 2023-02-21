import React from 'react';
import './hero.css';

const Hero = (props) => {
  return (
    <div className={props.mainClass}>
       
        <div className={props.subClass1}>
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
        </div>
        <div className={props.subClass2}>
            <img alt='hero image' src={props.imgSource} />
        </div>
    </div>
  )
}

export default Hero