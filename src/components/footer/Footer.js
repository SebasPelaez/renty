import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { DEVELOPERS } from '../../constants'
import Developer from './Developer'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-sm-auto mb-4">
            <div className="title font-weight-bold mb-3">Name Not Found Team</div>
            {
              DEVELOPERS.map((developer, index) =>
                <Developer
                  key={index}
                  {...developer}
                />
              )
            }
          </div>

          <div className="col-sm-4 mb-4">
            <div className="title font-weight-bold mb-3">About Us</div>
            <p className="text-justify">
              We're a cool team of students from the
              <a href="https://www.udea.edu.co" target="_blank" rel='noreferrer noopener'> University of Antioquia </a>
              that wanna improves their knowledge, in this way, we've started this project 
              called Renty with the purpose of learn about Frontend Development, React, 
              Redux, Team working and in general, all topics involved in the company's devolopment 
              software process.
            </p>
          </div>

          <div className="col-sm-auto mb-4">
            <div className="title font-weight-bold mb-3">Contact Us</div>

            <div className="mb-2">
              <Icon icon="paper-plane" className="mr-2"/>
              contact@namenotfound.co
            </div>

            <div className="mb-2">
              <Icon icon="phone" className="mr-2"/>
              + 57 (4) 123 4567
            </div>

            <div className="mb-2">
              <Icon icon="map-marker-alt" className="mr-2"/>
              Medellín <span>&bull;</span> Colombia
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer