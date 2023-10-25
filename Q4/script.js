const input = document.getElementById("input");

function SetCookie() {
  if (input.value == "") {
    alert("Enter some value!!");
    return;
  }

  document.cookie = "name=" + input.value;

  document.write("Setting Cookies : " + document.cookie);
}
