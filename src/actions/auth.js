import firebase from "firebase";

export const signIn = (socialNetwork) => {
  return dispatch => {
    var provider = null;

    switch (socialNetwork) {
      case "FACEBOOK":
        provider = new firebase.auth.FacebookAuthProvider()
        provider.addScope("user_birthday")
        break
      case "GOOGLE":
        provider = new firebase.auth.GoogleAuthProvider();
        break
      default:
        return null;
    }
    firebase.auth().signInWithPopup(provider)
    .then(() =>
      dispatch({ type: "LOGIN_SUCCESS" })
    )
    .catch(err =>
      dispatch({ type: "LOGIN_ERROR", err })
    )
  }
}

export const signOut = () => {
  return dispatch => {

    firebase.auth().signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" })
      })
      .catch((err) => {
        dispatch({ type: "SIGNOUT_ERROR", err })
      })
  }
}