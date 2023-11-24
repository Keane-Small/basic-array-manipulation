// The .splice() method is used to not only remove elements
// from an array but add it to a array itself

let firstSeaCreatures = ["whale", "seahorse", "shark", "eel", "dolphin"];

const firstResult = firstSeaCreatures.splice(2);

console.log(firstSeaCreatures);

// The other arguments are optional but if you want to add to an array you can use them.
// The second argument indicates how many elements you want to remove.
// If you want to replace the

let secondSeaCreatures = ["whale", "seahorse", "shark", "eel", "dolphin"];

const secondResults = secondSeaCreatures.splice(1, 4, "squid", "mermaid");

console.log(secondSeaCreatures);
