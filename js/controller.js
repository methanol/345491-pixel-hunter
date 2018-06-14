import renderIntro from `./templates/intro-template.js`;
import renderGreeting from `./templates/greeting-template.js`;
import renderRules from `./templates/rules-template.js`;
import renderFirstGame from `./templates/game-one-template.js`;
import renderSecondGame from `./templates/game-two-template.js`;
import renderThirdGame from `./templates/game-three-template.js`;
import renderStat from `./templates/stat-template.js`;
import {selectSlide} from './util.js';
import startState from './data.js';

goNextScreen = (screenType) => {
 switch(screenType) {
  case `intro`:
   const data = {
     showNextScreen: () => gotoNextScreen(`greeting`)
   };
   selectSlide(renderIntro(data));
   break;

  case `greeting`:
   const data = {
     showNextScreen: () => gotoNextScreen(`rules`)
   };
   selectSlide(renderGreeting(data));
   break;

  case `rules`:
   const data = {
    showNextScreen: () => gotoNextScreen(`game-1`),
    goBack: () => gotoNextScreen(`greeting`)
  };
   selectSlide(renderRules(data));
   break;

  case `game-1`:
  const data = {
   showNextScreen: () => gotoNextScreen(`game-2`),
   goBack: () => gotoNextScreen(`greeting`)
 };
  selectSlide(renderFirstGame(data));
  break;

  case `game-2`:
   const data = {
    showNextScreen: () => gotoNextScreen(`game-3`),
    goBack: () => gotoNextScreen(`greeting`)
  };
   selectSlide(renderSecondGame(data));
   break;

  case `game-3`:
  const data = {
   showNextScreen: () => gotoNextScreen(`stat`),
   goBack: () => gotoNextScreen(`greeting`)
 };
  selectSlide(renderThirdGame(data));
  break;

  case `stat`:
   const data = {
    goBack: () => gotoNextScreen(`greeting`)
  };
   selectSlide(renderStat(data));
   break;
 }
};

export default goNextScreen;
