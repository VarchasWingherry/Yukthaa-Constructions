var modal = document.getElementById("quoteModal");

var btn = document.getElementById("getQuoteBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("quoteForm").onsubmit = function(event) {
  event.preventDefault(); 
  
  var formData = new FormData(this);
  
  
  console.log("Form submitted with data:", formData);
  
  
  modal.style.display = "none";
}
