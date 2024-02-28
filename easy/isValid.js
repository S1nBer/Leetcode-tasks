// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

function isValid(s) {
	const str = s.split("");
	const arrOfBrackets = [];

	for (const char of str) {
		if (char === "{" || char === "[" || char === "(") {
			arrOfBrackets.push(char);
		} else {
			if (!arrOfBrackets.length) {
				return false;
			}

			const charCode = char.charCodeAt(0);
			const codeOfLastSavedChar =
				arrOfBrackets[arrOfBrackets.length - 1].charCodeAt();
			const diff = charCode - codeOfLastSavedChar;

			if (diff !== 1 && diff !== 2) {
				return false;
			}

			arrOfBrackets.pop();
		}
	}

	return arrOfBrackets.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
