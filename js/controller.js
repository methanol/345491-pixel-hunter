import renderIntro from './templates/intro-template.js';
import renderGreeting from './templates/greeting-template.js';
import renderRules from './templates/rules-template.js';
import {renderFirstGame} from './templates/game-one-template.js';
import {renderSecondGame} from './templates/game-two-template.js';
import {renderThirdGame} from './templates/game-three-template.js';
import renderStat from './templates/stat-template.js';
import {selectSlide} from './util.js';
import {startState, photos} from './data.js';

let gameQueue = [`game-1`, `game-2`, `game-3`, `game-1`, `game-2`, `game-3`, `game-1`, `game-2`, `game-3`, `game-1`, `stat`];

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
        showNextScreen: () => goNextScreen(gameQueue.shift()),
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderRules(data));
      break;

    case `game-1`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(gameQueue.shift());
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`),
        photo1: photos[startState.photoCounter++],
        photo2: photos[startState.photoCounter++]
      };
      selectSlide(renderFirstGame(data));
      break;

    case `game-2`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(gameQueue.shift());
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`),
        photo1: photos[startState.photoCounter++]
      };
      selectSlide(renderSecondGame(data));
      break;

    case `game-3`:
      data = {
        showNextScreen: () => {
          if (startState.lives >= 0) {
            goNextScreen(gameQueue.shift());
          } else {
            goNextScreen(`stat`);
          }
        },
        goBack: () => goNextScreen(`greeting`),
        photo1: photos[startState.photoCounter++],
        photo2: photos[startState.photoCounter++],
        photo3: photos[startState.photoCounter++]
      };
      selectSlide(renderThirdGame(data));
      break;

    case `stat`:
      data = {
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderStat(data));
      gameQueue = [`game-1`, `game-2`, `game-3`, `game-1`, `game-2`, `game-3`, `game-1`, `game-2`, `game-3`, `game-1`, `stat`];
      break;
  }
}

export {goNextScreen as default};
