// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

function convert(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const rows = new Array(Math.min(numRows, s.length)).fill("");
  let isIncrease = true;
  let curValue = 0;

  s.split("").forEach((char) => {
    rows[curValue] += char;

    if (isIncrease) {
      curValue += 1;
    } else {
      curValue -= 1;
    }

    if (curValue === numRows - 1 || curValue === 0) {
      isIncrease = !isIncrease;
    }
  });

  return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
