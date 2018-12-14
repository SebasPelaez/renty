import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';
firebase.initializeApp(FirebaseConfig)

export const authRef = firebase.auth();
export const providers = {
  FACEBOOK: new firebase.auth.FacebookAuthProvider(),
  GOOGLE: new firebase.auth.GoogleAuthProvider()
}