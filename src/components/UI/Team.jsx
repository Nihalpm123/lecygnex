import React from 'react'
import '../../styles/team.css'

import team01 from '../../images/shabab ong.png'
import team02 from '../../images/hani png.png'
import team03 from '../../images/nabeel png.png'
import team04 from '../../images/fahad png.png'
import team05 from '../../images/nabeel png.png'

const teamMembers = [
    {
        imgurl: team01,
        name: 'Shabab',
        position: 'CEO & Graphic Designer'
    },
    {
        imgurl: team02,
        name: 'Hani',
        position: 'Front-End Developer'
    },
    {
        imgurl: team03,
        name: 'Nabeel',
        position: 'Product Designer'
    },
    {
        imgurl: team04,
        name: 'Fahad',
        position: 'CEO & Sr. Developer'
    },
    {
        imgurl: team04,
        name: 'Fahad',
        position: 'CEO & Sr. Developer'
    }
    
]

const Team = () => {
  return (
   <section className='our__team'>
    <div className="container">
        <div className="team__content">
            <h6 className="subtitle">Our Team</h6>
            <h2>
                Meet with <span className="highlight">our team</span>
            </h2>
        </div>

        <div className="team__wrapper">
            {
                teamMembers.map((item, index) => (
                <div className="team__item" key={index}>
                    <div className="team__img">
                        <img src={item.imgurl} alt="" />
                    </div>
                    <div className="team__deatils">
                        <h4>{item.name}</h4>
                        <p className="description">{item.position}</p>

                        <div className="team__member-social">
                            <span><i class="ri-linkedin-line"></i></span>
                            <span><i class="ri-twitter-x-line"></i></span>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
   </section>
  )
}

export default Team