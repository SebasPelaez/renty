import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Navbar.scss'
import SignedInLinks from '../SignedInLinks'
import SignedOutLinks from '../GuestLinks'

const Navbar = ({ auth }) => {
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <nav className="navbar navbar-expand-lg justify-content-between">
      <Link className="navbar-brand" to='/'>Renty</Link>
      {links}
    </nav>
  )
}

const mapStateToProps = (state) => ({ auth: state.firebase.auth })

export default connect(mapStateToProps)(Navbar)