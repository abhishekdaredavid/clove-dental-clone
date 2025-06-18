
function toggleFAQ(el) {
  const para = el.nextElementSibling;
  para.style.display = para.style.display === "block" ? "none" : "block";
}
function submitForm(e) {
  e.preventDefault();
  alert("Appointment booked successfully!");
}
