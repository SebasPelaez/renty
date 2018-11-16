import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../actions/auth'

const SignedInLinks = ({ dispatch }) => {
  return (
    <div>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
        onClick={ () => dispatch(signOut())}>
        Log Out
      </button>
    </div>
  )
}

export default connect()(SignedInLinks)