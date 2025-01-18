

const timer = {
  timeDisplay: document.querySelector('.time p'),
  controls: {
    increaseMinutes: document.querySelector('.increase-minutes'),
    decreaseMinutes: document.querySelector('.decrease-minutes'),
    increaseSeconds: document.querySelector('.increase-seconds'),
    decreaseSeconds: document.querySelector('.decrease-seconds'),
    startButton: document.querySelector('.start-timer'),
  },
  countdown: null, 
  timeRemaining: 15 * 60, 
  
  updateDisplay() {
    const minutes = Math.floor(this.timeRemaining / 60);
    const seconds = this.timeRemaining % 60;
    this.timeDisplay.textContent = `⏱ ${minutes}:${seconds.toString().padStart(2, '0')}`;
  },

 adjustTime(amount) {
    const newTime = this.timeRemaining + amount;
    if (newTime >= 0) {
      this.timeRemaining = newTime;
      this.updateDisplay();
    }
  },

  start() {
    if (this.timeRemaining <= 0) {
      alert('Please set a time before starting!');
      return;
    }

    clearInterval(this.countdown);

    const endTime = Date.now() + this.timeRemaining * 1000;

    this.countdown = setInterval(() => {
      this.timeRemaining = Math.max(0, Math.round((endTime - Date.now()) / 1000));
      this.updateDisplay();

      if (this.timeRemaining <= 0) {
        clearInterval(this.countdown);
        alert('Time is up!');
      }
    }, 1000);
  },

  init() {
    this.controls.increaseMinutes.addEventListener('click', () => this.adjustTime(60));
    this.controls.decreaseMinutes.addEventListener('click', () => this.adjustTime(-60));
    this.controls.increaseSeconds.addEventListener('click', () => this.adjustTime(10));
    this.controls.decreaseSeconds.addEventListener('click', () => this.adjustTime(-10));
    this.controls.startButton.addEventListener('click', () => this.start());
    this.updateDisplay();
  },
};

timer.init();
