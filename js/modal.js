document.addEventListener("DOMContentLoaded", function () {
    const quoteModal = document.getElementById("quoteModal");
    const quoteOpenBtn = document.getElementById("quoteGetBtn");
    const quoteCloseBtn = document.querySelector(".quote-close");
    const quoteForm = document.getElementById("quoteForm");

    // Open modal when clicking "Get Quote" button
    if (quoteOpenBtn) {
        quoteOpenBtn.addEventListener("click", function () {
            quoteModal.style.display = "flex";
        });
    }

    // Close modal when clicking the close button
    quoteCloseBtn.addEventListener("click", function () {
        quoteModal.style.display = "none";
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", function (event) {
        if (event.target === quoteModal) {
            quoteModal.style.display = "none";
        }
    });

    // Form validation
    quoteForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        let isValid = true;

        // Get field values
        let name = document.getElementById("quoteName").value.trim();
        let phone = document.getElementById("quotePhone").value.trim();
        let packageSelected = document.getElementById("quotePackage").value;
        let location = document.getElementById("quoteLocation").value.trim();
        let area = document.getElementById("quoteArea").value.trim();

        // Get error message elements
        let nameError = document.getElementById("nameError");
        let phoneError = document.getElementById("phoneError");
        let packageError = document.getElementById("packageError");
        let locationError = document.getElementById("locationError");
        let areaError = document.getElementById("areaError");
        let successMessage = document.getElementById("successMessage");

        // Clear previous error messages
        nameError.style.display = "none";
        phoneError.style.display = "none";
        packageError.style.display = "none";
        locationError.style.display = "none";
        areaError.style.display = "none";
        successMessage.style.display = "none";

        // Full Name Validation (Only letters and spaces, no numbers or special characters)
        if (!/^[A-Za-z\s]+$/.test(name) || name === "") {
            nameError.style.display = "block";
            nameError.textContent = "Please enter a valid full name (only letters and spaces).";
            isValid = false;
        }

        // Phone Number Validation (10 digits)
        if (!/^[6-9]\d{9}$/.test(phone)) {
            phoneError.style.display = "block";
            phoneError.textContent = "Please enter a valid 10-digit phone number starting with 6-9";
            isValid = false;
        }

        // Package Selection Validation
        if (!packageSelected) {
            packageError.style.display = "block";
            packageError.textContent = "Please select a package.";
            isValid = false;
        }

        // Location Validation (No leading spaces, allows letters, numbers, and spaces)
        if (!/^[A-Za-z0-9][A-Za-z0-9\s]*$/.test(location) || location === "") {
            locationError.style.display = "block";
            locationError.textContent = "Please enter a valid location (no leading spaces).";
            isValid = false;
        }

        // Land Area Validation (Only numbers)
        if (!/^\d+$/.test(area) || area === "") {
            areaError.style.display = "block";
            areaError.textContent = "Please enter a valid land area in square feet (only numbers).";
            isValid = false;
        }

        if (isValid) {
            successMessage.style.display = "block";
            successMessage.textContent = "Form submitted successfully!";
            quoteForm.submit(); // Submit the form if all validations pass
        }
    });
});

// submenu
const packagedetails=document.getElementsByClassName('details');
    for(i=0;i<packagedetails.length;i++){
        packagedetails[i].addEventListener('click',function(){
            this.classList.toggle('active');
        })
    }
