import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../images/about-us.jpg'


const chooseData = [
  {
    icon:'ri-wifi-line',
    title:'First working process',
    desc:'We craft and launch user-centric digital solutions aligned with your goals, ensuring quality through rigorous testing and offering continuous support for success.'
  },
  {
    icon:'ri-team-line',
    title:'Dedicated team',
    desc:'Our team combines creativity, innovation, and technical expertise to deliver tailored digital solutions that bring your vision to life.'
  },
  {
    icon:'ri-customer-service-2-fill',
    title:'Support',
    desc:'We offer dependable support to ensure your digital product runs seamlessly and adapts to your needs, with quick issue resolution and prompt improvements.'
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
            <p className="description about__content-desc">We help clients overcome challenges with tailored strategies and expert guidance, delivering actionable solutions for long-term growth and success. By understanding your needs, we turn challenges into opportunities.</p>
            
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