import {assert} from 'chai';
import getScore from '.././get-score.js';

const GAME1_SCORE = {
  lives: 3,
  answers: [{success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}]
};

const GAME2_SCORE = {
  lives: 3,
  answers: [{success: true, speed: `normal`}, {success: true, speed: `normal`}]
};

const GAME3_SCORE = {
  lives: 3,
  answers: [{success: false, speed: `normal`}, {success: false, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `fast`}]
};

describe(`Score calculation`, () => {

  it(`player get normal score 1150`, () => {
    assert.equal(getScore(GAME1_SCORE.answers, GAME1_SCORE.lives), 1150);
  });

  it(`player did not answer 10 answers`, () => {
    assert.equal(getScore(GAME2_SCORE.answers, GAME2_SCORE.lives), -1);
  });

  it(`player get score 900`, () => {
    assert.equal(getScore(GAME3_SCORE.answers, GAME3_SCORE.lives), 900);
  });

  it(`incorrect number`, () => {
    assert.throws(() => getScore(GAME1_SCORE.answers, []), /type of lives should be number/);
  });

  it(`incorrect array`, () => {
    assert.throws(() => getScore(4, GAME3_SCORE.lives), /type of answers should be array/);
  });
});
