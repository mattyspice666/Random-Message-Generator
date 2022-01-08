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
  "Sagitarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

/* zodiacSign takes date as (month, day) and generates the zodiac sign associated */

function zodiacSign(month, day) {
  if ((month == 1 && day < 20) || (month == 12 && day >= 22)) {
    return astrologySigns[9];
  } else if ((month == 2 && day < 19) || (month == 1 && day >= 20)) {
    return astrologySigns[10];
  } else if ((month == 3 && day < 21) || (month == 2 && day >= 19)) {
    return astrologySigns[11];
  } else if ((month == 4 && day < 20) || (month == 3 && day >= 21)) {
    return astrologySigns[0];
  } else if ((month == 5 && day < 21) || (month == 4 && day >= 20)) {
    return astrologySigns[1];
  } else if ((month == 6 && day < 21) || (month == 5 && day >= 21)) {
    return astrologySigns[2];
  } else if ((month == 7 && day < 23) || (month == 6 && day >= 21)) {
    return astrologySigns[3];
  } else if ((month == 8 && day < 23) || (month == 7 && day >= 23)) {
    return astrologySigns[4];
  } else if ((month == 9 && day < 23) || (month == 8 && day >= 23)) {
    return astrologySigns[5];
  } else if ((month == 10 && day < 23) || (month == 9 && day >= 23)) {
    return astrologySigns[6];
  } else if ((month == 11 && day < 22) || (month == 10 && day >= 23)) {
    return astrologySigns[7];
  } else if ((month == 12 && day < 22) || (month == 11 && day >= 23)) {
    return astrologySigns[8];
  }
}

const prompt = require("prompt-sync")({ sigint: true });

const name = prompt("What is your name?");
console.log(`Hey there, ${name}`);

const birthMonth = prompt("What month were you born? (Only 1-12 please)");
const birthDay = prompt("What day were your born?");
let birthday = birthMonth + "/" + birthDay;
console.log(`Your birthday is ${birthday}`);
console.log(`You are a ${zodiacSign(birthMonth, birthDay)}`);

const randomWord = require('random-words');
let randomMessage = randomWord({ exactly: 5, wordsPerString: 2 });

