import React from 'react'

const Details = ({ car }) => {
  return(
    <div className="car-details">
      <p>Brand: {car.brand}</p>
      <p>Price: {car.price}</p>
      <p>Type: {car.type}</p>
      <p>Model: {car.model}</p>
      <p>Plate: {car.plate}</p>
      <p>Rating: {car.rating}</p>
      <p>Capacity: {car.capacity}</p>
      <p>Kilometers: {car.kilometers}</p>
      <p>Doors: {car.doors}</p>
      <p>Color: {car.color}</p>
    </div>
  )
}

export default Details