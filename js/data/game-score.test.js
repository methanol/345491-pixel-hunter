import {assert} from 'chai';
import getScore from '.././get-score.js';

const GAME1_SCORE = {
  lives: 3,
  answers: [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`]
};

const GAME2_SCORE = {
  lives: 3,
  answers: [`correct`, `correct`]
};

const GAME3_SCORE = {
  lives: 2,
  answers: [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `wrong`]
};

const GAME4_SCORE = {
  lives: `fuck`,
  answers: [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `wrong`]
};

const GAME5_SCORE = {
  lives: 2,
  answers: `fuck`
};

describe(`Score calculation`, () => {

  it(`player get normal score 1150`, () => {
    assert.equal(getScore(GAME1_SCORE), 1150);
  });

  it(`player did not answer 10 answers`, () => {
    assert.equal(getScore(GAME2_SCORE), -1);
  });

  it(`player get score 1000`, () => {
    assert.equal(getScore(GAME3_SCORE), 1000);
  });

  it(`incorrect number`, () => {
    assert.throws(() => getScore(GAME4_SCORE), /type of lives should be number/);
  });

  it(`incorrect array`, () => {
    assert.throws(() => getScore(GAME5_SCORE), /type of answers should be array/);
  });
});
