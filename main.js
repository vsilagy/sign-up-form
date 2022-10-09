const form = document.querySelector(".form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.querySelector(".error-message");

password.addEventListener("focusin", () => {
  errorMessage.textContent = "";
  password.classList.remove("error");
  confirmPassword.classList.remove("error");
});

confirmPassword.addEventListener("focusout", () => {
  if (
    confirmPassword.value !== "" &&
    confirmPassword.value === password.value
  ) {
    errorMessage.textContent = "";
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
  } else if (confirmPassword.value !== password.value) {
    errorMessage.textContent = "* Passwords do not match";
    password.classList.add("error");
    confirmPassword.classList.add("error");
  }
});
