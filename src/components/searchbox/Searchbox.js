import React, { Component } from 'react'
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
      <div className="searchbox col-sm-4 shadow-sm">
        <h4>Search rental cars</h4>

        <h6 className="mt-4">Time</h6>
        <Datepicker
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={this.state.focusedInput}
          startDate={this.state.startDate}
          endDate={this.state.endDate} />

        <h6 className="mt-4">Type of Vehicle</h6>
        <form id="searchbox-form" onSubmit={this.searchRentalCars}>
          <TypeSelector defaultValue={this.state.type} updateCarType={this.updateCarType} />
          <button className="btn btn-success mt-4" type="submit" form="searchbox-form">
            Search
          </button>
        </form>
      </div>
    )
  }
}


export default Searchbox