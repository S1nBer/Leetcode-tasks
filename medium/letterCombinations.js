// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = "2"
// Output: ["a","b","c"]

const LETTERS_ON_BUTTONS = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

function letterCombinations(digits) {
  if (!digits.length) {
    return [];
  }

  if (/[01]/.test(digits)) {
    throw new Error("Invalid digits");
  }

  const result = [];
  const indices = new Array(digits.length).fill(0);

  while (true) {
    result.push(
      digits
        .split("")
        .map((d, ind) => LETTERS_ON_BUTTONS[d][indices[ind]])
        .join(""),
    );

    let i = digits.length - 1;

    while (i >= 0 && indices[i] === LETTERS_ON_BUTTONS[digits[i]].length - 1) {
      indices[i] = 0;
      i--;
    }

    if (i < 0) {
      break;
    }

    indices[i]++;
  }

  return result;
}

// function letterCombinations(digits) {
//   if (!digits.length) {
//     throw new Error("Must be some digits");
//   }

//   if (digits.includes("1") || digits.includes("0")) {
//     throw new Error("Digits 0 and 1 are not allowed");
//   }

//   if (digits.length === 1) {
//     return LETTERS_ON_BUTTONS[digits[0]];
//   }

//   const digitsArr = Array.from(digits);
//   const resultArrLength = digitsArr.reduce(
//     (acc, el) => (acc *= LETTERS_ON_BUTTONS[el].length),
//     1,
//   );
//   const indexArr = Array(digits.length).fill(0);

//   const result = Array.from(Array(resultArrLength), () => {
//     let str = "";

//     for (let i = 0; i < indexArr.length; i++) {
//       str += LETTERS_ON_BUTTONS[digits[i]][indexArr[i]];
//     }

//     for (let i = indexArr.length - 1; i > 0; i--) {
//       if (indexArr[i] < LETTERS_ON_BUTTONS[digits[i]].length - 1) {
//         indexArr[i]++;
//         break;
//       }

//       indexArr[i] = 0;
//       indexArr[i - 1]++;

//       if (indexArr[i - 1] < LETTERS_ON_BUTTONS[digits[i - 1]].length) {
//         break;
//       }
//     }

//     return str;
//   });

//   return result;
// }

console.log(letterCombinations("23"));
console.log(letterCombinations("2"));
console.log(letterCombinations("234"));
console.log(letterCombinations("5678"));
console.log(letterCombinations("1"));
