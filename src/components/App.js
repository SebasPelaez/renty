import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Pickup from './Pickup'

const App = () => {
  return(
    <div>
      <h1>
        Hello, Team!
        <FontAwesomeIcon 
          icon="ghost"
          color="indigo"
          size="md"
        />
      </h1>
      <Pickup />
    </div>
  )
}

export default App