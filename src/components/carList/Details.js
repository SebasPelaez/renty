import React, {Component} from 'react'
import { connect } from 'react-redux'
import Slider from "react-slick";
import { fetchCarDetail } from '../../actions/car'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Details.scss"

const Details = (props) => {
  console.log('Props en details component:', props);
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
  };

/*class Details extends Component {
  constructor(props) {
    super(props)
  }*/

  /*car = {
    "id": 1,
    "brand": "Bugatti",
    "thumbnail": "https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2017/08/bugatti-veyron-mansory-linea-vivere_3.jpg?itok=fjeI3wKx",
    "price": 80000000,
    "type": "Lujo",
    "model": "Veyron Mansory Linea Vivere",
    "rental": {
        "id": 967543461,
        "name": "DoD pyRent"
    },
    "plate": 7895,
    "rating": 5,
    "capacity": 4,
    "transmission": "Automatic",
    "doors": 2,
    "color": "White",
    "kms": 1,
    "pictures": [
        "https://c1.staticflickr.com/9/8728/16671205057_889930d3c0_b.jpg",
        "http://www.mansory.com/files/styles/mansory_range_overview_main/public/media/cars/bugatti_veyron_16.4/linea_vivere/MANSORY_vivere_ext_06.jpg?itok=oDKbqzwI",
        "https://www.bugatti.com/fileadmin/_processed_/a/6/csm_OG-Image_252488ceac.jpg",
        "https://i.ytimg.com/vi/PwxPLKVne2s/maxresdefault.jpg"
   ]   
  }*/
  /*render() {
    if(isFetching) {  // this.props.${props.car.id}.isFetching
      return <span> cargando...</span>
    } else {    */
      return(
        <div>
          <div className="margin-slider">
            <div className="clearfix">
              <h5 className="float-left"><strong>{props.carDetails.brand + ' ' + props.carDetails.model} <span>{props.carDetails.type}</span></strong></h5>
              <h5 className="float-right"><strong>${props.carDetails.price}</strong>/ per day</h5>
            </div>
            
            <Slider {...settingsSlider}>
            {props.carDetails.pictures.map((picture, index) =>
              <div key={index}>
                <img src={picture} className="image-slide" />
              </div>
            )}
            </Slider>
          </div>
          <div className="container-flex">
            <div className="item-flex">
              <ul>
                <li><FontAwesomeIcon icon='barcode' className="mr-2"/><span><strong>Plate:</strong> {props.carDetails.plate}</span></li>
                <li><FontAwesomeIcon icon='users' className="mr-2"/><span><strong>Capacity:</strong> {props.carDetails.capacity}</span></li>
                <li><FontAwesomeIcon icon='cogs' className="mr-2"/><span><strong>Transmission:</strong> {props.carDetails.transmission}</span></li>
                <li><FontAwesomeIcon icon='door-closed' className="mr-2"/><span><strong>Doors:</strong> {props.carDetails.doors}</span></li>
              </ul>
            </div>
            <div className="item-flex">
              <ul>
                <li><FontAwesomeIcon icon="palette" className="mr-2"/><span><strong>Color:</strong> {props.carDetails.color}</span></li>
                <li><FontAwesomeIcon icon="tachometer-alt" className="mr-2"/><span><strong>Kms:</strong> {props.carDetails.kms}</span></li>
                <li><FontAwesomeIcon icon="store" className="mr-2"/><span><strong>Rental:</strong> {props.rental.carDetails.name}</span></li>
                <li><FontAwesomeIcon icon="star" className="mr-2"/><span><strong>Rating:</strong> {props.carDetails.rating}</span></li>
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
//  }
// }

export default Details