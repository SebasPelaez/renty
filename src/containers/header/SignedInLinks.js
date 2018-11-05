import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'

const SignedInLinks = (props) => {
  console.log("ESTA LLEGANDO ALGO POR LAS PROPS SINGED IN LINKS",props);
  return (
    <div>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
        onClick={props.signOut}>
        Log Out
      </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)