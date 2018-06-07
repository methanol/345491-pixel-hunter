import {assert} from 'chai';

function CreateTimer(time) {

  let currentTime = time;

  this.tick = function () {
    if (typeof (currentTime) !== `number`) {
      throw new Error(`type of time should be number`);
    }
    if (currentTime > 0) {
      currentTime -= 1;
    }
  };

  this.showTime = function () {
    if (typeof (currentTime) !== `number`) {
      throw new Error(`type of time should be number`);
    }
    return currentTime;
  };
}

const timer3 = new CreateTimer(7);

const timer4 = new CreateTimer(`abcd`);

describe(`timer counting`, () => {

  it(`set timer from 7 to 0`, () => {
    timer3.tick();
    timer3.tick();
    assert.equal(timer3.showTime(), 5);
    timer3.tick();
    timer3.tick();
    timer3.tick();
    assert.equal(timer3.showTime(), 2);
    timer3.tick();
    timer3.tick();
    assert.equal(timer3.showTime(), 0);
    timer3.tick();
    assert.equal(timer3.showTime(), 0);
  });

  it(`incorrect number`, () => {
    assert.throws(() => timer4.showTime(), /type of time should be number/);
  });

});
