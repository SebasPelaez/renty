import { connect } from 'react-redux'
import { signIn } from '../actions/auth'
import SignIn from '../components/signIn/SignIn'

const mapStateToProps = state => ({
  authError: state.auth.authError
})

const mapDispatchToProps = dispatch => ({
  signIn: type => dispatch(signIn(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)