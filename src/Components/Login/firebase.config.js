// const firebaseConfig = {
//     apiKey: "AIzaSyBBJxOdgEU3jikKzV1wbUkApNFmSsBv4rs",
//     authDomain: "aparment-a85a0.firebaseapp.com",
//     databaseURL: "https://aparment-a85a0.firebaseio.com",
//     projectId: "aparment-a85a0",
//     storageBucket: "aparment-a85a0.appspot.com",
//     messagingSenderId: "490000607109",
//     appId: "1:490000607109:web:03cee85d9cee556fe486ec"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
  // export default firebaseConfig;

  import firebase from "firebase";

const config = firebase.initializeApp({
  apiKey: "AIzaSyBBJxOdgEU3jikKzV1wbUkApNFmSsBv4rs",
  authDomain: "aparment-a85a0.firebaseapp.com",
  databaseURL: "https://aparment-a85a0.firebaseio.com",
  projectId: "aparment-a85a0",
  storageBucket: "aparment-a85a0.appspot.com",
  messagingSenderId: "490000607109",
  appId: "1:490000607109:web:03cee85d9cee556fe486ec"
});

export const auth = firebase.auth();
export const storage = firebase.storage();

export default config;