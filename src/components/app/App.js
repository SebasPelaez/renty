import React, { Component } from 'react'
import { fetchUser } from '../../actions/auth'
import { Switch, Route } from 'react-router-dom'
import NavbarContainer from '../../containers/NavbarContainer'
import Footer from '../footer/Footer'
import BookingsListContainer from '../../containers/BookingListContainer'
import Home from './Home'
import './App.scss'

class App extends Component {

  componentWillMount() {
    this.props.fetchUser()
  }

  render() {
    return(
      <div className="app">
        <NavbarContainer />
        <div className="app-wrapper">
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/my_bookings' component={BookingsListContainer} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App