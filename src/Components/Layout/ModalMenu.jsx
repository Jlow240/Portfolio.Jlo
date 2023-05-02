import React from 'react'
import './Styles/ModalMenu.css'


const ModalMenu = ({ showNav, handleClickShowNavbar }) => {
    return (


        <section className={`mob-conteiner ${showNav}`}>
            <ul className="mob-list">  
            <div className='mob-close'>
                <i onClick={handleClickShowNavbar} className='bx bx-x-circle'></i>
            </div>
                <li><a className="mob-list__item" href="#home"> Home</a></li>
                <li><a className="mob-list__item" href="#aboutMe">About Me</a></li>
                <li><a className="mob-list__item" href="#skills">Skills</a></li>
                <li><a className="mob-list__item" href="#projects">Projects</a></li>
                <li><a className="mob-list__item" href="#contact">Contact</a></li>
            </ul>
        </section>
    )
}

export default ModalMenu