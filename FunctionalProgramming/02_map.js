const animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" },
];

// Create an array with the 'name' of the animals

// Approach #1: Traditional way
const names = [];
for (let i = 0; i < animals.length; i++) {
    names.push(animals[i].name);
}
console.log(names);

// Approach #2: functional way
const theNames = animals.map((animalObj) => animalObj.name);
console.log(theNames);

// Create an array with of objects containing only the names (transform creating new objects)
const newAnimals = animals.map((animalObj) => {
    return { name: animalObj.name };
});
console.log(newAnimals);
