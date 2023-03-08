const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// const [firstAnimal, secondAnimal] = animals;

const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
otherAnimals
// => ['fish', 'cat', 'bird']

console.log(firstAnimal);
console.log(otherAnimals);