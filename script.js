document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!email || !message) {
    alert("Please fill out both fields.");
    return;
  }

  alert(`Thanks for reaching out, ${email}! I’ll get back to you soon.`);
  document.getElementById("contactForm").reset();
});
