let tempOTP = "123456"; // Temporary OTP for validation
let resendTimeout;

function openModal() {
    document.getElementById('forpwdForgotPasswordModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('forpwdForgotPasswordModal').style.display = 'none';
}

function getOTP() {
    const email = document.getElementById('forpwd-email').value;
    const messageElement = document.getElementById('forpwd-message');

    // Regex to check if email ends with @gmail.com
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (email && emailRegex.test(email)) {
        messageElement.textContent = 'An OTP has been sent to your email.';
        messageElement.style.color = 'green';

        // Show OTP input section
        document.getElementById('otp-section').style.display = 'block';

        // Reset resend button
        document.getElementById('resend-otp-btn').disabled = true;
        clearTimeout(resendTimeout);
        resendTimeout = setTimeout(() => {
            document.getElementById('resend-otp-btn').disabled = false;
        }, 60000); // Enable resend button after 1 minute
    } else {
        messageElement.textContent = 'Please enter a valid Gmail address.';
        messageElement.style.color = 'red';
    }
}

function verifyOTP() {
    const otpInput = document.getElementById('otp-input').value;
    const messageElement = document.getElementById('forpwd-message');
    const resetLink = document.getElementById('reset-password-link');

    if (otpInput === tempOTP) {
        messageElement.textContent = 'OTP Verified!';
        messageElement.style.color = 'green';

        // Show reset password link
        resetLink.style.display = 'block';
    } else {
        messageElement.textContent = 'Invalid OTP. Please try again.';
        messageElement.style.color = 'red';

        // Hide reset password link if previously shown
        resetLink.style.display = 'none';
    }
}

function resendOTP() {
    const messageElement = document.getElementById('forpwd-message');
    document.getElementById('resend-otp-btn').disabled = true;

    messageElement.textContent = 'A new OTP has been sent to your email.';
    messageElement.style.color = 'green';

    // Reset resend button timer
    clearTimeout(resendTimeout);
    resendTimeout = setTimeout(() => {
        document.getElementById('resend-otp-btn').disabled = false;
    }, 60000); // Enable resend button after 1 minute
}

// Close modal if user clicks outside of the modal content
window.onclick = function (event) {
    const modal = document.getElementById('forpwdForgotPasswordModal');
    if (event.target === modal) {
        closeModal();
    }
};