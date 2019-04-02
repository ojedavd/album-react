import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDp2ARsG2LPhpBO5cuPCrmCS_k33HIJXqA",
    authDomain: "albums-react-81475.firebaseapp.com",
    databaseURL: "https://albums-react-81475.firebaseio.com",
    projectId: "albums-react-81475",
    storageBucket: "albums-react-81475.appspot.com",
    messagingSenderId: "1012149602333"
};

firebase.initializeApp(config);

export default firebase;
