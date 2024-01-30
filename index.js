// Controlling the arrows; right & left
var move = 170;
var move2 = 300;

$('.back').on('click', function(e) {
    e.preventDefault();
    $('.carousel').animate({ scrollLeft: '-=' + move + 'px' });
});

$('.next').on('click', function(e) {
    e.preventDefault();
    $('.carousel').animate({ scrollLeft: '+=' + move + 'px' });
});

$('.backward').on('click', function(e) {
    e.preventDefault();
    $('.icon-menus').animate({ scrollLeft: '-=' + move2 + 'px' });
});

$('.forward').on('click', function(e) {
    e.preventDefault();
    $('.icon-menus').animate({ scrollLeft: '+=' + move2 + 'px' });
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

// Check Firebase Authentication State
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in, update mainbar
      const userName = user.displayName || 'User';
      $('.mainbar .menus').html(`
        <a href="#"><ion-icon name="home-outline"></ion-icon>Home</a>
        <a href="#"><ion-icon name="cart-outline"></ion-icon>Supermarkets</a>
        <a href="#"><ion-icon name="fast-food-outline"></ion-icon>Restaurants</a>
        <a href="#"><ion-icon name="information-outline"></ion-icon>Help</a>
        <span class="greeting">Hello, ${userName}!</span>
        <a href="#" id="logout-button"><ion-icon name="log-out-outline"></ion-icon>Logout</a>
      `);
    } else {
      // No user is signed in, show default mainbar
      $('.mainbar .menus').html(`
        <a href="#"><ion-icon name="home-outline"></ion-icon>Home</a>
        <a href="#"><ion-icon name="cart-outline"></ion-icon>Supermarkets</a>
        <a href="#"><ion-icon name="fast-food-outline"></ion-icon>Restaurants</a>
        <a href="login.html"><ion-icon name="log-in-outline"></ion-icon>Login</a>
        <a href="register.html"><ion-icon name="lock-closed-outline"></ion-icon>Sign Up</a>
        <a href="#"><ion-icon name="information-outline"></ion-icon>Help</a>
      `);
    }
});

//Logout handler
$(document).on('click', '#logout-button', function(e) {
    e.preventDefault();
    firebase.auth().signOut().then(() => {
        console.log("User logged out successfully");
        // Redirect to login page or do other things after logout
        window.location.href = 'login.html';
    }).catch((error) => {
        // Handle errors here
        console.log("Error logging out: ", error);
    });
});
