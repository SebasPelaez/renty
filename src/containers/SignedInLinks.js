import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../actions/auth'
import { Link } from 'react-router-dom'

const SignedInLinks = ({ dispatch }) => {
  return (
    <div>
      <Link to="/my_bookings" className="btn btn-bookings mr-3">
        My Bookings
      </Link>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
        onClick={ () => dispatch(signOut())}>
        Log Out
      </button>
    </div>
  )
}
 export default connect()(SignedInLinks)