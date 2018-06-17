import renderIntro from './templates/intro-template.js';
import renderGreeting from './templates/greeting-template.js';
import renderRules from './templates/rules-template.js';
import {renderFirstGame} from './templates/game-one-template.js';
import {renderSecondGame} from './templates/game-two-template.js';
import {renderThirdGame} from './templates/game-three-template.js';
import renderStat from './templates/stat-template.js';
import {selectSlide} from './util.js';
import {workState, photos} from './data.js';

const screens = {
  INTRO: `intro`,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME_1: `game-1`,
  GAME_2: `game-2`,
  GAME_3: `game-3`,
  STAT: `stat`
};

let gameScreens = [screens.GAME_1, screens.GAME_2, screens.GAME_3, screens.GAME_1, screens.GAME_2, screens.GAME_3, screens.GAME_1, screens.GAME_2, screens.GAME_3, screens.GAME_1, screens.STAT];


function goNextScreen(screenType) {
  let data = {};
  switch (screenType) {
    case screens.INTRO:
      data = {
        showNextScreen: () => goNextScreen(screens.GREETING)
      };
      selectSlide(renderIntro(data));
      break;

    case screens.GREETING:
      data = {
        showNextScreen: () => goNextScreen(screens.RULES)
      };
      selectSlide(renderGreeting(data));
      break;

    case screens.RULES:
      data = {
        showNextScreen: () => goNextScreen(gameScreens.shift()),
        goBack: () => goNextScreen(screens.GREETING)
      };
      selectSlide(renderRules(data));
      break;

    case screens.GAME_1:
      data = {
        showNextScreen: () => {
          if (workState.lives >= 0) {
            goNextScreen(gameScreens.shift());
          } else {
            workState.conclusion = `Поражение!`;
            goNextScreen(screens.STAT);
          }
        },
        goBack: () => goNextScreen(screens.GREETING),
        photo1: photos[workState.photoCounter++],
        photo2: photos[workState.photoCounter++]
      };
      selectSlide(renderFirstGame(data));
      break;

    case screens.GAME_2:
      data = {
        showNextScreen: () => {
          if (workState.lives >= 0) {
            goNextScreen(gameScreens.shift());
          } else {
            workState.conclusion = `Поражение!`;
            goNextScreen(screens.STAT);
          }
        },
        goBack: () => goNextScreen(screens.GREETING),
        photo1: photos[workState.photoCounter++]
      };
      selectSlide(renderSecondGame(data));
      break;

    case screens.GAME_3:
      data = {
        showNextScreen: () => {
          if (workState.lives >= 0) {
            goNextScreen(gameScreens.shift());
          } else {
            workState.conclusion = `Поражение!`;
            goNextScreen(screens.STAT);
          }
        },
        goBack: () => goNextScreen(screens.GREETING),
        photo1: photos[workState.photoCounter++],
        photo2: photos[workState.photoCounter++],
        photo3: photos[workState.photoCounter++]
      };
      selectSlide(renderThirdGame(data));
      break;

    case `stat`:
      data = {
        goBack: () => goNextScreen(screens.GREETING)
      };
      selectSlide(renderStat(data));
      gameScreens = [screens.GAME_1, screens.GAME_2, screens.GAME_3, screens.GAME_1, screens.GAME_2, screens.GAME_3, screens.GAME_1, screens.GAME_2, screens.GAME_3, screens.GAME_1, screens.STAT];
      break;
  }
}

export {goNextScreen as default};
