// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzgNpV6aFyjtDX6Ig9rgP8x2w647jWN5M",
    authDomain: "smart-crop-advisory-f3913.firebaseapp.com",
    projectId: "smart-crop-advisory-f3913",
    storageBucket: "smart-crop-advisory-f3913.firebasestorage.app",
    messagingSenderId: "231721730375",
    appId: "1:231721730375:web:a07c0b372e8b99ed27cc62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// inputs


// button
const login = document.getElementById('loginButton');
login.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Logging In...")
            window.location.href = "dashboard.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})