        let timer;
        let isRunning = false;
        let timeLeft = 25 * 60;
        const pomodoroDuration = 25 * 60;
        const breakDuration = 5 * 60;
        
        const timeDisplay = document.getElementById('pomodoro-time');
        const startButton = document.getElementById('start');
        const pomodoroButton = document.getElementById('pomodoro');
        const breakButton = document.getElementById('break');

        function updateDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        };

        function startTimer() {
            if (!isRunning) {
                isRunning = true;
                startButton.textContent = 'Stop';
                timer = setInterval(() => {
                    if (timeLeft > 0) {
                        timeLeft--;
                        updateDisplay();
                    } else {
                        clearInterval(timer);
                        resetTimer();
                    }
                }, 300);
            } else {
                stopTimer();
            }
        };

        function stopTimer() {
            clearInterval(timer);
            isRunning = false;
            startButton.textContent = 'Start';
        };

        function resetTimer() {
            clearInterval(timer);
            isRunning = false;
            timeLeft = pomodoroDuration;
            updateDisplay();
            startButton.textContent = 'Start';
        };

        function switchToPomodoro() {
            timeLeft = pomodoroDuration;
            updateDisplay();
            stopTimer();
        };

        function switchToBreak() {
            timeLeft = breakDuration;
            updateDisplay();
            stopTimer();
        };

        pomodoroButton.addEventListener('click', () => {
            breakButton.classList.add('active');
            pomodoroButton.classList.remove('active');
            switchToPo();
        });

        breakButton.addEventListener('click', () => {
            breakButton.classList.add('active');
            pomodoroButton.classList.remove('active');
            switchToBreak();
        });

        document.getElementById('reset').addEventListener('click', () => {
            resetTimer();
        });

        startButton.addEventListener('click', startTimer);
        updateDisplay();