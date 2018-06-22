import {selectSlide} from './util.js';
import {workState} from './data.js';
import IntroPresenter from './presenter/intro-presenter.js';
import GreetingPresenter from './presenter/greeting-presenter.js';
import RulesPresenter from './presenter/rules-presenter.js';
import GamePresenter from './presenter/game-presenter.js';
import StatPresenter from './presenter/stat-presenter.js';
import {Screens} from './permanent.js';

let gameScreens = [Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.STAT];

function goNextScreen(screenType) {
  let data = {};

  switch (screenType) {
    case Screens.INTRO:
      data = {
        showNextScreen: () => goNextScreen(Screens.GREETING)
      };
      selectSlide(new IntroPresenter(data).create());
      break;

    case Screens.GREETING:
      data = {
        showNextScreen: () => goNextScreen(Screens.RULES)
      };
      selectSlide(new GreetingPresenter(data).create());
      break;

    case Screens.RULES:
      data = {
        showNextScreen: () => goNextScreen(gameScreens.shift()),
        goBack: () => goNextScreen(Screens.GREETING)
      };
      selectSlide(new RulesPresenter(data).create());
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
        goBack: () => goNextScreen(Screens.GREETING)
      };
      selectSlide(new GamePresenter(data, Screens.GAME_1).create());
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
        goBack: () => goNextScreen(Screens.GREETING)
      };
      selectSlide(new GamePresenter(data, Screens.GAME_2).create());
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
        goBack: () => goNextScreen(Screens.GREETING)
      };
      selectSlide(new GamePresenter(data, Screens.GAME_3).create());
      break;

    case `stat`:
      data = {
        goBack: () => goNextScreen(Screens.GREETING)
      };
      selectSlide(new StatPresenter(data).create());

      gameScreens = [Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.STAT];
      break;
  }
}

export {goNextScreen as default};
