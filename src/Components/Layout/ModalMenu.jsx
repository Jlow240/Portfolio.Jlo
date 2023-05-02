import React from 'react'
import './Styles/ModalMenu.css'


const ModalMenu = ({ showNav, handleClickShowNavbar }) => {
    return (


        <section className={`mob-conteiner ${showNav}`}>
            <ul className="mob-list">
                <div className='mob-close'>
                    <i onClick={handleClickShowNavbar} className='bx bx-x-circle'></i>
                </div>
                <li className="mob-list__item">
                    <a href="#home">
                        <span>Home</span>
                        <span>
                            <i class='bx bx-home-heart'></i>
                        </span>
                    </a>
                </li>
                <li className="mob-list__item">
                    <a href="#aboutMe">
                        <span>About Me</span>
                        <span>
                            <i class='bx bxs-user-badge'></i>
                        </span>
                    </a>
                </li>
                <li className="mob-list__item">
                    <a href="#skills">
                        <span>Skills</span>
                        <span>
                            <i class='bx bx-code-curly'></i>
                        </span>
                    </a>
                </li>
                <li className="mob-list__item">
                    <a href="#projects">
                        <span>Projects</span>
                        <span>
                            <i class='bx bxs-layout'></i>
                        </span>
                    </a>
                </li>
                <li className="mob-list__item">
                    <a href="#contact">
                        <span>Contact</span>
                        <span>
                            <i class='bx bxs-contact' ></i>
                        </span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default ModalMenu