function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`${result} was flipped`);
//         if(result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0;
//         }
//     }
//     return `It took ${attempts} tries to flip five "heads"`;
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        let maxAttempts = 100;

        console.log(resolve);
        console.log(reject);
        // Need While loop to run until 5 heads is reached
        // also max attempts cannot exceed 100
        while(headsCount < 5 && attempts <= maxAttempts) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        // we need to go through loop it max attempts have not been reached
        // run conditional checking attempts
        if (attempts <= maxAttempts) {
            resolve(`It took ${attempts} tries to flip five "heads" in a row`)
        } else {
            reject(`Stop! You exceeded ${maxAttempts} flips.`)
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
    console.log( "When does this run now?" );