const form = document.querySelector("#submit");
const submitButton = document.querySelector("#submitBtn");

form.addEventListener("submit", (e) => {
  console.log("this works");
  submitButton.disabled = true;
  e.preventDefault();
  window.location.href = window.location.origin + "/success.html";
});
