// Function to append a character to the output
function appendToOutput(character) {
    document.getElementById('output').value += character;
}

// Function to clear the output
function clearOutput() {
    document.getElementById('output').value = '';
}

// Function to calculate the result
function calculateResult() {
    const output = document.getElementById('output');
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Error';
    }
}

// Function to calculate the square root
function calculateSqrt() {
    const output = document.getElementById('output');
    output.value = Math.sqrt(eval(output.value));
}

// Function to calculate the square
function calculateSquare() {
    const output = document.getElementById('output');
    output.value = Math.pow(eval(output.value), 2);
}

// Function to calculate the inverse
function calculateInverse() {
    const output = document.getElementById('output');
    output.value = 1 / eval(output.value);
}

// Function to calculate the sine
function calculateSin() {
    const output = document.getElementById('output');
    output.value = Math.sin(eval(output.value));
}

// Function to calculate the cosine
function calculateCos() {
    const output = document.getElementById('output');
    output.value = Math.cos(eval(output.value));
}

// Function to calculate the tangent
function calculateTan() {
    const output = document.getElementById('output');
    output.value = Math.tan(eval(output.value));
}

// Function to clear the last character
function clearLastCharacter() {
    const output = document.getElementById('output');
    output.value = output.value.slice(0, -1);
}

// Function to clear the entire output
function clearAll() {
    document.getElementById('output').value = '';
}
