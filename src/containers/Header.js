import React, { Component } from 'react'
import firebase from 'firebase'
import Popup from "reactjs-popup";

class Header extends Component {

    constructor () {
        super();
        this.state = {
          user: null
        };
    
        this.handleAuthWithGoogle = this.handleAuthWithGoogle.bind(this)
        this.handleAuthWithFacebook = this.handleAuthWithFacebook.bind(this);        
    }

    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ user });
        });
    }

    handleAuthWithGoogle () {
        const provider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth().signInWithPopup(provider)
          .then(result => console.log(`${result.user.email} ha iniciado sesión`))
          .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    handleAuthWithFacebook () {
        var provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesión`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`))
    }

    handleLogout () {
        firebase.auth().signOut()
          .then(result => console.log(`${result.user.email} ha iniciado sesión`))
          .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    renderLoginButton () {
        if (!this.state.user) {
            return(
                <Popup trigger={
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Login
                        </button>
                    } position="right center" modal>
                    <div>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" 
                            onClick={this.handleAuthWithGoogle}>
                            Login With Google
                        </button>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" 
                            onClick={this.handleAuthWithFacebook}>
                            Login With Facebook
                        </button>
                    </div>                    
                </Popup>
            )
        }else{
            return(
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" 
                    onClick={this.handleLogout}>
                    Logout
                </button>
            )
        }
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">Renty</a>
                    { this.renderLoginButton() }
                </nav>                
            </header>
        )
    }
}

export default Header