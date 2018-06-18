const NORMAL_SCORE = 100;
const SLOW_SCORE = 50;
const FAST_SCORE = 150;
const NORMAL_MODE = `correct`;
const SLOW_MODE = `slow`;
const FAST_MODE = `fast`;
const WRONG_MODE = `wrong`;
const LIFE_PRICE = 50;

const getScore = (state) => {
  let totalScore = 0;
  let totalLIves = state.lives;

  if (totalLIves < 0) {
    return -1;
  }

  if (typeof (state.lives) !== `number`) {
    throw new Error(`type of lives should be number`);
  }

  if (!Array.isArray(state.answers)) {
    throw new Error(`type of answers should be array`);
  }

  if (state.answers.length < 10) {
    return -1;
  }

  for (let i = 0; i < state.answers.length; i++) {
    switch (state.answers[i]) {
      case NORMAL_MODE:
        totalScore += NORMAL_SCORE;
        break;
      case SLOW_MODE:
        totalScore += SLOW_SCORE;
        break;
      case FAST_MODE:
        totalScore += FAST_SCORE;
        break;
      case WRONG_MODE:
        totalScore += 0;
        break;
      default:
        throw new Error(`type of speed is not correct`);
    }
  }

  totalScore += state.lives * LIFE_PRICE;
  return totalScore;
};

export default getScore;
