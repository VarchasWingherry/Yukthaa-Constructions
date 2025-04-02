function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("active");
}

//on clikng yuktha logo the hpme will navigate 
document.getElementById("yukthacont-logo").onclick = function() {
    window.location.href = "../html/yukthahome.html"; 
};

// on clcikng yutha name in footer the homr pahwe will navigate
document.getElementById("yukthaConstructionsfooter").onclick = function() {
    window.location.href = "../html/yukthahome.html"; 
};

// footer email addresss validation
function subscribeNewsletter() {
    const emailInput = document.getElementById("email-subscribe");
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailValue === "") {
      alert("Please enter an email address.");
      return;
    }

    if (!emailPattern.test(emailValue)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Subscription successful!");
    emailInput.value = ""; // Clear the input after successful subscription
  }