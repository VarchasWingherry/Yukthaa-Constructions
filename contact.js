function validateForm() {
    // Hide all error messages
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("messageError").style.display = "none";
    document.getElementById("wordLimitError").style.display = "none";
  
    // Get the input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var isValid = true;
  
    // Check if name is empty
    if (name === "") {
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }
  
    // Check if email is empty
    if (email === "") {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }
  
    // Check if message is empty
    if (message === "") {
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    } else {
      // Check if the message exceeds 120 words
      var wordCount = message.split(/\s+/).length;  // Split by spaces to count words
      if (wordCount > 120) {
        document.getElementById("wordLimitError").style.display = "block";
        isValid = false;
      }
    }
  
    // Return false to prevent form submission if validation fails
    
    return isValid;
  }