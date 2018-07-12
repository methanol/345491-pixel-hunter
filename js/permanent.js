const Screens = {
  INTRO: `intro`,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME_1: `two-of-two`,
  GAME_2: `tinder-like`,
  GAME_3: `one-of-three`,
  GAME_4: `one-of-three-reverse`,
  STAT: `stat`,
  LOAD: `load`
};

const Velocities = {
  NORMAL_MODE: `correct`,
  SLOW_MODE: `slow`,
  FAST_MODE: `fast`,
  WRONG_MODE: `wrong`,
  UNKNOWN_MODE: `unknown`
};

const Frames = {
  FRAME1: {
    width: 468,
    height: 458
  },
  FRAME2: {
    width: 705,
    height: 455
  },
  FRAME3: {
    width: 304,
    height: 455
  }
};

const Times = {
  START_TIME: 30,
  FAST_TIME: 20,
  SLOW_TIME: 10
};

export {Screens, Velocities, Times, Frames};
