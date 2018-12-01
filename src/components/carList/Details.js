import React from 'react'
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Details.scss'

const Details = (props) => {

  const settingsSlider = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const { carDetails } = props

  return (
    <div>
      <div className="margin-slider">
        <div className="clearfix">
          <h5 className="float-left"><strong>{carDetails.brand + ' ' + carDetails.model} <span>{carDetails.type}</span></strong></h5>
          <h5 className="float-right"><strong>${carDetails.price}</strong>/ per day</h5>
        </div>
        
        <Slider {...settingsSlider}>
        {carDetails.pictures.map((picture,index) =>
          <div key={index}>
            <img src={picture} className="image-slide" />
          </div>
        )}
        </Slider>
      </div>
      <div className="container-flex">
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
      <div className="container-flex-column">
        <div className="item-flex-button">
          <button className="rental-button">Rental</button>
        </div>
      </div>
    </div>
  )
}
  

export default Details