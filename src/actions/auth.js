import { authRef, providers } from "../config/firebase";
import { FETCH_USER } from "./types";

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null
      });
    }
  });
};

export const signIn = socialNetwork => dispatch => {
  authRef
    .signInWithPopup(providers[socialNetwork])
    .then(result => {
      dispatch({
        type: FETCH_USER,
        payload: result
      }); 
    })
    .catch(error => {
      console.log(error);
    });
};

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};