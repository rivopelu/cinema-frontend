import React from 'react'
import { NavbarComp } from './components'
import { MainRouter } from './config'
import './index.scss'
const App = () => {
  return (
    <div className='App'>
      <NavbarComp />
      <div className="MAIN">
        <MainRouter />
      </div>
    </div>
  )
}

export default App