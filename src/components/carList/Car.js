import React from 'react'
import Popup from 'reactjs-popup'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import './Car.scss'
import Currency from 'react-currency-formatter'
import Details from './Details'

const Car = props => {

  const popupTrigger = <div className="view-details-wrapper">
      <button className="view-details">
        VIEW DETAILS
      </button>
    </div>

  return(
    <div className="rental-car card-item">
      <figure>
        <img src={props.thumbnail} alt={`Car #${props.id}`}/>
      </figure>
      
      <div className="content">
        <div className="title">
          {props.brand} <span>&bull;</span> {props.model}
        </div>

        <div>
          <Icon icon="car" className="mr-2" fixedWidth />
          {props.type}
        </div>

        <div>
          <Icon icon="suitcase" className="mr-2" fixedWidth />
          {props.rental.name}
        </div>

        
        <div className="price">
          <span className="rate-currency mr-2">COP$</span>
          <span className="rate-amount">{props.price}</span>
        </div>

        <Popup trigger={popupTrigger} position="right center" modal>
          <Details car={props} />
        </Popup>

      </div>
    </div>
  )
}

export default Car