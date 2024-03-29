// JavaScript to handle tab switching
const loginTab = document.getElementById("login-tab");
const registerTab = document.getElementById("register-tab");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

registerTab.addEventListener("click", () => {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  loginTab.classList.remove("active");
  registerTab.classList.add("active");
});

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmiPs-mcIHXysDo1dMPOScrAHyCZK4vQQ",
  authDomain: "davids-food.firebaseapp.com",
  databaseURL: "https://davids-food-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "davids-food",
  storageBucket: "davids-food.appspot.com",
  messagingSenderId: "1096704578239",
  appId: "1:1096704578239:web:9d5ae683f1b35fd5cd2c0a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.database();

// Handle form submission
document.getElementById("register-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPassword = e.target.confirmPassword.value;

  if (password !== confirmPassword) {
      document.getElementById('error-message').textContent = 'Passwords do not match.';
      return;
  }

  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Set the user's display name
    return userCredential.user.updateProfile({
      displayName: e.target.name.value
    }).then(() => userCredential); // Return userCredential for the next then block
  })
  .then((userCredential) => {
    // Handle registration success
    console.log("Registration successful with email:", userCredential.user.email);
    window.location.href = 'index.html';
  })
  .catch((error) => {
    // Handle errors
    document.getElementById('error-message').textContent = error.message;
  });
});
