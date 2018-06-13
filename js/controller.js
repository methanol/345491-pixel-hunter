import renderIntro from `./templates/intro-template.js`;
import renderFooter from `./templates/footer-template.js`;
import {renderGreeting, greetingTemplate} from `./templates/greeting-template.js`;

const startGame = () => {
  renderIntro(greetingTemplate);
  renderFooter();
};

startGame();
