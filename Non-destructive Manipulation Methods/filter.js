// filter is a removal method that filters through the given array based on a condition
// The first parameter it takes is a function.
// Whenever you refer to a function that's being passed on as a argument
// try to refer to its as a "callback function"
// The function can take three arguments 1st the current value of the element,
// 2nd the index of the current element,
// 3rd is an array object the element

const foods = ["apple", "pizza", "chocolate", "arugula", "avocados"];

foods.filter((item) => {
  return item[0] === "a";
});

console.log(foods);
