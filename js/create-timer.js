const ONE_SECOND = 1000;

function updateTimer(time) {
  let timeBox = document.querySelector(`.game__timer`);
  timeBox.textContent = time;
}

export default class CreateTimer {
  constructor(time) {
    this.currentTime = time;
    this.timer = {};

    if (typeof (this.currentTime) !== `number`) {
      throw new Error(`type of time should be number`);
    }
  }

  tick() {
    if (this.currentTime > 0) {
      this.currentTime -= 1;
      updateTimer(this.time);
    }
  }

  get time() {
    return this.currentTime;
  }

  startTimer() {
    this.timer = setTimeout(() => {
      this.tick();
      this.startTimer();
    }, ONE_SECOND);
  }

  stopTimer() {
    clearTimeout(this.timer);
  }
}
