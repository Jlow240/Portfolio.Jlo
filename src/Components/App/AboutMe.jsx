import React from 'react'
import './style/AboutMe.css'

const AboutMe = () => {
  return (
    <article id='aboutMe' className='aboutMe'>
      <h2 className='aboutMe__title' >Sobre mi</h2>
      <section className='aboutMe__text'>
        <p>
          ¡Hola! Mi nombre es Juan Luis Orozco Chávez y soy un apasionado frontend developer. Me especializo en crear experiencias web atractivas y funcionales utilizando tecnologías como HTML, JavaScript, CSS, React, Redux y Tailwind.
        </p>
        <p>
          Mi enfoque en el desarrollo frontend se basa en la atención al detalle y en la búsqueda constante de soluciones innovadoras. Me apasiona mantenerme al día con las últimas tendencias y mejores prácticas en el campo del frontend development, lo que me permite ofrecer soluciones eficientes y actualizadas a los desafíos que enfrento.
        </p>
      </section>
    </article>
  )
}

export default AboutMe