import React from 'react'
import Searchbox from '../searchbox/Searchbox'
import './App.scss'

const App = () => {
  return(
    <div className="app-wrapper">
      <div className="container">
        <div className="row">
          <Searchbox />
        </div>
      </div>
    </div>
  )
}

export default App