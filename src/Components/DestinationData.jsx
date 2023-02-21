import React from 'react'
import './destination.css'

const DestinationData = (props) => {
  return (
    <div>
        <div className='destination-img-text'>
                <div className='destination-img'>
                    <img alt='destination-img-1' src='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                    <img alt='destination-img-2' src='https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' />
                </div>
                <div className='destination-text'>
                    <h3>{props.beachHeading}</h3>
                    <p>{props.beachInfo}</p>
                </div>
            </div>



            <div id="destination-img-id" className='destination-img-text'>

                <div className='destination-text'>
                    <h3>{props.waterfallHeading}</h3>
                    <p>{props.waterfallInfo}</p>
                </div>

                <div className='destination-img-2'>
                    <img alt='destination-img-1' src='https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
                    <img alt='destination-img-2' src='https://images.unsplash.com/photo-1482685945432-29a7abf2f466?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80' />
                </div>
            </div>
    </div>
  )
}

export default DestinationData