import { connect } from 'react-redux'
import Navbar from '../components/navbar/Navbar'

const mapStateToProps = state => ({
  auth: state.auth
})

 export default connect(mapStateToProps)(Navbar)