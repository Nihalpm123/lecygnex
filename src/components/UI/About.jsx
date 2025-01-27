import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../images/about-us.jpg'


const chooseData = [
  {
    icon:'ri-wifi-line',
    title:'First working process',
    desc:'We strategize, design, and develop user-focused digital solutions tailored to your goals. After rigorous testing, we launch your product and provide ongoing support to ensure success.'
  },
  {
    icon:'ri-team-line',
    title:'Dedicated team',
    desc:'Our dedicated team of experts combines creativity, innovation, and technical excellence to deliver exceptional digital solutions. We work closely with you to bring your vision to life and ensure outstanding results.'
  },
  {
    icon:'ri-customer-service-2-fill',
    title:'Support',
    desc:'We provide reliable, ongoing support to ensure your digital product runs smoothly and adapts to your evolving needs. Our team is always available to address issues and implement improvements promptly.'
  }
]

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="anout__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Experts in Navigating Complex</h2>
            <h2 className="highlight">Challenges and Driving Growth</h2>
            <p className="description about__content-desc">We specialize in helping clients overcome complex challenges with tailored strategies and expert guidance. Our approach focuses on providing clear, actionable solutions that drive long-term growth and success. With a deep understanding of your needs, we ensure that every step is taken to transform challenges into opportunities.</p>
            
            <div className='choose__item-wrapper'>
              {
                chooseData.map((item, index) =>(
                  <div className="choose__us-item" key={index}>
                    <span className='choose__us-icon'>
                    <i class={item.icon}></i>
                    </span>
                    <div>
                    <h4 className='choose__us-title'>{item.title}</h4>
                    <p className="description">{item.desc}</p>
                </div>
              </div>
                ))}
            </div>

          </div>

          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About