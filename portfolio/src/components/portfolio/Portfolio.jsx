/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'stocks trading app: mobile app, visual identity, attributes',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/18742571-stocks-trading-app-mobile-app-visual-identity-attributes'
    },

    {
        id: 2,
        image: IMG2,
        title: 'Agriculture Assistant App Design Concept',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/18743673-Agriculture-Assistant-App-Design-Concept'
    },

    {
        id: 3,
        image: IMG3,
        title: 'Listrict Recharge - EV Charging Station Landing Design',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/18744528-Listrict-Recharge-EV-Charging-Station-Landing-Design'
    },

    {
        id: 4,
        image: IMG4,
        title: 'ValPay E-Wallet Mobile App',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/18742155-ValPay-E-Wallet-Mobile-App'
    },

    {
        id: 5,
        image: IMG5,
        title: 'QUEENA - Jewelry Landing Page',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/18744201-QUEENA-Jewelry-Landing-Page'
    },

    {
        id: 6,
        image: IMG6,
        title: 'MNML E-Commerce App',
        github: 'https://github.com',
        demo: 'https://dribbble.com/shots/18744092-MNML-E-Commerce-App'
    }
]
    
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(item => {
                        return (
                            <div key={item.id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <h3>{item.title}</h3>
                                <div className="portfolio__item-cta">
                                    
                                    <a href={item.github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                                    <a href={item.demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        </section>
    )
}

export default Portfolio