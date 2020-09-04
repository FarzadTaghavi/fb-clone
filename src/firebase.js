import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArUMqHyfIwecrf95zGsWMiUJIzW3PgQns",
  authDomain: "fb-clone-3d6c6.firebaseapp.com",
  databaseURL: "https://fb-clone-3d6c6.firebaseio.com",
  projectId: "fb-clone-3d6c6",
  storageBucket: "fb-clone-3d6c6.appspot.com",
  messagingSenderId: "32251324831",
  appId: "1:32251324831:web:0ef7b124af11882bce75aa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
