import {selectSlide} from './util.js';
import introElement from './intro.js';
import greetingElement from './greeting.js';

selectSlide(introElement);

const introAsterisk = document.querySelector(`.intro__asterisk`);

introAsterisk.addEventListener(`click`, () => {
  selectSlide(greetingElement);
});
