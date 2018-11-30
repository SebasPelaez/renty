import React, {Component} from 'react'
import { connect } from 'react-redux'
import Details from '../components/carList/Details'
import { fetchCarDetail } from '../actions/car'

// const mapStateToProps = state => {
  class DetailsContainer extends Component {
    constructor(props) {
      super(props)
    }

    componentWillMount() {
      console.log('Props', this.props)
      const { dispatch } = this.props
      dispatch(fetchCarDetail(this.props.carId, this.props.carRental))
    }    
    render() {
      return (
        <Details />
      )
    }
  }
  /*return  {
    car: state.carDetails.details,
  }*/

  const mapStateToProps = (state, ownProps) => ({
    details: state.carDetails[ownProps.carId]
  })

export default connect(mapStateToProps)(DetailsContainer)