const clock = document.getElementById("clock");

//Digital Clock

setInterval(function () {
  let date = new Date();
  let time = date.toLocaleTimeString();
  let dataString = date.toLocaleDateString();

  clock.innerHTML = `${dataString} <br> ${time}`;
}, 1000);
