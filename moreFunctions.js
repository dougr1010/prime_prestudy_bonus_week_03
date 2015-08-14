var input = 2;
var result = 0;

function square(input) {
	return Math.pow(input, 2);
}

function cube(input) {
	return Math.pow(input, 3);
}

function root6(input) {
	return Math.pow(input, (1/6));
}

result = root6(cube(square(input)));

console.log("Function: root6(cube(square(input)))");
console.log("Input:  " + input);
console.log("Output: " + result);