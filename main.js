const btn = document.querySelector(".btn");
const alert = document.querySelector(".alert");
const form = document.querySelector(".action-form");

function alertEmail() {
  alert.classList.remove("hidden");
  form.classList.add("alert-red");
}
function remove() {
  alert.classList.add("hidden");
  form.classList.remove("alert-red");
}
btn.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  if (email.trim() === "") {
    email.placeholder = "example@email/com";
    alertEmail();
  } else {
    console.log(email);
    remove();
  }
});
