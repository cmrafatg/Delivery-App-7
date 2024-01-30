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

const auth = firebase.auth();

// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      // Login successful, redirect to index.html
      window.location.href = 'index.html';
    })
    .catch((error) => {
      // Handle errors, such as incorrect email or password
      alert(error.message); // Or display in HTML
    });
});
