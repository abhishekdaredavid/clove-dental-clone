
function toggleFAQ(el) {
  const p = el.nextElementSibling;
  p.style.display = (p.style.display === "block") ? "none" : "block";
}
function submitForm(e) {
  e.preventDefault();
  alert("Thank you! Your appointment request has been submitted.");
}
