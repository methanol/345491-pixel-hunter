// import renderIntro from './templates/intro-template.js';
// import renderGreeting from './templates/greeting-template.js';
// import renderRules from './templates/rules-template.js';
// import {renderFirstGame} from './templates/game-one-template.js';
// import {renderSecondGame} from './templates/game-two-template.js';
// import {renderThirdGame} from './templates/game-three-template.js';
import renderStat from './templates/stat-template.js';
import {selectSlide} from './util.js';
import {workState, photos} from './data.js';
import IntroPresenter from './presenter/intro-presenter.js';
import GreetingPresenter from './presenter/greeting-presenter.js';
import RulesPresenter from './presenter/rules-presenter.js';
import GamePresenter from './presenter/game-presenter.js';

const Screens = {
  INTRO: `intro`,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME_1: `game-1`,
  GAME_2: `game-2`,
  GAME_3: `game-3`,
  STAT: `stat`
};

let gameScreens = [Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.STAT];


function goNextScreen(screenType) {
  let data = {};
  switch (screenType) {
    case Screens.INTRO:
      data = {
        showNextScreen: () => goNextScreen(Screens.GREETING)
      };
      // selectSlide(renderIntro(data));
      selectSlide(new IntroPresenter().getElement(data));
      break;

    case Screens.GREETING:
      data = {
        showNextScreen: () => goNextScreen(Screens.RULES)
      };
      // selectSlide(renderGreeting(data));
      selectSlide(new GreetingPresenter().getElement(data));
      break;

    case Screens.RULES:
      data = {
        showNextScreen: () => goNextScreen(gameScreens.shift()),
        goBack: () => goNextScreen(Screens.GREETING)
      };
      // selectSlide(renderRules(data));
      selectSlide(new RulesPresenter().getElement(data));
      break;

    case Screens.GAME_1:
      data = {
        showNextScreen: () => {
          if (workState.lives >= 0) {
            goNextScreen(gameScreens.shift());
          } else {
            goNextScreen(Screens.STAT);
          }
        },
        goBack: () => goNextScreen(Screens.GREETING),
        photo1: photos[workState.photoCounter++],
        photo2: photos[workState.photoCounter++]
      };
      // selectSlide(renderFirstGame(data));
      selectSlide(new GamePresenter(Screens.GAME_1).getElement(data));
      break;

    case Screens.GAME_2:
      data = {
        showNextScreen: () => {
          if (workState.lives >= 0) {
            goNextScreen(gameScreens.shift());
          } else {
            goNextScreen(Screens.STAT);
          }
        },
        goBack: () => goNextScreen(Screens.GREETING),
        photo1: photos[workState.photoCounter++]
      };
      // selectSlide(renderSecondGame(data));
      selectSlide(new GamePresenter(Screens.GAME_2).getElement(data));
      break;

    case Screens.GAME_3:
      data = {
        showNextScreen: () => {
          if (workState.lives >= 0) {
            goNextScreen(gameScreens.shift());
          } else {
            goNextScreen(Screens.STAT);
          }
        },
        goBack: () => goNextScreen(Screens.GREETING),
        photo1: photos[workState.photoCounter++],
        photo2: photos[workState.photoCounter++],
        photo3: photos[workState.photoCounter++]
      };
      // selectSlide(renderThirdGame(data));
      selectSlide(new GamePresenter(Screens.GAME_3).getElement(data));
      break;

    case `stat`:
      data = {
        goBack: () => goNextScreen(Screens.GREETING)
      };
      selectSlide(renderStat(data));
      gameScreens = [Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.STAT];
      break;
  }
}

export {goNextScreen as default};
