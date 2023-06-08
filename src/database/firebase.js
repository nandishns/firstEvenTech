// //import firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import * as firebase from "firebase/app";

// import "firebase/compat/firestore";
// import { getFirestore } from "firebase/firestore/lite";

// const firebaseConfig = {
//   apiKey: "AIzaSyDzS5ds2J363lXXkMuqMXHwDArAKAg4ZJw",
//   authDomain: "firsteventech-82f48.firebaseapp.com",
//   databaseURL: "https://firsteventech-82f48-default-rtdb.firebaseio.com",
//   projectId: "firsteventech-82f48",
//   storageBucket: "firsteventech-82f48.appspot.com",
//   messagingSenderId: "815492615592",
//   appId: "1:815492615592:web:5fc886a9382d0cd928a19d"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export { db };

import { initializeApp, firebase, apps } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const app = initializeApp({
  apiKey: "AIzaSyD70-Obef28F68I3AfsrUF9WFSBM_LC800",
  authDomain: "firsteventech-c3dea.firebaseapp.com",
  projectId: "firsteventech-c3dea",
  storageBucket: "firsteventech-c3dea.appspot.com",
  messagingSenderId: "567419134001",
  appId: "1:567419134001:web:b47c6a7792d404d506f510"
});

// Initialize Firebase

//const set=initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { app, db };
