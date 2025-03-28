document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".sign-in-form");
  const loginButton = document.querySelector(".btn.solid");
  const passwordInput = document.getElementById("signInPassword");
  const togglePassword = document.getElementById("togglePassword");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("signInEmail").value.trim();
    const password = passwordInput.value.trim();

    let isValid = true;

    // Validate Email
    if (!validateEmail(email)) {
      isValid = false;
    }

    // Validate Password
    if (!validatePassword(password)) {
      isValid = false;
    }

    // Submit form if valid
    if (isValid) {
      document.getElementById("successMessage").textContent = "Login successful!";
      document.getElementById("successMessage").style.color = "green";
      loginForm.submit();
    }
  });

  // Toggle password visibility
  togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.classList.remove("fa-eye");
      togglePassword.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      togglePassword.classList.remove("fa-eye-slash");
      togglePassword.classList.add("fa-eye");
    }
  });

  function validateEmail(email) {
    const errorElement = document.getElementById("emailError");
    errorElement.textContent = "";

    if (email === "") {
      errorElement.textContent = "Email is required.";
      return false;
    }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
      errorElement.textContent = "Enter a valid email address.";
      return false;
    }

    return true;
  }

  function validatePassword(password) {
    const errorElement = document.getElementById("passwordError");
    errorElement.textContent = "";

    if (password === "") {
      errorElement.textContent = "Password is required.";
      return false;
    }

    if (password.length < 6) {
      errorElement.textContent = "Password must be at least 6 characters.";
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      errorElement.textContent = "Password must contain at least one uppercase letter.";
      return false;
    }

    if (!/[a-z]/.test(password)) {
      errorElement.textContent = "Password must contain at least one lowercase letter.";
      return false;
    }

    if (!/\d/.test(password)) {
      errorElement.textContent = "Password must contain at least one number.";
      return false;
    }

    if (!/[!@#$%^&*]/.test(password)) {
      errorElement.textContent = "Password must contain at least one special character (!@#$%^&*).";
      return false;
    }

    return true;
  }
});
