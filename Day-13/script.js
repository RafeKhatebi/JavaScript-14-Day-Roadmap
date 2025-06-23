// This script handles the login form submission and localStorage operations
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const message = document.getElementById('message');

  // Load stored data if available
  const storedName = localStorage.getItem('name');
  const storedEmail = localStorage.getItem('email');

  if (storedName && storedEmail) {
    message.textContent = `Welcome back, ${storedName} (${storedEmail})!`;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
      alert('Both fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Store in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    message.textContent = `Welcome, ${name} (${email})! Data saved in localStorage.`;

    // Clear form
    form.reset();
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
