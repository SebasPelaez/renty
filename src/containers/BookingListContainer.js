import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BookingList from '../components/booking/BookingList'
import { bookingsMock } from '../constants'
import {
  fetchBookings,
  cancelBooking,
  receiveBookings
} from '../actions/booking'

const mapStateToProps = state => ({
  bookings: state.bookings,
  userId: '1234'
})

const mapDispatchToProps = dispatch => ({
  fetchBookings: userId => dispatch(fetchBookings(userId)),
  cancelBooking: (bookingId, rentalId) => dispatch(cancelBooking(bookingId, rentalId)),
  putBookingsMock: () => dispatch(receiveBookings(bookingsMock))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingList))