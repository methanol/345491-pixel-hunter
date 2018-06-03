import {selectSlide} from './util.js';
import intro from './intro.js';
import greeting from './greeting.js';

selectSlide(intro);

const introAsterisk = document.querySelector(`.intro__asterisk`);

introAsterisk.addEventListener(`click`, () => {
  selectSlide(greeting);
});
