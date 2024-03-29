// Customer object
const customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

// Have you noticed that the customer details don't have a full name or title
// How would we transform the customer array with a new attribute

const newArray = customers.map((obj) => {
  if (obj.gender === "F" && obj.married === true) {
    obj["fullName"] = `Mrs ${obj.f_name} ${obj.l_name}`;
  } else if (obj.gender === "F" && !obj.married) {
    obj["fullName"] = `Miss ${obj.f_name} ${obj.l_name}`;
  } else {
    obj["fullName"] = `Mr ${obj.f_name} ${obj.l_name}`;
  }
  return obj;
});

console.log(newArray);
