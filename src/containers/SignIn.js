import React from 'react'
import Popup from 'reactjs-popup'
import { connect } from 'react-redux'
import { signIn } from '../actions/auth'

const SignIn = ({ authError, signIn }) =>  {

  const algo = <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Login </button>

  return (
    <Popup trigger={ algo } position="right center" modal>
      <React.Fragment>
        <div className="login-container">
          <div className = "login-header">
            <div className = "login-header-logo">
              <h1>Renty</h1>
            </div>
            <div className = "login-header-text">
              <h2> ¡Hola! </h2>
              <p> Inicia sesión para recibir ofertas y ver los detalles de tu carro.</p>
            </div>
          </div>
          <div className = "login-action">
            <h3> Puedes hacerlo con </h3>
            <button className="google-btn" type="submit"
              onClick={ () => signIn('GOOGLE') }>
              <div className = "google-logo">                
              </div>
              <p>Login With Google</p>
            </button>
            <p> ó </p>
            <button className="fb-btn" type="submit"
              onClick={ () => signIn('FACEBOOK') }>
              <div className = "fb-logo">                
              </div>
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