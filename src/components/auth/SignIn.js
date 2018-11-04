import React, { Component } from 'react'
import Popup from "reactjs-popup";
import { connect } from 'react-redux'
import { signIn } from '../../actions/authActions'

class SignIn extends Component {
  state = {
    user: null
  }

  handleAuthWithGoogle() {
    this.props.signIn('Google')
  }

  handleAuthWithFacebook() {
    this.props.signIn('Facebook')
  }

  render() {
    const { authError } = this.props;
    return (
      <Popup trigger={
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Login
          </button>
      } position="right center" modal>
        <div>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
            onClick={this.handleAuthWithGoogle}>
            Login With Google
            </button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
            onClick={this.handleAuthWithFacebook}>
            Login With Facebook
            </button>
        </div>
        <div>
          {authError ? <p>{authError}</p> : null}
        </div>
      </Popup>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)