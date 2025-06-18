
function toggleFAQ(el) {
  const p = el.nextElementSibling;
  p.style.display = (p.style.display === "block") ? "none" : "block";
}
function submitForm(e) {
  e.preventDefault();
  alert("Appointment submitted. Our team will contact you soon!");
}
