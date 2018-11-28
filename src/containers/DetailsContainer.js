import { connect } from 'react-redux'
import Details from '../components/carList/Details'

const mapStateToProps = state => {
  return  {
    car: state.carDetails.details,
  }
}

export default connect(mapStateToProps)(Details)