import React from 'react'
import Searchbox from '../searchbox/Searchbox'
import NavbarContainer from '../../containers/NavbarContainer'
import Footer from '../footer/Footer'
import CarListContainer from '../../containers/CarListContainer'
import './App.scss'

const App = () => {
  return(
    <div className="app">
      <NavbarContainer />
      <div className="app-wrapper">
        <div className="container">
          <div className="row justify-content-center py-5">
            <Searchbox />
          </div>
          <div className="row pb-5">
            <CarListContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App