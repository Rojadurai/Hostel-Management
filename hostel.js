// Login functionality
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "" || password === "") {
    alert('Please fill out both username and password fields.');
  } else {
    alert(`Welcome back, ${username}!`);
  }
}

// Registration functionality
function register() {
  const regUsername = document.getElementById('regUsername').value;
  const regEmail = document.getElementById('regEmail').value;
  const regPassword = document.getElementById('regPassword').value;

  if (regUsername === "" || regEmail === "" || regPassword === "") {
    alert('Please complete all registration fields.');
  } else {
    alert(`Registration successful! Welcome, ${regUsername}!`);
  }
}

// Dynamically updating room availability (Example feature)
function updateRoomAvailability() {
  const roomsAvailable = 5; // Example: Number of available rooms
  document.getElementById('roomStatus').textContent = `Rooms Available: ${roomsAvailable}`;
}

// Example: Run function on page load
document.addEventListener('DOMContentLoaded', function() {
  updateRoomAvailability();
});
