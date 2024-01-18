import projectData from "../../data"
import "./project.scss"
import React from 'react'

const Project = () => {
  return (
    <div className="projects">
    {projectData.map((card) => (
      <div key={card.id} className="card" data-aos="zoom-in-right">
        <div className="imageCard">
        <img src={card.img} alt={card.title} />
        </div>
        <div className="descCard">
        <h2>{card.title}</h2>
        <p>{card.desc}</p>
        <a href={card.link} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Project