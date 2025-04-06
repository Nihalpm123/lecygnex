import React from 'react'
import '../../styles/hero.css'

import heroDarkImg from '../../images/article.png'

const Hero = () => {
  return (
    <section className="hero__section" id='home'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <div>
                        <h2>Welcome to Le Cygnex</h2>
                        <h2>Elevate Your Brand Digitally</h2>
                    </div>
                    <p className="description">At Le Cygnex, we bring creativity, strategy, and technology together to help businesses thrive in the digital world. <br />
                    <span className='highlight'>Our mission is simple – to transform your ideas into visually stunning, engaging, and results-driven digital solutions.</span> <br />
                    Let’s shape the future of your brand together.
                    </p>

                    <div className="hero__btns">
                        <button className='primary__btn'><a href="https://wa.me/918089666204?text=">Get Started</a></button>
                        <button className="secondary__btn"><a href="https://www.instagram.com/le_cygnex?igsh=YXo4d3ZzY2FuMXB5">Discover More</a></button>
                    </div>
                </div>

                <div className="hero__img">
                    <img src={heroDarkImg} alt="hero-img" />
                </div>
            </div>
        </div>
    </section>
  )
     
}

export default Hero