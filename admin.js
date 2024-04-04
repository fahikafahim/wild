// Retrieve registered users from local storage
let registeredUsers = JSON.parse(localStorage.getItem('registere')) || [];

// Display registered users on the admin page
let usersContainer = document.getElementById('registeredUsersContainer');
if (registere.length > 0) {
    usersContainer.innerHTML = '<h3>Registered Users:</h3>';
    registere.forEach(function(user) {
        usersContainer.innerHTML += '<p>Username: ' + user.username + ', Password: ' + user.password + '</p>';
    });
} else {
    usersContainer.innerHTML = '<p class="no-users-message">No registered users yet.</p>';
}
