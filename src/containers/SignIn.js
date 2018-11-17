import React from 'react'
import Popup from 'reactjs-popup'
import { connect } from 'react-redux'
import { signIn } from '../actions/auth'
import './SignIn.scss'
import facebookLogo from '../assets/fb.png'
import googleLogo from '../assets/goo.png'

const SignIn = ({ authError, signIn }) => {

  const popupTrigger = <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Login </button>

  return (
    <Popup trigger={popupTrigger} position="right center" modal>
      <div className="popup-wrapper">
        <h4>We are <strong>Renty</strong></h4>
        <p className="mb-0 mt-3">
          Welcome Back! Please login to your account to get another adventure on the road.
        </p>

        <div className="auth-options">
          <button className="btn btn-social" type="button" onClick={() => signIn('GOOGLE')}>
            <img src={googleLogo} alt="" />
            Continue with Google
          </button>

          <button className="btn btn-social" type="button" onClick={() => signIn('FACEBOOK')}>
            <img src={facebookLogo} alt=""/>
            Continue with Facebook
          </button>
        </div>

        <div>
          {authError && <p>{authError}</p>}
        </div>  
      </div>
    </Popup>
  )
}

const mapStateToProps = state => ({
  authError: state.auth.authError
})

const mapDispatchToProps = dispatch => ({
  signIn: type => dispatch(signIn(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)