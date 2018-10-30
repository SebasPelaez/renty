import React from 'react'
import Footer from './footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  return(
    <div id="app">
      <h1>
        Hello, Team!
        <FontAwesomeIcon 
          icon="ghost"
          color="indigo"
          size="md"
        />
      </h1>
      <Footer />
    </div>
  )
}

export default App