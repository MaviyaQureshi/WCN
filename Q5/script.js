const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

function handleSubmit() {
  if (
    username.value != "" &&
    password.value != "" &&
    password.value.length >= 8 &&
    email.value.includes("@")
  ) {
    alert("Login successful!!");
  }
  if (username.value == "") {
    alert("Enter username!");
  }
  if (password.value == "") {
    alert("Enter password!");
  }
  if (password.value.length < 8) {
    alert("Password must be atleast 8 characters");
  }
  if (email.value == "") {
    alert("Enter email");
  }
  if (!email.value.includes("@")) {
    alert("Invalid email!!");
  }
}
