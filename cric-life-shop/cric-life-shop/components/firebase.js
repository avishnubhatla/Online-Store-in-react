import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuw4vnGYXt9el8VEchaS_z3nxC81z3ZV4",
  authDomain: "cric-b0640.firebaseapp.com",
  projectId: "cric-b0640",
  storageBucket: "cric-b0640.appspot.com",
  messagingSenderId: "959795396143",
  appId: "1:959795396143:web:9476998dfc446d79f650da",
  measurementId: "G-86L20ZE9X5"
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


