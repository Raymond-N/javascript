// const arr = [1,2,3,4];
// arr.push(300); // even though arr is declared with `const` we can still push new values into it 

const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr`

// This produces an error

console.log(arr);