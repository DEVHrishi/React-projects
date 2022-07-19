import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <a href="#header" className='footer__logo'>EGATOR</a>

            <ul className='permalinks'>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                {/*<li><a href="#services">Services</a></li>*/}
                <li><a href="#portfolio">Portfolio</a></li>
                {/*<li><a href="#testimonial">Testimonials</a></li>*/}
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/hrishikesh.roy.3114/" target='_blank' rel="noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/Hrishikesh_Roy71/?hl=en" target='_blank' rel="noreferrer"><FaInstagram /></a>
                <a href="https://twitter.com/Hrishik97724425" target='_blank' rel="noreferrer"><IoLogoTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; EGATOR Tutorials. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer