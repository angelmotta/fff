const animals = [
    { name: "Fluffykins", species: "rabbit" },
    { name: "Caro", species: "dog" },
    { name: "Hamilton", species: "dog" },
    { name: "Harold", species: "fish" },
    { name: "Ursula", species: "cat" },
    { name: "Jimmy", species: "fish" },
];

// Traditional way to get dogs
const dogsList = [];
for (let i = 0; i < animals.length; i++) {
    if (animals[i].species === "dog") {
        dogsList.push(animals[i]);
    }
}
console.log("dogs:", dogsList);

// Using higher order functions
isDog = (animalObj) => {
    return animalObj.species === "dog";
};

const onlyDogsList = animals.filter(isDog);
console.log("dogs:", onlyDogsList);

const allExceptDogs = animals.filter((animal) => {
    return animal.species !== "dog";
});
console.log("all except dogs:", allExceptDogs);
