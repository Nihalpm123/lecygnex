import React from 'react'
import '../../styles/form.css'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Form = () => {
  return (
   <section className='contact'>
        <div className="content-form">
            <h2>Get In Touch</h2>
            <p></p>
        </div>

        <div className="container-form">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon"><FaLocationDot /></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>Tirurangadi, Malappuram, <br /> Kerala, India 676306</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><IoMdMail /></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>cygnexle@gmail.com</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><FaPhoneVolume /></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>+91 8089666204</p>
                    </div>
                </div>  
            </div>

            <div className="contactForm">
                <form action="https://formsubmit.co/cygnexle@gmail.com" method="POST">
                    <h2>Send Message</h2>
                    <div className="inputBox">
                        <input type="text" name='name' required />
                        <span>Full Name</span>
                    </div>
                    {/* <div className="inputBox">
                        <input type="email" name='email' required/>
                        <span>Email</span>
                    </div> */}
                    <div className="inputBox">
                        <input type="number" name='phone' required />
                        <span>Contact Number</span>
                    </div>
                    <div className="inputBox">
                        <textarea name="message"></textarea>
                        <span>Type Your Message...</span>
                    </div>
                    <div className="inputBox">
                    <input type="hidden" name="_template" value="table"/>
                    <input type="hidden" name="_next" value="https://lecygnex.netlify.app/"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="submit" name='submit' value={'Submit'}/>
                    </div>
                </form>
            </div>
        </div>
   </section>
  );
};

export default Form;