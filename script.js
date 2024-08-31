let timerInterval;
let timeLeft = 0;
let totalTime = 0;
let endTime;

document.getElementById('start').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    timeLeft = (hours * 3600) + (minutes * 60) + seconds;
    totalTime = timeLeft;

    if (timeLeft > 0) {
        clearInterval(timerInterval);
        endTime = Date.now() + timeLeft * 1000;
        updateTimer(); // Update immediately to show the correct start time
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert('Time is up!');
            }
        }, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    clearInterval(timerInterval);
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(timerInterval);
    timeLeft = 0;
    document.getElementById('timer-display').textContent = '00:00:00';
    document.getElementById('progress-bar').style.width = '0%';
});

function updateTimer() {
    let hours = Math.floor(timeLeft / 3600);
    let minutes = Math.floor((timeLeft % 3600) / 60);
    let seconds = timeLeft % 60;

    document.getElementById('timer-display').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    let progress = ((totalTime - timeLeft) / totalTime) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

