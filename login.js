const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


//  Form validation for Sign Up
const form = document.getElementsByClassName('sign-up-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const otp = document.getElementById('otp').value;

  if (validateName(name) && validateEmail(email) && validatePhone(phone) && validateOTP(otp)) {
    // Form is valid, submit it to the server
    form.submit();
  }
});

function validateName(name) {
  // Check if name is not empty
  if (name.trim() === '') {
    alert('Name is required');
    return false;
  }

  // Check if name contains only letters and spaces
  const regex = /^[a-zA-Z\s]+$/;
  if (!regex.test(name)) {
    alert('Name must contain only letters and spaces');
    return false;
  }

  return true;
}

function validateEmail(email) {
  // Check if email is not empty
  if (email.trim() === '') {
    alert('Email is required');
    return false;
  }

  // Check if email is valid
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!regex.test(email)) {
    alert('Email is not valid');
    return false;
  }

  return true;
}

function validatePhone(phone) {
  // Check if phone is not empty
  if (phone.trim() === '') {
    alert('Phone is required');
    return false;
  }

  // Check if phone is 10 digits
  if (phone.length !== 10) {
    alert('Phone must be 10 digits');
    return false;
  }

  // Check if phone contains only numbers
  const regex = /^\d+$/;
  if (!regex.test(phone)) {
    alert('Phone must contain only numbers');
    return false;
  }

  return true;
}

function validateOTP(otp) {
  // Check if OTP is not empty
  if (otp.trim() === '') {
    alert('OTP is required');
    return false;
  }

  // Check if OTP is 6 digits
  if (otp.length !== 6) {
    alert('OTP must be 6 digits');
    return false;
  }

  // Check if OTP contains only numbers
  const regex = /^\d+$/;
  if (!regex.test(otp)) {
    alert('OTP must contain only numbers');
    return false;
  }

  return true;
}

