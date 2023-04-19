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


      <div className='mob-menu'>
        <img onClick={handleClickShowNavbar} className='mob-open' src="/open.svg" alt="openSvg" />
        <div className={`mob-conteiner ${showNav}`}>
          <img onClick={handleClickShowNavbar} className='mob-close' src="/close.svg" alt="" />
          <ul className="mob-list">
            <li><a className="mob-list__item" href="#home"> Home</a></li>
            <li><a className="mob-list__item" href="#aboutMe">About Me</a></li>
            <li><a className="mob-list__item" href="#skills">Skills</a></li>
            <li><a className="mob-list__item" href="#projects">Projects</a></li>
            <li><a className="mob-list__item" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </section>

  )
}

export default Header