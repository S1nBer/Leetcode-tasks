// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

function generate(numRows) {
    if (numRows === 1) {
        return [[1]];
    }

    if (numRows === 2) {
        return [[1],[1,1]];
    }

    const arr = [[1],[1,1]];

    for (let i = 2; i < numRows; i++) {
        arr[i] = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                arr[i].push(1);
            } else {
                arr[i].push(arr[i-1][j-1] + arr[i-1][j]);
            }
        }
    }

    return arr;
}

console.log(generate(5));
console.log(generate(1));