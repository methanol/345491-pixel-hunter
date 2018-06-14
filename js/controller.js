import renderIntro from `./templates/intro-template.js`;
import renderGreeting from `./templates/greeting-template.js`;
import renderRules from `./templates/rules-template.js`;
import renderFirstGame from `./templates/game-one-template.js`;
import renderSecondGame from `./templates/game-two-template.js`;
import renderThirdGame from `./templates/game-three-template.js`;
import renderStat from `./templates/stat-template.js`;
import {selectSlide} from './util.js';
import startState from './data.js';

const startGame = () => {
  selectSlide(renderIntro(renderGreeting(renderRules(renderFirstGame(), renderGreeting(), startState))));
};

export default startGame;
