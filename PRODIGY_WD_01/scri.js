let startPauseBtn = document.getElementById('startPauseBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');
let display = document.getElementById('display');
let laps = document.getElementById('laps');

let timer;
let seconds = 0;
let isRunning = false;

function formatTime(s) {
    let hrs = Math.floor(s / 3600);
    let mins = Math.floor((s % 3600) / 60);
    let secs = s % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    display.innerHTML = formatTime(seconds);
}

function startPauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        startPauseBtn.innerHTML = 'Start';
    } else {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
        startPauseBtn.innerHTML = 'Pause';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    startPauseBtn.innerHTML = 'Start';
    seconds = 0;
    updateDisplay();
    laps.innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        let lapTime = formatTime(seconds);
        let lapItem = document.createElement('li');
        lapItem.innerHTML = lapTime;
        laps.appendChild(lapItem);
    }
}

startPauseBtn.addEventListener('click', startPauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', recordLap);
