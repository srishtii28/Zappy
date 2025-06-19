import { auth, db } from "./firebase-config.js";
import {
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// DOM elements
const logoutBtn = document.getElementById("logoutBtn");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const chatBox = document.getElementById("chatBox");

// Reference to messages collection
const messagesRef = collection(db, "messages");

// Show messages in real time
const q = query(messagesRef, orderBy("timestamp"));
onSnapshot(q, (snapshot) => {
  chatBox.innerHTML = "";
  snapshot.forEach((doc) => {
    const data = doc.data();
    const msg = document.createElement("div");
    msg.classList.add("chat-message");
    if (auth.currentUser && data.uid === auth.currentUser.uid) {
      msg.classList.add("self");
    }
    msg.textContent = `${data.email}: ${data.text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});

// Send message
sendBtn.addEventListener("click", async () => {
  const text = messageInput.value.trim();
  if (text === "") return;

  await addDoc(messagesRef, {
    text,
    email: auth.currentUser.email,
    uid: auth.currentUser.uid,
    timestamp: serverTimestamp()
  });

  messageInput.value = "";
});

// Logout
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});

// Redirect to login if user is not logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});
