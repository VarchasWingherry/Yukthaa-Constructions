// code for forget pass modal pop up
function openModal() {
    document.getElementById('forpwdForgotPasswordModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('forpwdForgotPasswordModal').style.display = 'none';
}

function sendResetLink() {
    const email = document.getElementById('forpwd-email').value;
    const messageElement = document.getElementById('forpwd-message');

    // Regex to check if email ends with @gmail.com
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (email && emailRegex.test(email)) {
        // Placeholder for actual reset link logic
        messageElement.textContent = 'A reset link has been sent to your email.';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Please enter a valid Gmail address.';
        messageElement.style.color = 'red';
    }
}

// Close modal if user clicks outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('forpwdForgotPasswordModal');
    if (event.target === modal) {
        closeModal();
    }
};
