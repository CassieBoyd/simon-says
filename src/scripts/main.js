// INSTRUCTIONS
// There are two separate scoping issues in this code. Remember, for and if are their 
// own block scopes and if something is declared with let or const then that variable 
// only exists in that scope.



// An array of smaller arrays. 
const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]

// "invalid" variable holds counter for invalid locations because it exists outside for loop scope
let invalid = 0

// For loop that loops through "locations" array and assigns each item and its index
// to variable "currentLocation".
for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]

    // If statement checks the first index position of each currentLocation item and
    // determines whether it's an invalidLocation according to the requirements of
    // the if statement. If it's invalid the variable "invalidLocation" is set to
    // true and the invalid varible is incremented.
    if (currentLocation[0] > 1) {
        let invalidLocation = true
        invalid++

        // Nested if statement triggers if invalidLocation is true and logs it to the console.
        if (invalidLocation) {
            console.log("This location is invalid")
        }
    }

}
// The invalid counter is logged to the console.
console.log(`There were ${invalid} invalid locations`)


/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/



// Original code
// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (let k = 0; k < locations.length; k++) {
//     const currentLocation = locations[k]

//     if (currentLocation[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }

// /*
//     Since k is used as the loop counter, it will be the
//     total number of locations, not the invalid ones. You
//     need to fix this somehow.
// */
// console.log(`There were ${k} invalid locations`)