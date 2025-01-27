import React from 'react'
import '../../styles/testimonial.css'

import avatar01 from '../../images/ava-1.jpg'

import Slider from 'react-slick'

const Testimonial = () => {
  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonial</h6>
          <h2>
            Trusted by more than{""} <span className="highlight">5000+ clients</span>
          </h2>
        </div>
        <div className="slider__wrapper">
        <Slider>
            <div className="slider__item">
              <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptate commodi possimus dolore sed consequatur accusantium pariatur quas magni excepturi? Accusantium ipsum repellat itaque nobis dolore eum quis qui vitae! Blanditiis praesentium iste veniam enim adipisci voluptas</p>

              <div className="costomer__details">
                <div className="customer__img">
                  <img src={avatar01} alt="image" />
                </div>

                <div>
                  <h5 className="customer__name">John Doe</h5>
                  <p className="description">CEO at Team</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial