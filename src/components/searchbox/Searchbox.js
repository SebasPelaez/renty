import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { fetchCars } from '../../actions/car'
import 'react-dates/initialize';
import TypeSelector from '../typeSelector/TypeSelector'
import Datepicker from '../datepicker/Datepicker'
import './Searchbox.scss'

class Searchbox extends Component {
  constructor(props) {
    super(props)

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = 'startDate';
    } else if (props.autoFocusEndDate) {
      focusedInput = 'endDate';
    }

    this.searchRentalCars = this.searchRentalCars.bind(this)
    this.handleChangeType = this.handleChangeType.bind(this)
    this.updateCarType = this.updateCarType.bind(this)
    this.state = {
      pickup: '',
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
      type: 'Sedan',
      focusedInput
    }

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this); 
  }

  stateDateWrapper = date => date

  onDatesChange({ startDate, endDate }) {    
    this.setState({
      startDate: startDate && this.stateDateWrapper(startDate),
      endDate: endDate && this.stateDateWrapper(endDate),
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
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
      <div className="searchbox shadow-sm">
        <h5 className="m-0">Search rental cars</h5>
        
        <form id="searchbox-form" onSubmit={this.searchRentalCars}>
          <Icon icon="map-marker-alt" className="pickup-icon" fixedWidth />
          <h6 className="pickup-label mt3">Pickup</h6>
          <input className="pickup-input" type="text" placeholder="Add address, or place ..." />

          <Icon icon="calendar-alt" className="time-icon" fixedWidth />
          <h6 className="time-label mt-3">Time</h6>
          <Datepicker
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={this.state.focusedInput}
            startDate={this.state.startDate}
            endDate={this.state.endDate} />

          <Icon icon="car" className="type-icon" fixedWidth />
          <h6 className="type-label mt-3">Type of vehicle</h6>
          <TypeSelector defaultValue={this.state.type} updateCarType={this.updateCarType} />
          <button className="btn btn-success" type="submit" form="searchbox-form">
            <Icon icon="search" className="search-icon" />
            <span className="search-label">Search</span>
          </button>
        </form>
      </div>
    )
  }
}


export default connect()(Searchbox)