import React from 'react'
import './style/Home.css'

const Home = () => {
  return (
    <article id='home' className='home'>
      <div className='home__img'>
        <img className='img' src="/me.jpg" alt="" />
      </div>
      <h1 className='home__name'>
        Juan Luis Orozco
      </h1>
    </article>
  )
}

export default Home