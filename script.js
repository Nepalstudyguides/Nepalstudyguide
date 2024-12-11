// script.js

// Simulated user data for validation
const validUsername = "user123";
const validPassword = "password123";

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password match the valid credentials
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.location.href = "welcome.html"; // Redirect to another page (optional)
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password. Please try again.";
    }
});
// script.js

// Function to trigger the alert when the button is clicked
document.getElementById("alertButton").addEventListener("click", function() {
    alert("Hello! You've clicked the button.");
});
