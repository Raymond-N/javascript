// *FOR LOOP*
// const nums = [1, 2, 3, 4, 5];

// const newNums = [];

// for(let i = 0; i < nums.length; i++) {
//     newNums.push( nums[i] * 2 );
// }

// console.log( newNums );


// *WITH MAP*

// const nums = [1, 2, 3, 4, 5];

// const newNums = nums.map( (num) => {
//     return num * 2;
// } );

// console.log( newNums );


// *WITH FUNCTION*

const nums = [1, 2, 3, 4, 5];

function double(num) {
    return num * 2;
}

const newNums = nums.map( double );

console.log( newNums );