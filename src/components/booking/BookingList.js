import React, { Component } from 'react'
import { isEmpty } from 'lodash'
import Booking from './Booking'
import './BookingList.scss'

class BookingList extends Component {
  
  componentDidMount() {
    const { userId, fetchBookings } = this.props
    fetchBookings(userId)
  }
  
  render() {
    const { bookings: bookingsState, cancelBooking } = this.props
    const bookings = Object.values(bookingsState.items)

    return (
      <React.Fragment>
        <div className="booking-list">
          <h2 className="my-4">Bookings Management</h2>
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