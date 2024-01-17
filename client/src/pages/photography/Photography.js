import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./photography.scss"
import React from 'react'

const Photography = () => {
  return (
    <div>
      <Navbar />
      <Photography>
        <div className="blur-container">
          <div class="bg-image">
           <img src='images/forest.jpg' />
          </div>
          <div class="bg-text">
            <h1>I am John Doe</h1>
            <p>And I'm a Photographer</p>
          </div>
         </div>
        <div className="parallax-container"></div> 
      </Photography>
      <Footer />
    </div>
  )
}

export default Photography