const timer = document.querySelector('.timer');

const startBtn = document.querySelector('.start-stop');
const resetBtn = document.querySelector('.reset');

let milisec = 0;
let sec = 0;
let min = 0;
let hours = 0;

let start = false;

let index;

startClock = () => {

    milisec++;

    sec = Math.floor(milisec / 100);

    if (milisec > 99) {
        if (milisec % 100 < 10) {
            timer.textContent = sec + "." + "0" + (milisec % 100);
        }
        else {
            timer.textContent = sec + "." + (milisec % 100);
        }
    }
    else {
        timer.textContent = milisec;
    }
}


startBtn.addEventListener('click', () => {
    if (!start) {
        startBtn.style.backgroundColor = "#ff1212";
        startBtn.style.border = "5px solid #fcfcfc";

        index = setInterval(startClock, 10);

        setTimeout(() => {
            timer.style.color = "#fcfcfc";
        }, 10);

        start = true;
    }
    else {
        startBtn.style.backgroundColor = "#fcfcfc";
        startBtn.style.border = "5px solid #ff1212";
        timer.style.color = "#3b3b3b";

        clearInterval(index);
        start = false;
    }

});

resetBtn.addEventListener('click', () => {
    clearInterval(index);
    timer.textContent = "00 : 00 : 00"
    timer.style.color = "#3b3b3b";

    milisec = 0;
    start = false;
});

