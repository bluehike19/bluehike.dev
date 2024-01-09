import "./navbar.scss"
import { DarkModeContext } from "../../context/DarkModeContext"
import React, { useContext } from 'react'
import { BsBrightnessHigh, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext)
  return (
    <div className="navbar">
        <div className="left">
          <span>bluehike</span>
        </div>
        <div className="right">
          {darkMode ? (
            <BsBrightnessHigh onClick={toggle} />
          ) : (
            <BsMoon onClick={toggle} />
          )}
        </div>
    </div>
  )
}

export default Navbar