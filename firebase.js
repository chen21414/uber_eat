import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6r3Uz3Qnysio35LqMpRbQpgzjlwjzOso",
  authDomain: "uber-eats-clone-d6563.firebaseapp.com",
  projectId: "uber-eats-clone-d6563",
  storageBucket: "uber-eats-clone-d6563.appspot.com",
  messagingSenderId: "434999865000",
  appId: "1:434999865000:web:60b1ca7fc4ea330dc8dc9d"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
