const form = document.getElementById("login-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value;

  if (!email || !password) {
    message.textContent = "Please enter your email and password.";
    return;
  }

  if (!form.email.checkValidity()) {
    message.textContent = "Please enter a valid email address.";
    return;
  }

  message.textContent = "Logged in (demo).";
});

document.querySelector('a[href="#forgot"]').addEventListener("click", (event) => {
  event.preventDefault();
  message.textContent = "Password reset is not connected yet.";
});

document.querySelector('a[href="#register"]').addEventListener("click", (event) => {
  event.preventDefault();
  message.textContent = "Registration is not connected yet.";
});
