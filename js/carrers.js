document.getElementById('connect-name').addEventListener('input', function(event) {
    let value = event.target.value;
            value = value.replace(/[^a-zA-Z\s]/g, '');

            if (value.startsWith(' ')) {
                value = value.slice(1);
            }

            event.target.value = value;
});
document.getElementById('connect-email').addEventListener('input', function(event) {
    let value = event.target.value;
    
    value = value.replace(/[^a-zA-Z0-9@._-]/g, '');

    if (value.startsWith(' ')) {
        value = value.slice(1);
    }

    event.target.value = value;
});
document.getElementById('connect-phone').addEventListener('input', function(event) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
});
function validateForm() {
    let isValid = true;

    // Hide all error messages initially
    document.querySelectorAll('.error-message').forEach(function(errorMsg) {
      errorMsg.style.display = 'none';
    });

    // Check Full Name
    let name = document.getElementById('connect-name').value;
    if (name.trim() === '') {
      document.getElementById('name-error').style.display = 'block';
      isValid = false;
    }

    // Check Email
    let email = document.getElementById('connect-email').value;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|in)$/; // Regex to validate email with @ and domain ending with .com or .in
    if (email.trim() === '') {
      document.getElementById('email-error').style.display = 'block';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById('email-format-error').style.display = 'block';
      isValid = false;
    }

    // Check Subject
    let subject = document.getElementById('connect-subject').value;
    if (subject.trim() === '') {
      document.getElementById('subject-error').style.display = 'block';
      isValid = false;
    }

    // Check Phone (10 digits)
    let phone = document.getElementById('connect-phone').value;
    let phoneRegex = /^[6-9]\d{9}$/; // Regex to match phone number starting with 6, 7, 8, or 9 and followed by 9 digits
    if (phone.trim() === '') {
      document.getElementById('phone-error').style.display = 'block';
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      document.getElementById('phone-format-error').style.display = 'block';
      isValid = false;
    }


    // Check File Upload
    let file = document.getElementById('connect-file').value;
    if (file === '') {
      document.getElementById('file-error').style.display = 'block';
      isValid = false;
    }

    // Check Message Length (1 to 120 words)
    let message = document.getElementById('message').value;
    let wordCount = message.trim().split(/\s+/).length;

    if (message.trim() === '') {
      document.getElementById('message-error').style.display = 'block';
      isValid = false;
    } else if (wordCount < 1 || wordCount > 120) {
      document.getElementById('message-word-error').style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      // Submit the form if everything is valid (you can replace this with actual form submission logic)
      alert('Form submitted successfully!');
      document.getElementById("connect-with-us").reset()
    }
}
