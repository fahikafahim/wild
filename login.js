var a = document.getElementById("loginBtn")
var b = document.getElementById("registerBtn")
var x = document.getElementById("login")
var y = document.getElementById("register")

function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}

function register() {
  x.style.left = "-520px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}



// Function to handle registration and store data in local storage
function Register() {
  // Get form input fields
  const firstName = document.getElementById('Firstname').value;
  const lastName = document.getElementById('Lastname').value;
  const email = document.querySelector('#register input[placeholder="Email"]').value;
  const password = document.querySelector('#register input[placeholder="Password"]').value;

  // You may want to add validation here to ensure all fields are filled correctly before proceeding

  // Check if localStorage is available
  if (typeof (Storage) !== "undefined") {
    // Retrieve existing user data from local storage or initialize an empty array
    let usersData = JSON.parse(localStorage.getItem('users')) || [];

    // Create an object to hold the new user data
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    // Add the new user data to the existing array of users
    usersData.push(newUser);

    // Store the updated user data back in local storage
    localStorage.setItem('users', JSON.stringify(usersData));

    // Optionally, you can clear the form fields after successful registration
    document.getElementById('Firstname').value = '';
    document.getElementById('Lastname').value = '';
    document.querySelector('#register input[placeholder="Email"]').value = '';
    document.querySelector('#register input[placeholder="Password"]').value = '';

    // Optionally, you can show a success message to the user
    alert('Registration successful!Please Login and Go To site');
    // document.getElementById("register").reset();
    // window.location.href = "./index.html"


    // For demonstration purposes, log the updated usersData array
    console.log(usersData);
  }

  else {
    alert('Sorry, your browser does not support local storage. Registration data cannot be saved.');
  }




}

// Function to handle login
function Login() {
  // Get form input fields
  const emailOrUsername = document.querySelector('#login input[placeholder="Username or Email"]').value;
  const password = document.querySelector('#login input[placeholder="Password"]').value;
  if (emailOrUsername === 'admin' && password === 'testpassword') {

    // Redirect or show a success message
    alert('Login successful');
    
    window.location.href = './dashboard.html';
    return;
  }
  else{
    alert('You are Not a admin');
  }



  // Check if localStorage is available
  if (typeof (Storage) !== "undefined") {
    // Retrieve user data from local storage
    const usersData = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by email or username
    const foundUser = usersData.find(user => (user.email === emailOrUsername || user.username === emailOrUsername));

    if (foundUser) {
      // User found, check password
      if (foundUser.password === password) {
        // Successful login
        alert('Login successful');
        document.getElementById("login").reset();
        window.location.href = "./userDashboard.html"
        // Redirect or perform further actions
      }


      else {
        // Incorrect password
        alert('Incorrect password. Please try again.');
      }

    } else {
      // User not found
      alert('User not found. Please sign up first.');
    }
  } else {
    // Local storage not available
    alert('Sorry, your browser does not support local storage. Login functionality is not available.');
  }
}

