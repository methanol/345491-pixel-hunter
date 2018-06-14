import renderIntro from './templates/intro-template.js';
import renderGreeting from './templates/greeting-template.js';
import renderRules from './templates/rules-template.js';
import renderFirstGame from './templates/game-one-template.js';
import renderSecondGame from './templates/game-two-template.js';
import renderThirdGame from './templates/game-three-template.js';
import renderStat from './templates/stat-template.js';
import {selectSlide} from './util.js';

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
        showNextScreen: () => goNextScreen(`stat`),
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderThirdGame(data));
      break;

    case `stat`:
      data = {
        goBack: () => goNextScreen(`greeting`)
      };
      selectSlide(renderStat(data));
      break;
  }
}

export default goNextScreen;
