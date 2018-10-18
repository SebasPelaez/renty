import React from 'react'
import { DEVELOPERS } from '../../constants'
import Developer from './Developer'

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="title font-weight-bold mb-4">Name Not Found Team</div>
            {
              DEVELOPERS.map(developer => 
                <Developer {...developer}/> 
              )
            }
          </div>

          <div className="col-sm">
            <div className="title font-weight-bold mb-4">About Us</div>
            <p>
              We're a cool team of students from the
              <a href="https://www.udea.edu.co" target="_blank" rel='noreferrer noopener'> University of Antioquia </a>
              that wanna improves our knowledge, in this way, we've started this project 
              called Renty with the purpose of learn about Frontend Development, React, 
              Redux, Team working and all topics involved in the company's devolpement 
              software process.
            </p>
          </div>

          <div className="col-sm">
            <div className="title font-weight-bold mb-4">Contact Us</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer