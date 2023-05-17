import React from 'react'
import './style/Home.css'

const Home = () => {
  return (
    <article id='home' className='home'>
      <div className='home__name retroshadow'>
        <h1>Juan Luis Orozco</h1>
      </div>
      <div className='home__title retroshadow'>
        <h2>Frontend Developer</h2>
      </div>
      <div className='home__img'>
        <img className='img' src="/darwin.jpeg" alt="" />
      </div>

    </article>
  )
}

export default Home