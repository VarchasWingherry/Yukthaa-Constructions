$(document).ready(function() {
    $('.fl-table').DataTable({
        "scrollX": true,  
        "responsive": true, 
        "autoWidth": false, 
        "paging": true,  
        "searching": true, 
        "ordering": true,  
        "lengthMenu": [10, 25, 50, 100], 
        "language": {
            "search": "Search:", 
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
document.getElementById("contactForm123").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let isValid = true;

    const nameInput = document.getElementById("fullName123");
    const phoneInput = document.getElementById("phoneNumber123");
    const emailInput = document.getElementById("emailAddress123");
    const roleSelect = document.getElementById("userRole123");
    const locationInput = document.getElementById("preferredLocation123");
    const areaInput = document.getElementById("landArea123");

    const nameError = document.getElementById("fullNameError123");
    const phoneError = document.getElementById("phoneError123");
    const emailError = document.getElementById("emailError123");
    const roleError = document.getElementById("userRoleError123");
    const locationError = document.getElementById("locationError123");
    const areaError = document.getElementById("landAreaError123");

    nameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    roleError.textContent = "";
    locationError.textContent = "";
    areaError.textContent = "";

    nameInput.classList.remove("error-border");
    phoneInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    roleSelect.classList.remove("error-border");
    locationInput.classList.remove("error-border");
    areaInput.classList.remove("error-border");

    if (!/^[A-Za-z\s]+$/.test(nameInput.value.trim())) {
        isValid = false;
        nameError.textContent = "Only letters and spaces are allowed";
        nameInput.classList.add("error-border");
    }

    if (!/^[6-9]\d{9}$/.test(phoneInput.value.trim())) {
        isValid = false;
        phoneError.textContent = "Enter a valid 10-digit phone number starting with 6-9";
        phoneInput.classList.add("error-border");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        isValid = false;
        emailError.textContent = "Enter a valid email address";
        emailInput.classList.add("error-border");
    }

    if (roleSelect.value === "") {
        isValid = false;
        roleError.textContent = "Please select your role";
        roleSelect.classList.add("error-border");
    }

    if (locationInput.value.trim() === "") {
        isValid = false;
        locationError.textContent = "Preferred location is required";
        locationInput.classList.add("error-border");
    }

    if (!/^\d+$/.test(areaInput.value.trim())) {
        isValid = false;
        areaError.textContent = "Only numbers are allowed for land area";
        areaInput.classList.add("error-border");
    }

    if (!isValid) {
        return;
    }

    alert("Form submitted successfully!");

    document.getElementById("contactForm123").reset();

    setTimeout(() => {
        nameInput.classList.remove("error-border");
        phoneInput.classList.remove("error-border");
        emailInput.classList.remove("error-border");
        roleSelect.classList.remove("error-border");
        locationInput.classList.remove("error-border");
        areaInput.classList.remove("error-border");
    }, 200);
});
