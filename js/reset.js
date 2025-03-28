        function resetPassword() {
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const message = document.getElementById('message');

            // Password validation regex
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@])[A-Za-z\d@]{6,}$/;

            if (newPassword && confirmPassword) {
                if (newPassword === confirmPassword) {
                    if (passwordRegex.test(newPassword)) {
                        // Simulate API call
                        setTimeout(() => {
                            message.textContent = 'Your password has been successfully reset.';
                            message.style.color = 'green';
                        }, 1000);
                    } else {
                        message.textContent = 'Password must be at least 6 characters long, contain at least one uppercase letter, one number, and the special character @.';
                        message.style.color = 'red';
                    }
                } else {
                    message.textContent = 'Passwords do not match.';
                    message.style.color = 'red';
                }
            } else {
                message.textContent = 'Please fill in all fields.';
                message.style.color = 'red';
            }
        }

        // Toggle password visibility for confirm password
        const togglePassword = document.getElementById('togglePassword');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        togglePassword.addEventListener('click', () => {
            const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
            confirmPasswordInput.type = type;
            togglePassword.classList.toggle('fa-eye-slash');
        });
