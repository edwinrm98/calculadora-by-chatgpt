let input = ''; // Initialize input as an empty string
let result = document.getElementById('result');

// Update the input value when a button is clicked
function updateInput(value) {
	input += value;
	result.value = input;
}

// Clear the input
function clearInput() {
	input = '';
	result.value = input;
}

// Perform the selected operation
function operation(operator) {
	input += operator;
	result.value = input;
}

// Evaluate the expression and display the result
function calculate() {
	result.value = eval(input);
	input = '';
}
