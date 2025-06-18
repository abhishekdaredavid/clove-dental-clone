
function toggleFAQ(element) {
  const next = element.nextElementSibling;
  if (next.style.display === "block") {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }
}

function scrollToForm() {
  const form = document.getElementById('contact');
  form.scrollIntoView({ behavior: 'smooth' });
}
