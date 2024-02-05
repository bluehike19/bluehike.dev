import projectData from "../../data"
import "./project.scss"
import React, { useState } from 'react'

const Project = () => {
  // const [modalVisible, setModalVisible] = useState(false);

  // const openModal = () => {
  //   setModalVisible(true);
  // };

  // const closeModal = () => {
  //   setModalVisible(false);
  // };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setModalVisible(false);
  };

  return (
    <div className="projects">
    {projectData.map((card) => (
      <div key={card.id} className="card" data-aos="zoom-in-right">
        <div className="imageCard">
        <img src={card.img} alt={card.title} />
        </div>
        <div className="descCard">
        <h2>{card.title}</h2>
        <p>
              {card.desc.length > 100 ? `${card.desc.slice(0, 100)}...` : card.desc}
              {' '}
              <span className="read-more" onClick={() => openModal(card)}>
                Read More
              </span>
            </p>
        {/* <p>{card.desc}</p> */}
        <a href={card.link} target="_blank" rel="noopener noreferrer">
          Learn more
        </a>
        </div>
      </div>
    ))}
     {modalVisible && selectedCard && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{selectedCard.title}</h2>
            <p>{selectedCard.desc}</p>
            <a href={selectedCard.link} target="_blank" rel="noopener noreferrer">
              Learn more
            </a>
          </div>
        </div>
      )}
  </div>
  )
}

export default Project