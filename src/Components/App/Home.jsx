import React from 'react'
import './style/Home.css'

const Home = () => {
  return (
    <article id='home' className='home'>
      <div className='home__img'>
        <img className='img' src="/me.jpg" alt="" />
      </div>
      <div className='home__name'>
        <h1 className='name'>
        Juan Luis Orozco
      </h1>
      </div>
      
    </article>
  )
}

export default Home