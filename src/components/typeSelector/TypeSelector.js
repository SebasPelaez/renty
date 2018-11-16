import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CAR_TYPES } from '../../constants'
import './TypeSelector.scss'

const TypeSelector = ({ defaultValue, updateCarType }) => {
  return(
    <div className="dropdown type-selector">
      <button className="btn dropdown-toggle"
        type="button" id="car-type-selector"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {defaultValue}
        <FontAwesomeIcon icon='angle-down'/>
      </button>
      
      <div className="dropdown-menu" aria-labelledby="car-type-selector">
        {CAR_TYPES.map((type, index) => 
          <button className="dropdown-item"
            type="button"
            key={index}
            onClick={() => updateCarType(type)}
          >
            {type}
          </button>
        )} 
      </div>
    </div>
  )
}

export default TypeSelector