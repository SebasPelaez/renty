import React, { Component } from 'react'
import Constants from '../constants'

class Pickup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: '',
            suggests: []
        }
        this.searchPickup = this.searchPickup.bind(this)
    }

    searchPickup(value) {
        this.setState({selected: value})
        var url = `https://places.cit.api.here.com/places/v1/autosuggest?app_id=${Constants.appId}&app_code=${Constants.appCode}&at=6.2377,-75.5756&q=${value}&size=${Constants.size}&pretty`
        fetch(url)
          .then(response => response.json())
          .then(places => this.setState({suggests: places.results}))
    }

    selectPickup(index) {
        this.setState({selected: this.state.suggests[index].title})
        this.setState({suggests: []})
    }

    render() {
        return(
            <div>
                <label>
                    Lugar: 
                    <input type="text" value={this.state.selected} onChange={(event) => this.searchPickup(event.target.value)}/>
                    <ul>
                        {this.state.suggests.map((pickup, index) => <li><input type="button" value={pickup.title} onClick={() => this.selectPickup(index)}/></li>)}
                    </ul>
                </label>
            </div>
            )
    }
}

export default Pickup