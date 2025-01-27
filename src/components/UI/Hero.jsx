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
                        <h2>Innovative Digital</h2>
                        <h2>Solutions to Power</h2>
                        <h2 className='highlight'>Your Business Growth.</h2>
                    </div>
                    <p className="description">We design digital products with precision and purpose,
                    Driving your business towards greater success.</p>

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