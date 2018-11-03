import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../containers/Header'

const App = () => {
  return(
    <div>
      <Header/>
      <h1>
        Hello, Team!
        <FontAwesomeIcon 
          icon="ghost"
          color="indigo"
          size="md"
        />
      </h1>
    </div>
  )
}

export default App