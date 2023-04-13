import React from 'react'
import './Styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__logo">
        <a  href="https://github.com/Jlow240" target='_blank'><img className='logo' src="/Jlow.svg" alt="" /></a>
      </div>
      <nav className="navbar">
        <a href="#"> Home</a>
        <a href="#">About Me</a>
        <a href="#">Skills</a>
        <a href="#">Proyects</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  )
}

export default Header