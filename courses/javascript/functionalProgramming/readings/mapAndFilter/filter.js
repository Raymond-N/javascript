// const values = [1, 2, 3, 4, 5];
// const evens = values.filter( val => val % 2 === 0 );
// console.log(evens);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods);

const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes);