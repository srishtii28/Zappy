// script.js
import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

window.signup = async function () {
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    message.textContent = "Signup successful! 🎉 Redirecting...";
    window.location.href = "chat.html"; // go to chat page
  } catch (error) {
    message.textContent = "❌ " + error.message;
  }
};

window.login = async function () {
  const email = emailInput.value;
  const password = passwordInput.value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    message.textContent = "Login successful! 🚀 Redirecting...";
    window.location.href = "chat.html";
  } catch (error) {
    message.textContent = "❌ " + error.message;
  }
};
