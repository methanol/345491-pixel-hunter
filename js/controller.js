import {selectSlide} from './util.js';
import {model} from './data.js';
import IntroPresenter from './presenter/intro-presenter.js';
import GreetingPresenter from './presenter/greeting-presenter.js';
import RulesPresenter from './presenter/rules-presenter.js';
import GamePresenter from './presenter/game-presenter.js';
import StatPresenter from './presenter/stat-presenter.js';
import {Screens} from './permanent.js';

let gameScreens = [Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.STAT];

export default class ScreenRouter {
  constructor(screenType) {
    this.screenType = screenType;
    this.data = {};
  }

  switchScreen() {
    switch (this.screenType) {
      case Screens.INTRO:
        this.data = {
          showNextScreen: () => new ScreenRouter(Screens.GREETING).switchScreen()
        };
        selectSlide(new IntroPresenter(this.data).create());
        break;

      case Screens.GREETING:
        this.data = {
          showNextScreen: () => new ScreenRouter(Screens.RULES).switchScreen()
        };
        selectSlide(new GreetingPresenter(this.data).create());
        break;

      case Screens.RULES:
        this.data = {
          showNextScreen: () => new ScreenRouter(gameScreens.shift()).switchScreen(),
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen()
        };
        selectSlide(new RulesPresenter(this.data).create());
        break;

      case Screens.GAME_1:
        this.data = {
          showNextScreen: () => {
            if (model.lives >= 0) {
              new ScreenRouter(gameScreens.shift()).switchScreen();
            } else {
              new ScreenRouter(Screens.STAT).switchScreen();
            }
          },
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen(),
          type: `two-of-two`,
          answers: [
            {
              image: {
              url: `http://placehold.it/468x458`,
              width: 468,
              height: 458
              },
              type: `painting`
            },
            {
              image: {
              url: `http://placehold.it/468x458`,
              width: 468,
              height: 458
              },
              type: `painting`
            }
          ]
        };
        selectSlide(new GamePresenter(this.data, Screens.GAME_1).create());
        break;

      case Screens.GAME_2:
        this.data = {
          showNextScreen: () => {
            if (model.lives >= 0) {
              new ScreenRouter(gameScreens.shift()).switchScreen();
            } else {
              new ScreenRouter(Screens.STAT).switchScreen();
            }
          },
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen(),
          type: `tinder-like`,
          answers: [
            {
              image: {
              url: `http://placehold.it/468x458`,
              width: 705,
              height: 455
              },
              type: `photo`
            }
          ]
        };
        selectSlide(new GamePresenter(this.data, Screens.GAME_2).create());
        break;

      case Screens.GAME_3:
        this.data = {
          showNextScreen: () => {
            if (model.lives >= 0) {
              new ScreenRouter(gameScreens.shift()).switchScreen();
            } else {
              new ScreenRouter(Screens.STAT).switchScreen();
            }
          },
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen(),
          type: `one-of-three`,
          answers: [
            {
              image: {
              url: `http://placehold.it/468x458`,
              width: 304,
              height: 455
              },
              type: `painting`
            },
            {
              image: {
              url: `http://placehold.it/468x458`,
              width: 304,
              height: 455
              },
              type: `photo`
            },
            {
              image: {
              url: `http://placehold.it/468x458`,
              width: 304,
              height: 455
              },
              type: `photo`
            }
          ]
        };
        selectSlide(new GamePresenter(this.data, Screens.GAME_3).create());
        break;

      case Screens.STAT:
        this.data = {
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen()
        };
        selectSlide(new StatPresenter(this.data).create());

        gameScreens = [Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.GAME_2, Screens.GAME_3, Screens.GAME_1, Screens.STAT];
        break;
    }
  }

  showIntro() {
    this.switchScreen(Screens.INTRO);
  }
}

export {gameScreens};
