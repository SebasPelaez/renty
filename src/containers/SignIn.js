import React from 'react'
import Popup from 'reactjs-popup'
import { connect } from 'react-redux'
import { signIn } from '../actions/auth'
import './SignIn.scss'

const SignIn = ({ authError, signIn }) => {

  const popupTrigger = <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Login </button>

  return (
    <Popup trigger={popupTrigger} position="right center" modal>
      <React.Fragment>
        <div className="login-container">
          <div className="login-header">
            <div className="login-header-logo">
              <h1>Renty</h1>
            </div>
            <div className="login-header-text">
              <p> Hola! Inicia sesión para recibir ofertas y ver los detalles de tu carro.</p>
            </div>
          </div>
          <div className="login-action">
            <hr></hr>
            <h4> Puedes hacerlo con </h4>
            <button className="social-btn" type="submit"
              onClick={() => signIn('GOOGLE')}>
              <img src="https://drive.google.com/uc?id=11AzsJsivKsIZ6JM2xf1z9C0pbOPeuhyn" className="fb-logo" alt=""></img>
              <p>Login With Google</p>
            </button>
            <p> ó </p>
            <button className="social-btn" type="submit"
              onClick={() => signIn('FACEBOOK')}>
              <img src="https://drive.google.com/uc?id=11AzsJsivKsIZ6JM2xf1z9C0pbOPeuhyn" className="fb-logo" alt=""></img>
              <p>Login With Facebook</p>
            </button>
          </div>          
        </div>
        <div>
          {authError && <p>{authError}</p>}
        </div>
      </React.Fragment>
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