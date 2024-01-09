import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./home.scss"

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='home'>
       <div className='softwareIntro'></div>
       <div className='photoIntro'></div>
       <div className='blogIntroIntro'></div>
        </div>
        <Footer />
    </div>
  )
}

export default Home