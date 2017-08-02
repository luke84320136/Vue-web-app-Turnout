import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyADN1kuejWPmCKDtj-RqsGsWHGDXONfTlg",
    authDomain: "turnout-fb8d6.firebaseapp.com",
    databaseURL: "https://turnout-fb8d6.firebaseio.com",
    projectId: "turnout-fb8d6",
    storageBucket: "",
    messagingSenderId: "356208951644"
  };
  export const firebaseApp = firebase.initializeApp(config)
