import firebase from 'firebase'

export const signIn = (socialNetwork) => {
    return (dispatch, getState, { getFirebase }) => {
        var provider
        switch (socialNetwork) {
            case 'Facebook':
                provider = new firebase.auth.FacebookAuthProvider()
                provider.addScope('user_birthday')
                firebase.auth().signInWithPopup(provider)
                    .then(() => {
                        dispatch({ type: 'LOGIN_SUCCESS' })
                    })
                    .catch((err) => {
                        dispatch({ type: 'LOGIN_ERROR', err })
                    })
                break
            case 'Google':
                provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider)
                    .then(() => {
                        dispatch({ type: 'LOGIN_SUCCESS' })
                    })
                    .catch((err) => {
                        dispatch({ type: 'LOGIN_ERROR', err })
                    })
                break
            default:
                return null
        }
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        })
        .catch((err) => {
            dispatch({ type: 'SIGNOUT_ERROR', err })
        })
    }
}