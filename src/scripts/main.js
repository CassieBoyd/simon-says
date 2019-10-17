// There are two separate scoping issues in this code. Remember, for and if are their 
// own block scopes and if something is declared with let or const then that variable 
// only exists in that scope.

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]

    if (currentLocation > 2) {
        const invalidLocation = true
        if (invalidLocation) {
            console.log("This location is invalid")
        }
    }
    console.log(`There were ${k} invalid locations`)
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/
