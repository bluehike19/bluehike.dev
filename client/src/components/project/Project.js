import projectData from "../../data"
import "./project.scss"
import React from 'react'

const Project = () => {
  return (
    <div>
    {projectData.map((card) => (
      <div key={card.id} className="card">
        <img src={card.img} alt={card.title} />
        <h2>{card.title}</h2>
        <p>{card.desc}</p>
        <a href={card.link} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
      </div>
    ))}
  </div>
  )
}

export default Project