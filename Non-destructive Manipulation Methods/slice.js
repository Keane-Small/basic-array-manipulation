// slices takes a section of an array and slices it, leaving the original as is,
// and making a copy of its own.

// const stuff = ["computer", "phone", "wallet"];

// const stuff2 = stuff.slice();

// console.log(stuff2);

// slices takes in two parameters the start and end

const anime = [
  "Dragon ball z",
  "Naruto",
  "One piece",
  "Twinkling Watermelon",
  "True Beauty",
];

const newAnime = anime.slice(1, 4);

console.log(newAnime);
