import React from 'react'
import Popup from 'reactjs-popup'
import { connect } from 'react-redux'
import { signIn } from '../actions/auth'

const SignIn = ({ authError, signIn }) =>  {

  const algo = <button className="btn btn-outline-success my-2 my-sm-0" type="submit"> Login </button>

  return (
    <Popup trigger={ algo } position="right center" modal>
      <React.Fragment>
        <div>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
            onClick={ () => signIn('GOOGLE') }>
            Login With Google
          </button>
          
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
            onClick={ () => signIn('FACEBOOK') }>
            Login With Facebook
          </button>
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