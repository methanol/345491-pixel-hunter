const startState = {
  lives: 3,
  time: 30,
  currentSlide: `intro`,
  userName: ``,
  success: true,
  answers: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`],
  keyCodes: [`0101`, `10`, `100`, `0101`, `10`, `100`, `0101`, `10`, `100`, `0101`],
  isGameScreen: false,
  counter: 0,
  photoCounter: 0
};

const photos = [`https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`];

export {startState, photos};
