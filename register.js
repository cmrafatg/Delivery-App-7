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
document
  .getElementById("register-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Retrieve form values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value; 

    // Add a new document in collection "users"
    // db.collection("users")
    //   .add({
    //     name: name,
    //     email: email,
    //     password: password, // not ok, will change
    //   })
    //   .then((docRef) => {
    //     console.log("Document written with ID: ", docRef.id);
    //     // Handle successful registration, e.g., redirect to login page
    //   })
    //   .catch((error) => {
    //     console.error("Error adding document: ", error);
    //     // Handle errors here, e.g., show error message to user
    //   });
  });