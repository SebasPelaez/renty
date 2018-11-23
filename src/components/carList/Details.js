import React from 'react'
import Slider from "react-slick";
import "./Details.scss"
const Details = ({ car }) => {
  car = {
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
        "http://www.mansory.com/files/styles/mansory_range_overview_main/public/media/cars/bugatti_veyron_16.4/linea_vivere/MANSORY_vivere_ext_06.jpg?itok=oDKbqzwI"
   ]   
  }
  const settingsSlider = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return(
    <div>
        <Slider {...settingsSlider}>
        {car.pictures.map((picture,index) =>
          <div key={index}>
            <img src={picture} className="image-slide" />
          </div>
        )}
        </Slider>
      </div>
  )
}

export default Details