/*

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
			console.log('adding' + ' ' + a + ' ' + op + ' ' + b)
			console.log(a + b)
			return a + b
		case '-':
			console.log('subtracting' + ' ' + a + ' ' + op + ' ' + b)
			console.log(a - b)
			return a - b
		case '/':
			console.log('dividing' + ' ' + a + ' ' + op + ' ' + b)
			console.log(a / b)
			return a / b
		case '*':
			console.log('multiplying' + ' ' + a + ' ' + op + ' ' + b)
			console.log(a * b)
			return a * b
		default:
			return 'this is not correct'
	}
}

console.log(prefixEval('+ + 12 16 * 10 4'))
