import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/UI/Hero'
import Services from './components/UI/Services'
import About from './components/UI/About'
import Team from './components/UI/Team'
import Newsletter from './components/UI/Newsletter'
import Footer from './Footer/Footer'
import Form from './components/UI/Form'


function App() {


  return (
    <>
      <Header/>
      <Hero />
      {/* <Counter/> */}
      <About/>
      <Services/>
      {/* <Team/> */}
      {/* <Blog/> */}
      {/* <Testimonial/> */}
      <Form/>
      {/* <Newsletter/> */}
      <Footer/>
    </>
  )
}

export default App
