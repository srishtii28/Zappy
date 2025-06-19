// firebase-config.js

// ✅ Correctly import Firebase modules via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ✅ Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDM_rolg6JxEcw4XMpRMSj94rw5XJ2-ED8",
    authDomain: "zappy-70df7.firebaseapp.com",
    projectId: "zappy-70df7",
    storageBucket: "zappy-70df7.firebasestorage.app",
    messagingSenderId: "384366834409",
    appId: "1:384366834409:web:5023ca36a697ef1fa57678",
    measurementId: "G-678QBY454K"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export them
export { auth, db };
