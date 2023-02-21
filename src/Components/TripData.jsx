import React from 'react'
import './trip.css'

const TripData = (props) => {
    return (
        <div className='trip-card'>
            <div className='card-image'>
                <img alt='image-1' src={props.url} />
            </div>

            <div className='card-info'>
                <h3>{props.heading}</h3>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}

export default TripData