// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

// Example 1:

// Input: num = 3
// Output: "III"

// Example 2:

// Input: num = 4
// Output: "IV"

// Example 3:

// Input: num = 9
// Output: "IX"

// Example 4:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Example 5:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const ROMAN_NUMS = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

function intToRoman(num) {
  let curNum = num;
  let result = "";
  let indexArr = [];

  for (; curNum > 0; ) {
    const remainder = curNum % 10;
    curNum = Math.trunc(curNum / 10);

    if (remainder === 0) {
      indexArr.push([]);
      continue;
    }

    if (ROMAN_NUMS[remainder + 1]) {
      indexArr.push([1, remainder + 1]);
      continue;
    }

    if (ROMAN_NUMS[remainder]) {
      indexArr.push([remainder]);
      continue;
    }

    if (remainder > 5) {
      indexArr.push([5, ...new Array(remainder - 5).fill(1)]);
      continue;
    }

    indexArr.push(new Array(remainder).fill(1));
  }

  indexArr.forEach((el, ind) => {
    const elNum = el.reduce(
      (acc, val) => (acc += ROMAN_NUMS[val * 10 ** ind]),
      "",
    );
    result = elNum + result;
  });

  return result;
}

console.log(intToRoman(3749));
console.log(intToRoman(58));

const ROMAN_NUMS_2 = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

function intToRoman2(num) {
  let result = "";

  const values = Object.keys(ROMAN_NUMS_2)
    .map(Number)
    .sort((a, b) => b - a);

  for (const value of values) {
    while (num >= value) {
      result += ROMAN_NUMS_2[value];
      num -= value;
    }
  }

  return result;
}

console.log(intToRoman2(3749));
console.log(intToRoman2(58));
