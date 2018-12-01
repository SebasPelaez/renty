import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchCarDetailsIfNeeded } from '../actions/car'
import { isEmpty } from 'lodash'
import Details from '../components/carList/Details'

  class RentalCarDetails extends Component {

    componentDidMount() {
      const { dispatch, carId, rentalId } = this.props
      dispatch(fetchCarDetailsIfNeeded(carId, rentalId))
    }    
    
    render() {
      const { details, isFetching } = this.props.carDetails
      return (
        <React.Fragment>
          {isFetching && isEmpty(details) && <h2>Loading...</h2>}
          {!isFetching && isEmpty(details) && <h2>Empty.</h2>}
          {!isEmpty(details) && <Details carDetails={details} />}
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = (state, ownProps) => {
    const { carId, rentalId } = ownProps
    const rental = state.carDetails[rentalId]
    let carDetails

    if (rental && rental[carId]) {
      carDetails = rental[carId]
    } else {
      carDetails = { isFetching: true, details: {} }
    }
    
    return { carDetails }
  }

export default connect(mapStateToProps)(RentalCarDetails)