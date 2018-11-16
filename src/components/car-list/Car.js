import React from 'react'
import './Car.scss'
import Currency from 'react-currency-formatter';

const Car = (props) => {
  return(
      <div className="card-item">
        <div className="card">
          <img className="card-img-top" src={props.thumbnail} alt="Card cap"/>
            <div className="card-block margin-card-content">
              <h4 className="card-title">{props.brand} {props.model}</h4>
              <p className="card-text"><small className="text-muted">{props.rental.name}</small></p>
              <p className="card-text"><small className="text-muted">{props.type}</small></p>
              <a href="#!" className="btn btn-primary">Ver detalles</a>
              <p href="#!" className="card-text text-inline"><strong><Currency quantity={props.price} currency="COP"/> COP</strong></p>
            </div>
        </div>
      </div>
  )
}

export default Car