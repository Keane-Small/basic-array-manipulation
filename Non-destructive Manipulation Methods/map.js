// The .map() method is used to transform the data in you array
// it's similar to filter in parameters but .map() will
// transform the data and return the same amount of variables that are in the original array

const sodas = ["Coca-Cola", "Pepsi", "Sprite", "Cream soda"];

const newSodas = sodas.map((soda) => {
  if (soda[0] === "C") {
    soda = "Dr. Pepper";
  }
  return soda;
});

console.log(newSodas);
