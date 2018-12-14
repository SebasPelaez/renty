import { connect } from 'react-redux';
import { fetchUser } from '../actions/auth'
import App from '../components/app/App'

export default connect(null, { fetchUser })(App);