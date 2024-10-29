// Les variables de timer 
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var time = document.getElementById("time");
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var interval;
var timer;

// Lancement de l'evenement du button start
start.addEventListener("click", function () {
    interval = setInterval(function () {
        milliseconds++;
        if (milliseconds == 100) {
            seconds++;
            milliseconds = 0;
        }
        if (seconds == 60) {
            timer = new Audio("detector-69477.mp3");
            timer.play();
            setTimeout(function () {
                timer.pause();
            }, 3000);
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            hours++;
            minutes = 0;
        }
        time.innerHTML = "0" + hours + ":" + "0" + minutes + ":" + "0" + seconds + ":" + milliseconds;
    }, 10);
});

// Stop de timer 
stop.addEventListener("click", function () {
    clearInterval(interval);
});
// Reset de timer 
reset.addEventListener("click", function () {
    time.innerHTML = "00:00:00:00";
    milliseconds = 0;
    seconds = 0;
    minutes = 0; 
    hours = 0;
});