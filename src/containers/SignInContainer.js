import { connect } from 'react-redux'
import { signIn } from '../actions/auth'
import SignIn from '../components/signIn/SignIn'

const mapDispatchToProps = dispatch => ({
  signIn: type => dispatch(signIn(type))
})

export default connect(null, mapDispatchToProps)(SignIn)