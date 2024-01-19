import React from 'react'
import projectData from "../../data"
import './home.scss'

const home = () => {
  return (
    <div>
    <div className='projectcard' data-aos="zoom-in-up">
    {projectData.map((card) => (
        <div key={card.id} className='cards'>
        <div className='imgCard'>
          <img src={card.img} alt={card.title} />  
        </div>
        <div className='descriptionCard'>
          <p></p>
          <button></button>
        </div>
      </div>
      
    ))}
    </div>
    </div>
  )
}

export default home