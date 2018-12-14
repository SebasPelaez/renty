import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import Booking from './Booking'
import emptyState from '../../assets/empty-state.png'
import './BookingList.scss'

class BookingList extends Component {
  
  componentDidMount() {
    const { userId, fetchBookings } = this.props
    fetchBookings(userId)
    // try {
    //   fetchBookings(userId)
    // } catch(error) {
    //   console.log("Patch Enabled! becasue", error)
    //   this.props.putBookingsMock()
    // }
  }
  
  render() {
    const { bookings: bookingsState, cancelBooking } = this.props
    const bookings = Object.values(bookingsState.items)

    return (
      <React.Fragment>
        <div className="booking-list">
          <h2 className="my-4">Bookings Management</h2>
          {isEmpty(bookings) &&
            <div className="empty-state text-center mt-5">
              <figure>
                <img src={emptyState} alt="Booking empty state"/>
              </figure>
              <h5>You don't have bookings yet!</h5>
              <p>Do not worry about your next, search, reserve and organize time.</p>
            </div>
          }
          {!isEmpty(bookings) &&
            bookings.map(booking => (
              <Booking 
                key={booking.id}
                cancelBooking={cancelBooking}
                {...booking}
              />
            ))
          }
        </div>
      </React.Fragment>
    )
  }
}

export default BookingList