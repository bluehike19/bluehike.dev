import React from 'react'
import "./footer.scss"
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='footer'>Copyright © 2024 
    <span href='https://github.com/bluehike' target='_blank' rel='noopener' className='bluehike'>
    <FaGithub />
    </span>
     Privacy policy.</div>
    </>
  )
}

export default Footer