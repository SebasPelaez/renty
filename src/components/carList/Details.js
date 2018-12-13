import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Details.scss'

const Details = (props) => {

  const { carDetails } = props

  return (
    <div className="container-flex">
      <div className="item-flex">
          <Carousel showArrows={true} showThumbs={false} swipeable={true} showIndicators={false} showStatus={false} infiniteLoop={true}>
            {carDetails.pictures.map((picture,index) =>
              <div key={index}>
                <img src={picture} className="image-slide" />
              </div>
            )}
          </Carousel>
      </div>
      <div className="item-flex margin-detail">
        <div className="clearfix">
          <h5 className="float-left"><strong>{carDetails.brand + ' ' + carDetails.model} <span>{carDetails.type}</span></strong></h5>        
        </div>

        <div className="container-flex-column">

          <div className="item-flex-column-info">

            <div className="container-flex margin-top-info">

              <div className="item-flex">
                <ul>
                  <li><FontAwesomeIcon icon='barcode' className="mr-2"/><span><strong>Plate:</strong> {carDetails.plate}</span></li>
                  <li><FontAwesomeIcon icon='users' className="mr-2"/><span><strong>Capacity:</strong> {carDetails.capacity}</span></li>
                  <li><FontAwesomeIcon icon='cogs' className="mr-2"/><span><strong>Transmission:</strong> {carDetails.transmission}</span></li>
                  <li><FontAwesomeIcon icon='door-closed' className="mr-2"/><span><strong>Doors:</strong> {carDetails.doors}</span></li>
                </ul>
              </div>

              <div className="item-flex">
                <ul>
                  <li><FontAwesomeIcon icon="palette" className="mr-2"/><span><strong>Color:</strong> {carDetails.color}</span></li>
                  <li><FontAwesomeIcon icon="tachometer-alt" className="mr-2"/><span><strong>Kms:</strong> {carDetails.kms}</span></li>
                  <li><FontAwesomeIcon icon="store" className="mr-2"/><span><strong>Rental:</strong> {carDetails.rental.name}</span></li>
                  <li><FontAwesomeIcon icon="star" className="mr-2"/><span><strong>Rating:</strong> {carDetails.rating}</span></li>
                </ul>
              </div>

            </div>

          </div>

          <div className="rental-button-wrapper">
            <p className="float-left"><strong>${carDetails.price.toLocaleString()}</strong>/per day</p>
            <button className="rental-button"> Rental </button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Details