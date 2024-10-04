// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  var username= document.getElementById('Username').value;
  var surname = document.getElementById('Surname').value;
  var password = document.getElementById('Password').value;

  // Define allowed credentials (replace with your actual credentials)
  var allowedCredentials = [
    { username: 'Fadil', surname: 'Tabaare', password: 'Pass@Word#' },
    { username: 'Nadia', surname: 'Ibrahim', password: 'Nadilfav' }
  ];

  // Check if entered credentials match any allowed credentials
  var isValid = allowedCredentials.some(function(cred) {
    return cred.username === username && cred.surname === surname && cred.password === password;
  });

  if (isValid) {
    // Redirect to another page upon successful validation
    window.location.href = 'Text.html'; // Change to your actual welcome page URL
  } else {
    alert('Invalid username, surname, or password. Please try again.');
  }
});
  