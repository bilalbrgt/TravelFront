import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBHZkwBhSXiNchTnxfenfAfiRuGhdwb7ds",
  authDomain: "travelagency-e6d12.firebaseapp.com",
  databaseURL: "https://travelagency-e6d12.firebaseio.com",
  projectId: "travelagency-e6d12",
  storageBucket: "travelagency-e6d12.appspot.com",
  messagingSenderId: "61239446970",
  appId: "1:61239446970:web:79587161f9907a34e26183",
  measurementId: "G-N9P0X02987",
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  // inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // Connexion
  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // Déconnexion
  signoutUser = () => this.auth.signOut();

  // Récupérer le mot de passe
  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  // firestore
  user = (uid) => this.db.doc(`users/${uid}`);
}

export default Firebase;
