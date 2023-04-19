import React from 'react'
import './style/Skills.css'
const Skills = () => {
  return (
    <article id='skills' className='skills'>
      <h2 className='skills__title'>Skills</h2>
      <section className='skills__wrapper'>
        <div className='skills__item'>
          <img src="/public/skills/html-1.svg" alt="" />
           <h3>HTML</h3>
          </div>
        <div className='skills__item'>
          <img src="/public/skills/css-3.svg" alt="" />
           <h3>Css</h3>
          </div>
        <div className='skills__item'>
          <img src="/public/skills/logo-javascript.svg" alt="" />
           <h3>Js</h3>
          </div>
        <div className='skills__item'>
          <img src="/public/skills/react-2.svg" alt="" />
           <h3>React</h3>
          </div>
        <div className='skills__item'>
          <img src="/public/skills/redux.svg" alt="" />
           <h3>Redux</h3>
          </div>
        <div className='skills__item'>
          <img src="/public/skills/tailwind-css-2.svg" alt="" />
        <h3>Tailwind</h3> 
        </div>
      </section>
    </article>
  )
}

export default Skills