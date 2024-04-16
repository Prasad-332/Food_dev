import React from 'react'
import '../../Components/Footer/Footer.css'
import { assets } from '../../Assets/assets/assets'
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer-content'>
                    <div className='footer-contnet-left'>
                        {/* <img src={assets.logo}></img> */}
                        <p>By applying these styles, your webpage will initially fill the entire viewport, providing a good
                            By applying these styles, your webpage will initially fill the entire viewport, providing a good
                        </p>
                        <div className='social-icons'>
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div>
                    </div>
                    <div className='footer-content-center'>
                        <h2>Company</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className='footer-content-right'>
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91 9100898182</li>
                            <li>deliveryl@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <p className='footer-copyright'>copyright 2024 Food delivery -All rights</p>
            </div>
        </div>
    )
}

export default Footer