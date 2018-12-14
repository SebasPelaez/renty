import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from '../../containers/SignedInLinks'
import SignedOutLinks from '../GuestLinks'
import './Navbar.scss'

const Navbar = ({ auth }) => {
  
  const links = auth ? <SignedInLinks /> : <SignedOutLinks />

  return (
    <nav className="navbar navbar-expand-lg justify-content-between">
      <Link className="navbar-brand" to='/'>Renty</Link>
      {links}
    </nav>
  )
}

export default Navbar