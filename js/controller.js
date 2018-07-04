import {selectSlide} from './util.js';
import {model} from './data.js';
import IntroPresenter from './presenter/intro-presenter.js';
import GreetingPresenter from './presenter/greeting-presenter.js';
import RulesPresenter from './presenter/rules-presenter.js';
import GamePresenter from './presenter/game-presenter.js';
import StatPresenter from './presenter/stat-presenter.js';
import {Screens} from './permanent.js';
import SplashScreen from './splash-screen.js';
import ErrorScreen from './error-screen.js';
import Loader from './loader.js';

let inputStates = [];
let serverStatistics = [];

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(`${response.status}: ${response.statusText}`);

};

const showError = (error) => {
  const errorScreen = new ErrorScreen(error);
  selectSlide(errorScreen.element);
};

export default class ScreenRouter {
  constructor(screenType = ``) {
    this.screenType = screenType;
    this.data = {};
  }

  switchScreen() {
    switch (this.screenType) {
      case Screens.LOAD:

        const splash = new SplashScreen();

        selectSlide(splash.element);
        splash.start();
        window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
          then(checkStatus).
          then((response) => response.json()).
          then((data) => {
            inputStates = data;
          }).
          then(() => splash.stop()).
          then(() => new ScreenRouter(Screens.INTRO).switchScreen()).
          catch(showError);
        break;

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
          showNextScreen: () => new ScreenRouter(inputStates[0].type).switchScreen(),
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen()
        };
        selectSlide(new RulesPresenter(this.data).create());
        break;

      case Screens.GAME_1:
        this.data = {
          showNextScreen: () => {
            if ((model.lives >= 0) && (model.counter < 10)) {
              new ScreenRouter(inputStates[model.counter].type).switchScreen();
            } else {
              new ScreenRouter(Screens.STAT).switchScreen();
            }
          },
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen()
        };
        selectSlide(new GamePresenter(this.data, inputStates).create());
        break;

      case Screens.GAME_2:
        this.data = {
          showNextScreen: () => {
            if ((model.lives >= 0) && (model.counter < 10)) {
              new ScreenRouter(inputStates[model.counter].type).switchScreen();
            } else {
              new ScreenRouter(Screens.STAT).switchScreen();
            }
          },
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen()
        };
        selectSlide(new GamePresenter(this.data, inputStates).create());
        break;

      case Screens.GAME_3:
        this.data = {
          showNextScreen: () => {
            if ((model.lives >= 0) && (model.counter < 10)) {
              new ScreenRouter(inputStates[model.counter].type).switchScreen();
            } else {
              new ScreenRouter(Screens.STAT).switchScreen();
            }
          },
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen()
        };
        selectSlide(new GamePresenter(this.data, inputStates).create());
        break;

      case Screens.STAT:
        this.data = {
          goBack: () => new ScreenRouter(Screens.GREETING).switchScreen()
        };
        selectSlide(new StatPresenter(this.data).create());
        Loader.saveResults(model.statistics, model.userName).
          then(() => Loader.loadResults(model.userName)).
          then((data) => {
            serverStatistics = data;
          }).
          catch(showError);
    }
  }

}

export {checkStatus, serverStatistics};
