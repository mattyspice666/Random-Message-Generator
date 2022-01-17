//Tropical Zodiac signs

astrologySigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

/* zodiacSign takes date as (month, day) and generates the zodiac sign associated */

function zodiacSign(month,
                    day) {
  if ((month === 1 && day < 20) || (month === 12 && day >= 22)) {
    return astrologySigns[9];
  } else if ((month === 2 && day < 19) || (month === 1 && day >= 20)) {
    return astrologySigns[10];
  } else if ((month === 3 && day < 21) || (month === 2 && day >= 19)) {
    return astrologySigns[11];
  } else if ((month === 4 && day < 20) || (month === 3 && day >= 21)) {
    return astrologySigns[0];
  } else if ((month === 5 && day < 21) || (month === 4 && day >= 20)) {
    return astrologySigns[1];
  } else if ((month === 6 && day < 21) || (month === 5 && day >= 21)) {
    return astrologySigns[2];
  } else if ((month === 7 && day < 23) || (month === 6 && day >= 21)) {
    return astrologySigns[3];
  } else if ((month === 8 && day < 23) || (month === 7 && day >= 23)) {
    return astrologySigns[4];
  } else if ((month === 9 && day < 23) || (month === 8 && day >= 23)) {
    return astrologySigns[5];
  } else if ((month === 10 && day < 23) || (month === 9 && day >= 23)) {
    return astrologySigns[6];
  } else if ((month === 11 && day < 22) || (month === 10 && day >= 23)) {
    return astrologySigns[7];
  } else if ((month === 12 && day < 22) || (month === 11 && day >= 23)) {
    return astrologySigns[8];
  }
}

/* Prompts and message generation */
let prompt = require("prompt-sync")({ sigint: true });

let name = prompt("What is your name?");
console.log(`Hey there, ${name}`);

let birthMonth = prompt("What month were you born? (Only 1-12 please)");
let birthDay = prompt("What day were your born?");
let birthday = birthMonth + "/" + birthDay;
console.log(`Your birthday is ${birthday}`);
console.log(`You are a ${zodiacSign(birthMonth, birthDay)}`);

/* random sentence generation found here: https://codepen.io/chiragbhansali/pen/EWppvy */
let verbs, nouns, adjectives, adverbs, preposition;
nouns = [
  "bird",
  "clock",
  "boy",
  "plastic",
  "duck",
  "teacher",
  "old lady",
  "professor",
  "hamster",
  "dog",
];
verbs = [
  "kicked",
  "ran",
  "flew",
  "dodged",
  "sliced",
  "rolled",
  "died",
  "breathed",
  "slept",
  "killed",
];
adjectives = [
  "beautiful",
  "lazy",
  "professional",
  "lovely",
  "dumb",
  "rough",
  "soft",
  "hot",
  "vibrating",
  "slimy",
];
adverbs = [
  "slowly",
  "elegantly",
  "precisely",
  "quickly",
  "sadly",
  "humbly",
  "proudly",
  "shockingly",
  "calmly",
  "passionately",
];
preposition = [
  "down",
  "into",
  "up",
  "on",
  "upon",
  "below",
  "above",
  "through",
  "across",
  "towards",
];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  let rand1 = Math.floor(Math.random() * 10);
  let rand2 = Math.floor(Math.random() * 10);

  let rand3 = Math.floor(Math.random() * 10);
  let rand4 = Math.floor(Math.random() * 10);
  let rand5 = Math.floor(Math.random() * 10);
  let rand6 = Math.floor(Math.random() * 10);
  randGen();
  return `The ${adjectives[rand1]} ${nouns[rand2]} ${adverbs[rand3]} ${verbs[rand4]} because some ${nouns[rand1]} ${adverbs[rand1]} ${verbs[rand1]} ${preposition[rand1]} a ${adjectives[rand2]} ${nouns[rand5]} which, became a ${adjectives[rand3]}, ${adjectives[rand4]} ${nouns[rand6]}.`;
}
console.log(`Your zodiac message is ${sentence()}`);


//let randomWord = require('random-words');
//let randomMessage = randomWord({ exactly: 5, wordsPerString: 2, join: ' ' });
//console.log(randomMessage);
