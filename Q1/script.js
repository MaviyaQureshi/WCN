clock = document.getElementById("clock");

function currentTime() {
  let date = new Date();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let sec = date.getSeconds();

  let sesh = "AM";

  if (hour >= 12) {
    sesh = "PM";
    if (hour > 12) {
      hour = hour - 12;
    }
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  sec = sec < 10 ? "0" + sec : sec;

  let time = hour + ":" + minutes + ":" + sec + " " + sesh;

  clock.innerText = time;

  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}

currentTime();
