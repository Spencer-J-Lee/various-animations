const handleSubmit = event => {
  event.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('.form');
  form.onsubmit = handleSubmit;
})
