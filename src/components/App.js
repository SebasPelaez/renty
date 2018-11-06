import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../containers/header/navbar/Navbar'

const App = () => {
  return(
    <div>
      <Navbar />   
      <h1>
        Hello, Team!
        <FontAwesomeIcon 
          icon="ghost"
          color="indigo"
          size="sm"
        />
      </h1>
    </div>
  )
}

export default App