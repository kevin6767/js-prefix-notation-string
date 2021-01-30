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

function cuttingString(list) {
	let flippedArr = list.split(' ')
	let topper = []

	if (flippedArr === '') {
		return 'this isnt working'
	}
	for (let i = 0; i < flippedArr.length; i++) {
		topper.push(flippedArr[i])
		let j = parseInt(topper.pop())
		let k = parseInt(topper.pop())

		if (flippedArr[i] === '*') {
			topper.push(j + k)
		} else if (flippedArr[i] === '/') {
			topper.push(j / k)
		}
		if (flippedArr[i] === '+') {
			topper.push(j + k)
		} else if (flippedArr[i] === '-') {
			topper.push(j - k)
		}
	}
	return topper[0]
}

cuttingString('+ + 12 16 * 10 4')
