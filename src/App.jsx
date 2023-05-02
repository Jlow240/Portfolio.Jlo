import './App.css'
import Header from './Components/Layout/Header'
import Home from './Components/App/Home'
import AboutMe from './Components/App/AboutMe'
import { useState } from 'react'
import Skills from './Components/App/Skills'
import Projects from './Components/App/Projects'
import Contact from './Components/App/Contact'
import ModalMenu from './Components/Layout/ModalMenu'

// puedo hacer el navbar con estados y cambiando las clases con backticks


function App() {

  const [showNav, setShowNav] = useState('inactive')

  const handleClickShowNavbar = () => {
    setShowNav(showNav === 'inactive' ? 'active' : 'inactive')
  }

  return (
    <main className="App">
      <Header
        className='header'
        showNav={showNav}
        handleClickShowNavbar={handleClickShowNavbar} />
      <ModalMenu
        showNav={showNav}
        handleClickShowNavbar={handleClickShowNavbar} />
      <article className='card__conteiner'>
        <Home className='card' />
        <AboutMe className='card' />
        <Skills className='card' />
        <Projects className='card' />
        <Contact className='card' />
      </article>
    </main>
  )
}

export default App
