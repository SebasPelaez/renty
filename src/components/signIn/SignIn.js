import React from 'react'
import Popup from 'reactjs-popup'
import facebookLogo from '../../assets/fb.png'
import googleLogo from '../../assets/goo.png'
import './SignIn.scss'

const SignIn = ({ authError, signIn }) => {

  const popupTrigger = <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Login </button>

  return (
    <Popup trigger={popupTrigger} position="right center" modal>
      <div className="popup-wrapper">
        <h4>We are <strong className="has-brand-font">Renty</strong></h4>
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

export default SignIn