import React from "react"
import Popup from "reactjs-popup"
import "./Car.scss"
import Currency from "react-currency-formatter"
import RentalCarDetails from "../../containers/RentalCarDetails"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
    <div className="rental-car card-item shadow-sm">
      <figure>
        <img src={props.thumbnail} alt={`Car #${props.id}`}/>
      </figure>

      <div className="content">
        <p className="title mb-2 truncated">
          {props.brand} {props.model}
        </p>

        <div>
          <FontAwesomeIcon icon="car" className="mr-2" fixedWidth />
          {props.type}
        </div>

        <div>
          <FontAwesomeIcon icon="suitcase" className="mr-2" fixedWidth />
          {props.rental.name}
        </div>

        <div className="font-weight-bold my-4 price">
          <span className="mr-1 currency">COP$</span>
          <span className="amount">{props.price}</span>
        </div>

        <Popup trigger={popupTrigger} position="right center" modal contentStyle={settingsModal}>          
          <RentalCarDetails carId={props.id} rentalId={props.rental.id} />
        </Popup>

      </div>
    </div>
  )
}

export default Car