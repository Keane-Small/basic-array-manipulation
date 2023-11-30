// The find() method returns the first matching element from the array.
// The match condition to be provided by you as a test/callback function to the find() method.
// If there is no match, undefined will be returned.
// the find method takes three variables in it's callback method
// First is the element, second is the index and the third is the array

let numbers = [1, 2, 3, 4, 5];

const age = numbers.find((e) => e % 2 == 0);
console.log(numbers);
