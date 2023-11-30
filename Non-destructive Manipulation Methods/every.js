// The every() method takes a test(or callback) function as an argument to check on every element to
// determine if all the elements in the array passed the test. If all passed, returns true, else false.

const ageArray = [34, 23, 20, 26, 12];

//checks if all the array elements

let check = ageArray.every((a) => {
  a >= 18;
});

console.log(check);
