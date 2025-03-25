$(document).ready(function() {
    $('.fl-table').DataTable({
        "scrollX": true,  // Enables horizontal scrolling
        "responsive": true, // Makes it responsive
        "autoWidth": false, // Prevents width issues
        "paging": true,  // Enables pagination
        "searching": true,  // Enables search box
        "ordering": true,  // Enables sorting
        "lengthMenu": [10, 25, 50, 100], // Dropdown for selecting number of entries
        "language": {
            "search": "Search:", // Custom search label
            "lengthMenu": "Show _MENU_ entries",
            "paginate": {
                "first": "First",
                "last": "Last",
                "next": "Next",
                "previous": "Previous"
            }
        }
    });
});


// validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Get form elements
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const roleSelect = document.getElementById("role");
    const locationInput = document.getElementById("location");
    const areaInput = document.getElementById("area");

    // Get error message elements
    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const roleError = document.getElementById("roleError");
    const locationError = document.createElement("small");
    const areaError = document.createElement("small");

    // Reset error messages
    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    roleError.textContent = "";
    locationError.textContent = "";
    areaError.textContent = "";

    // Reset error borders
    nameInput.classList.remove("error-border");
    phoneInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    roleSelect.classList.remove("error-border");
    locationInput.classList.remove("error-border");
    areaInput.classList.remove("error-border");

    // Name Validation (Only Text)
    if (nameInput.value.trim() === "" || !/^[A-Za-z\s]+$/.test(nameInput.value)) {
        isValid = false;
        nameError.textContent = "Only letters and spaces are allowed";
        nameInput.classList.add("error-border");
    }

    // Phone Validation (Only 10 Digits)
    if (phoneInput.value.trim() === "" || !/^\d{10}$/.test(phoneInput.value)) {
        isValid = false;
        phoneError.textContent = "Enter a valid 10-digit phone number";
        phoneInput.classList.add("error-border");
    }

    // Email Validation (Basic Format Check)
    if (emailInput.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        isValid = false;
        emailError.textContent = "Enter a valid email address";
        emailInput.classList.add("error-border");
    }

    // Role Selection Validation
    if (roleSelect.value === "") {
        isValid = false;
        roleError.textContent = "Please select your role";
        roleSelect.classList.add("error-border");
    }

    // Location Validation (Mandatory)
    if (locationInput.value.trim() === "") {
        isValid = false;
        locationError.textContent = "Preferred location is required";
        locationError.classList.add("error-message");
        locationInput.classList.add("error-border");
        locationInput.parentNode.appendChild(locationError);
    }

    // Land Area Validation (Mandatory)
    if (areaInput.value.trim() === "") {
        isValid = false;
        areaError.textContent = "Land area is required";
        areaError.classList.add("error-message");
        areaInput.classList.add("error-border");
        areaInput.parentNode.appendChild(areaError);
    }

    // Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault();
    }
});
