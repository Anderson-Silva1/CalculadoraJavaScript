// let result = document.getElementById('result');

// function getResult() {
//     if (value === '=') {
//         result.value = eval(result.value)
//     } else {
//         result.value = value;
//     }
// }

// function clearResult() {
//     result.value = ''
// }

let result = document.getElementById('result');

function getResult(value) {
    if (value === '=') {
        // Evaluate the expression and update the result
        result.value = eval(result.value);
    } else if (value === 'C') {
        // Clear the input field
        clearResult();
    } else {
        // Append the clicked value to the current expression
        result.value += value;
    }
}

function clearResult() {
    // Clear the input field
    result.value = '';
}
