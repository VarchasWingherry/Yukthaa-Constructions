document.addEventListener("DOMContentLoaded", function () {
  const quoteModal = document.getElementById("quoteModal");
  const quoteOpenBtn = document.getElementById("quoteGetBtn");
  const quoteCloseBtn = document.querySelector(".quote-close");

  // Open modal when clicking "Get Quote" button
  quoteOpenBtn.addEventListener("click", function () {
      quoteModal.style.display = "flex";
  });

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
});
