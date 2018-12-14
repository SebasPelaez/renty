import React from 'react'
import Searchbox from '../searchbox/Searchbox'
import CarListContainer from '../../containers/CarListContainer'

const Home = () => {
  return (
    <React.Fragment>
      <div className="row justify-content-center py-4">
        <Searchbox />
      </div>
      <div className="row pb-5">
        <CarListContainer />
      </div>
    </React.Fragment>
  )
}

export default Home