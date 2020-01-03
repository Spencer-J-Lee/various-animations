const toggleChecked = checkbox => {
  checkbox.checked = checkbox.checked ? false : true;
};

document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.querySelector('.trigger');
  const checkbox = document.querySelector('.toggle');
  trigger.onclick = () => toggleChecked(checkbox);
});
