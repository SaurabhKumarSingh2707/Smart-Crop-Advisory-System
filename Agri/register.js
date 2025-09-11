// register.js - AgriTech Register Page

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const messageDiv = document.getElementById('registerMessage');

    // Simple demo validation (replace with real registration logic)
    if (username && email && password) {
        messageDiv.style.color = '#2e7d32';
        messageDiv.textContent = 'Registration successful! You can now login.';
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    } else {
        messageDiv.style.color = '#d32f2f';
        messageDiv.textContent = 'Please fill all fields.';
    }
});
