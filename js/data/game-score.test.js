import {assert} from 'chai';

const GAME1_SCORE = {
  lives: 3,
  answers: [{success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}, {success: true, speed: `normal`}]
};

const GAME2_SCORE = {
  lives: 3,
  answers: [{success: true, speed: `normal`}, {success: true, speed: `normal`}]
};

const GAME3_SCORE = {
  lives: 1,
  answers: [{success: false, speed: `normal`}, {success: false, speed: `normal`}, {success: false, speed: `normal`}, {success: false, speed: `normal`}, {success: false, speed: `normal`}, {success: false, speed: `normal`}, {success: false, speed: `normal`}, {success: false, speed: `normal`}, {success: false, speed: `normal`}, {success: true, speed: `fast`}]
};

const getScore = (answers, lives) => {
  let totalScore = 0;

  if (typeof (lives) !== `number`) {
    throw new Error(`type of lives should be number`);
  }

  if (!Array.isArray(answers)) {
    throw new Error(`type of answers should be array`);
  }

  if (answers.length < 10) {
    return -1;
  }

  answers.forEach((it) => {
    if (it.success) {
      switch (it.speed) {
        case `normal`:
          totalScore += 100;
          break;
        case `slow`:
          totalScore += 50;
          break;
        case `fast`:
          totalScore += 150;
          break;
        default:
          throw new Error(`type of speed is not correct`);
      }
    }
  });

  totalScore += lives * 50;

  return totalScore;
};

describe(`Score calculation`, () => {

  it(`player get normal score 1150`, () => {
    assert.equal(getScore(GAME1_SCORE.answers, GAME1_SCORE.lives), 1150);
  });

  it(`player did not answer 10 answers`, () => {
    assert.equal(getScore(GAME2_SCORE.answers, GAME2_SCORE.lives), -1);
  });

  it(`player get score 200`, () => {
    assert.equal(getScore(GAME3_SCORE.answers, GAME3_SCORE.lives), 200);
  });

  it(`incorrect number`, () => {
    assert.throws(() => getScore(GAME1_SCORE.answers, []), /type of lives should be number/);
  });

  it(`incorrect array`, () => {
    assert.throws(() => getScore(4, GAME3_SCORE.lives), /type of answers should be array/);
  });
});
