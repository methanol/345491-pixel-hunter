import {selectSlide} from './util.js';
import {model} from './data.js';
import IntroPresenter from './presenter/intro-presenter.js';
import GreetingPresenter from './presenter/greeting-presenter.js';
import RulesPresenter from './presenter/rules-presenter.js';
import GamePresenter from './presenter/game-presenter.js';
import StatPresenter from './presenter/stat-presenter.js';
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

  static showLoad() {
    const splash = new SplashScreen();

    selectSlide([splash.element]);
    window.fetch(`https://es.dump.academy/pixel-hunter/questions`).
      then(checkStatus).
      then((response) => response.json()).
      then((data) => {
        inputStates = data;
        ScreenRouter.showIntro();
      }).
      catch(showError);
  }

  static showIntro() {
    const data = {
      showNextScreen: () => ScreenRouter.showGreeting()
    };
    new IntroPresenter(data).create();
  }

  static showGreeting() {
    const data = {
      showNextScreen: () => ScreenRouter.showRules()
    };
    new GreetingPresenter(data).create();

  }

  static showRules() {
    const data = {
      showNextScreen: () => {
        ScreenRouter.showGame();
      },
      goBack: () => ScreenRouter.showGreeting()
    };
    new RulesPresenter(data).create();
  }

  static showGame() {
    const data = {
      showNextScreen: () => ScreenRouter.showGame(),
      showStatScreen: () => ScreenRouter.showStat(),
      goBack: () => ScreenRouter.showGreeting()
    };
    new GamePresenter(data, inputStates).create();
  }

  static showStat() {
    const data = {
      goBack: () => ScreenRouter.showGreeting()
    };
    new StatPresenter(data).create();

    Loader.saveResults(model.statistics, model.userName).
      then(() => Loader.loadResults(model.userName)).
      then((info) => {
        serverStatistics = info;
      }).
      catch(showError);
  }

}

export {checkStatus, serverStatistics};
