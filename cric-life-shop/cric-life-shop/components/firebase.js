import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh0OSUw5_pIp4BI7vbTXn5vogIfWImbqg",
  authDomain: "chatauth-827a5.firebaseapp.com",
  databaseURL: "https://chatauth-827a5-default-rtdb.firebaseio.com",
  projectId: "chatauth-827a5",
  storageBucket: "chatauth-827a5.appspot.com",
  messagingSenderId: "637351100009",
  appId: "1:637351100009:web:c81379e49a6f69bba7acf8"
};

// Initialize Firebase
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };


