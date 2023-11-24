// The .reduce() method is used to iterate over an array and return a signle value

const numbers = [15, 2, 1, 4];

const answer = numbers.reduce((answer, currentValue) => {
  return (answer += currentValue);
});
