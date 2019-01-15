// Bring in audio
const audio = new Audio("tone.mp3");
const audio2 = new Audio("tone2.mp3");

//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

// Working on changing background color

var bk = document.getElementById("bodyBox");

var input = document.getElementById("Lightness");

var hueStart = "291";
var hueChange = "291";
var saturation = "76%";
var lightness = "53";

input.addEventListener("input", function() {
  lightness = document.getElementById("Lightness").value.toString() + "%";
  bk.style.backgroundColor =
    "hsl(" + hueChange + ", " + saturation + ", " + lightness + ")";
  console.log(parseInt(lightness));
  if (parseInt(lightness) > 70) {
    document.getElementById("about").style.color = "black";
    document.getElementById("shortkeys").style.color = "black";
    document.getElementById("startStop").style.color = "black";
    document.getElementById("reset").style.color = "black";
    document.getElementById("timer").style.color = "black";
    document.getElementById("30color").style.color = "black";
    document.getElementById("1color").style.color = "black";
    document.getElementById("wordLight").style.color = "black";
  } else {
    document.getElementById("about").style.color = "white";
    document.getElementById("shortkeys").style.color = "white";
    document.getElementById("startStop").style.color = "white";
    document.getElementById("reset").style.color = "white";
    document.getElementById("timer").style.color = "white";
    document.getElementById("30color").style.color = "white";
    document.getElementById("1color").style.color = "white";
    document.getElementById("wordLight").style.color = "white";
  }
});

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch() {
  seconds++;

  if (seconds == 30) {
    lightness = document.getElementById("Lightness").value.toString() + "%";
    hueChange =
      parseInt(hueChange) - Math.floor(Math.random() * (90 - 40 + 1) + 40);
    bk.style.backgroundColor =
      "hsl(" + hueChange + ", " + saturation + ", " + lightness + ")";

    if (document.getElementById("30seconds").checked) {
      audio2.play();
    }
  }

  //Logic to determine when to increment next value
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    lightness = document.getElementById("Lightness").value.toString() + "%";
    hueChange =
      parseInt(hueChange) - Math.floor(Math.random() * (90 - 40 + 1) + 40);
    bk.style.backgroundColor =
      "hsl(" + hueChange + ", " + saturation + ", " + lightness + ")";
    if (document.getElementById("1minute").checked) {
      audio.play();
    }

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  //If seconds/minutes/hours are only one digit, add a leading 0 to the value
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  //Display updated time values to user
  document.getElementById("timer").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
  if (status === "stopped") {
    //Start the stopwatch (by calling the setInterval() function)
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    status = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    status = "stopped";
  }
}

//Function to reset the stopwatch
function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}

function about() {
  alert(
    "This stopwatch was created for anyone to use free of charge. I hope that you enjoy it!"
  );
}

function shortkeys() {
  alert("spacebar = start/stop\nr = reset\nm = mute/unmute");
}
