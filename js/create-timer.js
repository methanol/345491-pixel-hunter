const ONE_SECOND = 1000;

export default class CreateTimer {
  constructor(time, updateTimer = () => 1) {
    this.currentTime = time;
    this.timer = {};
    this.updateTimer = updateTimer;

    if (typeof (this.currentTime) !== `number`) {
      throw new Error(`type of time should be number`);
    }
  }

  tick() {
    if (this.currentTime > 0) {
      this.currentTime -= 1;
      this.updateTimer(this.time);
    } /* else {
      this.stopTimer();
      new ScreenRouter(gameScreens.shift()).switchScreen();
    }*/
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
