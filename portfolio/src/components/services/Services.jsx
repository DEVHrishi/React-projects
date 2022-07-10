import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className='services__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="services__list">
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/*End of UI/UX Design*/}
                
                <article className="service">
                    <div className='services__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="services__list">
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web Development*/}
                
                <article className="service">
                    <div className='services__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="services__list">
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BiCheck className="services__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Content creation*/}
            </div>
        </section>
    )
}

export default Services