/*
Write a javascript program to evaluate a prefix notation string.
Input operators + * - /. Numbers are all positive integers only. Separated by space character.
For any such a string the program should return one number which is the revArrult of the calculation.
The program needs to yield the correct revArrult for valid inputs only, so error handling can be omitted.
Example:
"9" => 9
"+ 1 2" => 3 // This is (1 + 2)
"+ + 1 2 30" => 33 // This is ((1+2)+30)
"+ + 12 16 * 10 4" => 68 // This is ((12+16)+(10*4))
*/

function prefixEval(expression) {
	let temp = expression.split(' ')
	let expr = temp.reverse()
	let stack = []

	for (let i = 0; i < expr.length; i++) {
		if (
			expr[i] === '+' ||
			expr[i] === '-' ||
			expr[i] === '/' ||
			expr[i] === '*'
		) {
			let j = stack.pop()
			let k = stack.pop()

			let temp = checkOperator(parseInt(j), parseInt(k), expr[i])

			stack.push(temp)
		} else {
			stack.push(expr[i])
		}
	}
	return stack
}

function checkOperator(a, b, op) {
	switch (op) {
		case '+':
			return a + b
		case '-':
			return b - a
		case '/':
			return b / a
		case '*':
			return a * b
		default:
			return 'this is not correct'
	}
}

console.log(prefixEval('+ + 1 2 30'))
