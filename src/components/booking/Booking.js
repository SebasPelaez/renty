import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Booking.scss'

const Booking = props => {

  const handleCancel = () => {
    props.cancelBooking(props.id, props.car.rental.id)
  }

  return (
    <div className="booking mb-4">
      <div className="content mb-3">
        
        <figure className="mb-0">
          <img src={props.car.thumbnail} alt={`Car#${props.id}`} />
        </figure>

        <div className="info">
          <div className="pickup">
            <h6 className="font-weight-bold">Pick-up</h6>

            <div className="start">
              <FontAwesomeIcon icon="map-marked-alt" fixedWidth />
              <span>{props.pickupPlace}</span>
            </div>

            <div className="end">
              <FontAwesomeIcon icon="calendar-alt" fixedWidth />
              <span>{props.pickupDate}</span>
            </div>
          </div>

          <div className="deliver">
            <h6 className="font-weight-bold">Deliver</h6>
            <div className="start">
              <FontAwesomeIcon icon="map-marked-alt" fixedWidth />
              <span>{props.deliverPlace}</span>
            </div>

            <div className="end">
              <FontAwesomeIcon icon="calendar-alt" fixedWidth />
              <span>{props.deliverDate}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className="font-weight-bold price">
          <span className="mr-2 currency">COP$</span>
          <span className="amount">{props.car.price}</span>
        </div>

        <button type="button" className="btn btn-red" onClick={handleCancel}>
          Cancel
        </button>
        </div>
    </div>
  )
}

export default Booking