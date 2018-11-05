import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyD18v6z7ZhNlNehe2K9kHm9kJM0INcO2Hs",
  authDomain: "renty-77761.firebaseapp.com",
  databaseURL: "https://renty-77761.firebaseio.com",
  projectId: "renty-77761",
  storageBucket: "renty-77761.appspot.com",
  messagingSenderId: "936238349942"
}
firebase.initializeApp(config);

export default firebase 