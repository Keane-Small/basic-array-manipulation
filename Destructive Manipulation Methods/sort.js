// The sort() method sorts the array elements and returns the sorted array.
// The callback function accepts two parameters, which are the first and second elements of the array

let artists = [
  "John White Abbott",
  "Leonardo da Vinci",
  "Charles Aubry",
  "Anna Atkins",
  "Barent Avercamp",
];

const sorted = artists.sort();

console.log(sorted);

// const descendingOrder = artists.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }

//   return 0;
// });
// console.log(descendingOrder);

// let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

// ages.sort();

// console.log(ages);
