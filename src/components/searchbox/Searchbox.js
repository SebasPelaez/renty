import React, { Component } from 'react'
import { fetchCars } from '../../actions/car'
import TypeSelector from '../typeSelector/TypeSelector'
import './Searchbox.scss'

class Searchbox extends Component {
  constructor(props) {
    super(props)
    this.searchRentalCars = this.searchRentalCars.bind(this)
    this.updateStartDate = this.updateStartDate.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.updateCarType = this.updateCarType.bind(this)
    this.state = {
      pickup: '',
      startDate: '',
      endDate: '',
      type: 'Sedan'
    }
  }

  updateStartDate(value) {
    this.setState({
      startDate: value
    })
  }

  updatePickup(value) {
    this.setState({
      pickup: value
    })
  }

  handleChangeType(event) {
    this.setState({ type: event.target.value })
  }

  searchRentalCars(event) {
    const { dispatch } = this.props
    event.preventDefault()
    dispatch(fetchCars(this.state))
  }

  updateCarType(value) {
    this.setState({
      type: value
    })
  }

  render() {
    return(
      <div className="searchbox col-sm-3 shadow-sm">
        <h4>Discover new rental car deals.</h4>
        <h5>How much will you save?</h5>

        <h6>Time</h6>

        <h6>Type of Vehicle</h6>
        <form id="searchbox-form" onSubmit={this.searchRentalCars}>
          <TypeSelector defaultValue={this.state.type} updateCarType={this.updateCarType} />

          <button className="btn btn-success mt-3" type="submit" form="searchbox-form">
            Search
          </button>
        </form>
      </div>
    )
  }
}


export default Searchbox