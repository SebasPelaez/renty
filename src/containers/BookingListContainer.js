import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BookingList from '../components/booking/BookingList'
import {
  fetchBookings,
  cancelBooking
} from '../actions/booking'

const mapStateToProps = state => ({
  bookings: state.bookings,
  userId: state.firebase.auth.uid
})

const mapDispatchToProps = dispatch => ({
  fetchBookings: userId => dispatch(fetchBookings(userId)),
  cancelBooking: (bookingId, rentalId) => dispatch(cancelBooking(bookingId, rentalId)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingList))