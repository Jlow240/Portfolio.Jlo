import React from 'react'
import './Styles/Header.css'



const Header = ({ showNav, handleClickShowNavbar }) => {
  return (
    <section className='header'>
      <div className="header__logo">
        <a href="https://github.com/Jlow240" target='_blank'><img className='logo' src="/Jlow.svg" alt="" /></a>
      </div>
      <nav className="navbar">
        <a href="#"> Home</a>
        <a href="#">About Me</a>
        <a href="#">Skills</a>
        <a href="#">Proyects</a>
        <a href="#">Contact</a>
      </nav>


      <div className='mob-menu'>
        <img onClick={handleClickShowNavbar} className='mob-open' src="/open.svg" alt="openSvg" />
        <div className={`mob-conteiner ${showNav}`}>
          <img onClick={handleClickShowNavbar} className='mob-close' src="/close.svg" alt="" />
          <div className="mob-list">
            {/*<div className="header__logo">
              <a href="https://github.com/Jlow240" target='_blank'><img className='logo' src="/Jlow.svg" alt="" /></a>
            </div>*/}
            <a className="mob-list__item" href="#"> Home</a>
            <a className="mob-list__item" href="#">About Me</a>
            <a className="mob-list__item" href="#">Skills</a>
            <a className="mob-list__item" href="#">Proyects</a>
            <a className="mob-list__item" href="#">Contact</a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Header