import React from 'react'
import '../../styles/services.css'

const servicesData = [
    {
        icon:'ri-rocket-line',
        title:'Digital Marketing',
        // description:'Lorem ipsum  dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
        icon:'ri-code-s-slash-line',
        title:'Web Design',
        // description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
        icon:'ri-landscape-line',
        title:'Graphic Design',
        // description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    {
        icon:'ri-figma-line',
        title:'UI/UX Design',
        // description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.'
    },
    
]

const Services = () => {
  return (
    <section id="service">
        <div className="container">
            <div className="services__top-content">
                <h6 className="subtitle">Our Services</h6>
                <h2>Save time and boost efficiency with</h2>
                <h2 className='highlight'>our top services</h2>
            </div>

            <div className="service__item-wrapper">
                {
                    servicesData.map((item, index) =>(
                        <div className="services__item" key={index}>
                        <span className="service__icon">
                        <i class={item.icon}></i>
                        </span>
                        <h3 className="service__title">{item.title}</h3>
                        <p className="description">{item.description}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services