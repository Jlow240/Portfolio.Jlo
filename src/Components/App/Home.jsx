import React from 'react'
import './style/Home.css'

const Home = () => {
  return (
    <article className='home'>
      <div className='home__img'>
        <img className='img' src="/me.jpg" alt="" />
      </div>

      <section className='home__name'>
        <div>
          Soy
        </div>
        <div>
          Juan Luis Orozco
        </div>
      </section>

    </article>
  )
}

export default Home