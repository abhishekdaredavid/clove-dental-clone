
function toggleFAQ(element) {
  const next = element.nextElementSibling;
  next.style.display = next.style.display === 'block' ? 'none' : 'block';
}
function submitForm(event) {
  event.preventDefault();
  alert('Thank you! We will contact you soon.');
}
