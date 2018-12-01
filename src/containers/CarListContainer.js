import { connect } from 'react-redux'
import CarList from '../components/carList/CarList'

const mapStateToProps = state => {  //¿Acá también se debe llamar el ownProps?
  return  {
    cars: state.cars.items,
    isFetching: state.cars.isFetching
  }
}

export default connect(mapStateToProps)(CarList)