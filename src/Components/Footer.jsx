import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer'>


            <div className='top'>
                <div className='logo-text'>
                    <h3>TravelSite</h3>
                    <p>Choose any destination you like</p>
                </div>

                <div className='icons'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
            </div>


            <div className='bottom'>
                <div className="bottom-footer">
                    <h4>Projects</h4>
                    <p>Changelog</p>
                    <p>License</p>
                </div>
                <div className="bottom-footer">
                <h4>Community</h4>
                    <p>Github</p>
                    <p>Discord</p>
                </div>
                <div className="bottom-footer">
                <h4>Help</h4>
                    <p>Customer Support</p>
                    <p>Contact Us</p>
                </div>
                <div className="bottom-footer">
                <h4>Others</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy policy</p>
                </div>
            </div>

        </div>
    )
}

export default Footer