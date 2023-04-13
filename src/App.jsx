import './App.css'
import Header from './Components/Layout/Header'
import Home from './Components/App/Home'
import AboutMe from './Components/App/AboutMe'
import { useState } from 'react'

// puedo hacer el navbar con estados y cambiando las clases con backticks


function App() {

  const [showNav, setShowNav] = useState('inactive')

  const handleClickShowNavbar = () => {
    setShowNav(showNav === 'inactive' ? 'active' : 'inactive')
  }

  return (
    <main className="App">
      <Header 
      showNav={showNav}
      handleClickShowNavbar={handleClickShowNavbar}
      />
      <Home />
      <AboutMe />
    </main>
  )
}

export default App
