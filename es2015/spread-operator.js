
/**
 * Spread operator
 */
let nums = [1, 2, 3];

function addAll(x, y, z) {
    return x + y + z;
}

console.log(addAll(...nums));
