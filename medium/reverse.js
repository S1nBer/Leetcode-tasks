// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

function reverse(x) {
	const absX = Math.abs(x);
	const reversedAbsX = parseInt((absX + " ").split("").reverse().join(""));

	if (reversedAbsX > Math.pow(2, 31) - 1) {
		return 0;
	}

	const reversedX = x >= 0 ? reversedAbsX : -reversedAbsX;

	return reversedX;
}

console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(-2147483648));
