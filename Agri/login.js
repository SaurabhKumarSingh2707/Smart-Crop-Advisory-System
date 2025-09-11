// login.js - AgriTech Login Page

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('loginMessage');

    // Simple demo validation (replace with real authentication logic)
    if (username === 'admin' && password === 'admin123') {
        messageDiv.style.color = '#2e7d32';
        messageDiv.textContent = 'Login successful!';
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1200);
    } else {
        messageDiv.style.color = '#d32f2f';
        messageDiv.textContent = 'Invalid username or password.';
    }
});
