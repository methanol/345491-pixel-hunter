function CreateTimer(time) {
  let currentTime = time;

  if (typeof (currentTime) !== `number`) {
    throw new Error(`type of time should be number`);
  }

  this.tick = function () {
    if (currentTime > 0) {
      currentTime -= 1;
    }
  };

  this.showTime = function () {
    return currentTime;
  };
}

export default CreateTimer;
