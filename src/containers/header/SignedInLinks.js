import React, { Component } from 'react'
import SignIn from '../../components/auth/SignIn'

class SignedInLinks extends Component {

  renderLoginButton () {
    return(
      <SignIn />
    )
  }

  render() {
    return (
      <div>
        { this.renderLoginButton() }
      </div>
    )
  }
}

export default SignedInLinks