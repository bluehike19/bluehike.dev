import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./photography.scss"
import React from 'react'

const Photography = () => {
  return (
    <div>
      <Navbar />
      <div className="photography">
        <div className="blur-container">
          <div className="bg-image">
           <img src='images/forest.jpg' />
          </div>
          <div className="bg-text" data-aos="zoom-in" >
            <h1>I am John Doe</h1>
            <p>And I'm a Photographer</p>
          </div>
          <div className="bg-text2">
            <div className="leftbg">hello
        
            </div>
            <div className="leftbg">hello
            </div>
          </div>
         </div>
         <div className="background">hello</div>
        <div className="parallax-container">
          {/* <img src="simo.jpg" /> */}
          </div> 
        <div style={{height:"1000px", backgroundColor:"brown",fontSize:"36px"}}>
          Scroll Up and Down this page to see the parallax scrolling effect.
          This div is just here to enable scrolling.
          Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>
        <div className="parallax-container">
        {/* <img src="simo.jpg" /> */}

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Photography