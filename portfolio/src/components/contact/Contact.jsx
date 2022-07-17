import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yo0b5bo', 'template_wynsyzz', form.current, 'p9DBjZ4rV0wrguOEA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>royhrishikesh408@gmail.com</h5>
                        <a href="mailto:royhrishikesh408@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaWhatsapp className='contact__option-icon' />
                        <h4>Whats App</h4>
                        <h5>+91 7866909386</h5>
                        <a href="https://chatwith.io/s/personal-7" target="_blank" rel="noreferrer">Send a message</a>
                    </article>
                </div>
                {/*End of contact options*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your FULL Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="5" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact