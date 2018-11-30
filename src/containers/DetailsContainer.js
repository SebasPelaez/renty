import React, {Component} from 'react'
import { connect } from 'react-redux'
import Details from '../components/carList/Details'
import { fetchCarDetailsIfNeeded } from '../actions/car'

// const mapStateToProps = state => {
  class DetailsContainer extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      console.log('Props', this.props)
      const { dispatch } = this.props
      dispatch(fetchCarDetailsIfNeeded(this.props.carId, this.props.carRental))      
    }

    componentDidUpdate(prevProps) {
      if(this.props.carDetails !== prevProps.carDetails) {
        const { dispatch } = this.props
        dispatch(fetchCarDetailsIfNeeded(this.props.carId, this.props.carRental))
      }
    }
    render() {
      const { carDetails, isFetching } = this.props
        return (
          //<Details carDetails={carDetails} isFetching={isFetching} />
          <h1>Holi</h1>
        )    
    }
  }
  /*return  {
    car: state.carDetails.details,
  }*/

  /*const mapStateToProps = (state, ownProps) => ({
    details: state.carDetails[ownProps.carId]
    
  }, 
  console.log('State:', state.carDetails), console.log('OwnProps:', ownProps))*/
  const mapStateToProps = (state, ownProps) => {
    const { carDetails } = state.carDetails
    const { isFetching, details } = state.carDetails[ownProps.carRental] || {
      isFetching: true,
      details: []
    }
    console.log('State:', state.carDetails)
    console.log('OwnProps:', ownProps)
    return {
      carDetails,
      isFetching,
      details
    }
  }

export default connect(mapStateToProps)(DetailsContainer)