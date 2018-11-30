import React from 'react'
import Popup from 'reactjs-popup'
import './Car.scss'
import Currency from 'react-currency-formatter'
import RentalCarDetails from '../../containers/RentalCarDetails'

const Car = props => {

  const popupTrigger = <div className="view-details-wrapper">
      <button className="view-details">
        VIEW DETAILS
      </button>
    </div>
  const settingsModal = {
    width: "80% !important"
  }

  return(
    <div className="rental-car card-item">
      <figure>
        <img src={props.thumbnail} alt={`Car #${props.id}`}/>
      </figure>
      
      <div className="content">
        <p className="m-0 title">
          {props.brand} {props.model}
        </p>

        <span className="price">
          {props.price}
        </span>

        <p>
          {props.rental.name}
        </p>

        <p>
          {props.type}
        </p>

        <Popup trigger={popupTrigger} position="right center" modal contentStyle={settingsModal}>          
          <RentalCarDetails carId={props.id} rentalId={props.rental.id} />
        </Popup>

      </div>
    </div>
  )
}

export default Car