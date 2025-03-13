// Animal Sounds
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};
const { moo, neigh, baa, oink, cluck } = animalSounds;

// Animal Names
const animals = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};
const { bessie, dolly, babe, little } = animals;

// Animal Colors
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};
const { blackAndWhite, black, pink } = animalColors;

// Rainbow Colors
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Rainbow Color Initials
const [r, o, y, g, b, i, v] = rainbowColors;

// Indigo as indg
const [, , , , , indg] = rainbowColors;

const muppet = {
  muppetName: "Kermit",
  color: "green",
  job: "Host",
  partner: "Miss Piggy",
  songs: ["Rainbow Connection", "Bein' Green", "Happy Feet", "Moving Right Along"]
};

// Correct Destructuring
const { muppetName, color, job, partner } = muppet;
const [, song2, , song4] = muppet.songs;
