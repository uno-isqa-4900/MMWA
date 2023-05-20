import firebase from "firebase/app"

import "firebase/firestore"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyBhhmauzmlYX5id586OUpcLt-dlyUgULM8",
  authDomain: "movie-app-9d0f2.firebaseapp.com",
  projectId: "movie-app-9d0f2",
  storageBucket: "movie-app-9d0f2.appspot.com",
  messagingSenderId: "212312413035",
  appId: "1:212312413035:web:17c61b32d5c22a32c4f22e"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let db = firebaseApp.firestore()

export { db }
