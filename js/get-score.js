const getScore = (answers, lives) => {
  let totalScore = 0;
  let totalLIves = lives;

  const NORMAL_SCORE = 100;
  const SLOW_SCORE = 50;
  const FAST_SCORE = 150;
  const NORMAL_MODE = `normal`;
  const SLOW_MODE = `slow`;
  const FAST_MODE = `fast`;

  if (typeof (lives) !== `number`) {
    throw new Error(`type of lives should be number`);
  }

  if (!Array.isArray(answers)) {
    throw new Error(`type of answers should be array`);
  }

  if (answers.length < 10) {
    return -1;
  }

  for (let i = 0; i < answers.length; i++) {
    if (totalLIves < 1) {
      break;
    } else {
      if (answers[i].success) {
        switch (answers[i].speed) {
          case NORMAL_MODE:
            totalScore += NORMAL_SCORE;
            break;
          case SLOW_MODE:
            totalScore += SLOW_SCORE;
            break;
          case FAST_MODE:
            totalScore += FAST_SCORE;
            break;
          default:
            throw new Error(`type of speed is not correct`);
        }
      } else {
        totalLIves -= 1;
      }
    }
  }

  if (totalLIves < 1) {
    totalScore = 0;
  } else {
    totalScore += totalLIves * 50;
  }

  return totalScore;
};

export default getScore;