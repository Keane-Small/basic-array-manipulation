// The .reduce() method is used to iterate over an array and return a single value
// The first

const numbers = [
  ["15", "2", "1", "4"],
  ["15", "2", "1", "4"],
];

const answer = numbers.reduce((answer, currentValue) => {
  answer += currentValue;
  console.log(answer);
  return answer;
});

// InitialValue

const newAnswer = numbers.reduce((answer, currentValue) => {
  return (answer -= currentValue);
}, 100);

// console.log(newAnswer);
