import renderIntro from './templates/intro-template.js';
import renderGreeting from './templates/greeting-template.js';
import renderRules from './templates/rules-template.js';
import {renderFirstGame, renderFourthGame, renderSeventhGame, renderFinalGame} from './templates/game-one-template.js';
import {renderSecondGame, renderFifthGame, renderEighthGame} from './templates/game-two-template.js';
import {renderThirdGame, renderSixthGame, renderNinthGame} from './templates/game-three-template.js';
import renderStat from './templates/stat-template.js';
import {selectSlide} from './util.js';
import startState from './data.js';

function goNextScreen(screenType) {
  let data = {};
  switch (screenType) {
    case `intro`:
      data = {
        showNextScreen: () => goNextScreen(`greeting`)
      };
      selectSlide(renderIntro(data));
      break;

    case `greeting`:
      data = {
        showNextScreen: () => goNextScreen(`rules`)
      };
      selectSlide(renderGreeting(data));
      break;

    case `rules`:
      data = {
        showNextScreen: () => goNextScreen(`game-1`),
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderRules(data));
      break;

    case `game-1`:
      data = {
        showNextScreen: () => goNextScreen(`game-2`),
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderFirstGame(data));
      break;

    case `game-2`:
      data = {
        showNextScreen: () => goNextScreen(`game-3`),
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderSecondGame(data));
      break;

    case `game-3`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(`game-4`);
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderThirdGame(data));
      break;

    case `game-4`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(`game-5`);
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderFourthGame(data));
      break;

    case `game-5`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(`game-6`);
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderFifthGame(data));
      break;

    case `game-6`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(`game-7`);
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderSixthGame(data));
      break;

    case `game-7`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(`game-8`);
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderSeventhGame(data));
      break;

    case `game-8`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(`game-9`);
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderEighthGame(data));
      break;

    case `game-9`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(`game-10`);
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderNinthGame(data));
      break;

    case `game-10`:
      data = {
        showNextScreen: () => goNextScreen(`stat`),
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderFinalGame(data));
      break;

    case `stat`:
      data = {
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderStat(data));
      break;
  }
}

function getResult(arr) {
  let result = 0;
  arr.forEach((it) => {
    switch (it) {
      case `correct`:
        result += 100;
        break;

      default:
        result += 0;
        break;
    }
  });

  result += startState.lives * 50;

  return result;
}

export {goNextScreen as default, getResult};
