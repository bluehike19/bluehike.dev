import projectData from "../../data"
import "./project.scss"
import React from 'react'

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
  </div>
  )
}

export default Project