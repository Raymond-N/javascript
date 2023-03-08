const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

// const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];


// console.log(groceryList);
console.log(needThyme);
console.log(gotTheThyme);
console.log(notNeceCelery);