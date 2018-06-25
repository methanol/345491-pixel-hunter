import {assert} from 'chai';
import CreateTimer from '.././create-timer.js';

describe(`timer counting`, () => {

  it(`set timer from 7 to 0`, () => {
    const timer3 = new CreateTimer(7);
    timer3.tick();
    timer3.tick();
    assert.equal(timer3.time, 5);
    timer3.tick();
    timer3.tick();
    timer3.tick();
    assert.equal(timer3.time, 2);
    timer3.tick();
    timer3.tick();
    assert.equal(timer3.time, 0);
    timer3.tick();
    assert.equal(timer3.time, 0);
  });

  it(`incorrect number`, () => {
    assert.throws(() => new CreateTimer(`abcd`), /type of time should be number/);
  });

});
