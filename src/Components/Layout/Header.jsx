import React from 'react'
import './Styles/Header.css'



const Header = ({ showNav, handleClickShowNavbar }) => {
  return (
    <section className='header'>
      <div className="header__logo imagen">
        <a href="https://github.com/Jlow240" target='_blank'><img className='logo' src="/Jlow.svg" alt="" /></a>
      </div>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#aboutMe">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div onClick={handleClickShowNavbar} className='icon'>D</div>

    </section>

  )
}

export default Header