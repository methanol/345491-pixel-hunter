const ONE_SECOND = 1000;
const START_TIME = 30;


export default class Timer {
  constructor(time, updateTimer = () => 1, goNext = () => 1) {
    this.currentTime = time;
    this.timer = {};
    this.updateTimer = updateTimer;
    this.goNext = goNext;

    if (typeof (this.currentTime) !== `number`) {
      throw new Error(`type of time should be number`);
    }
  }

  tick() {
    if (this.currentTime > 0) {
      this.currentTime -= 1;
      this.updateTimer(this.time);
    } else {
      this.goNext();
      this.currentTime = START_TIME;
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
