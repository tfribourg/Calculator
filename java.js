function add(a, b) {
    return a + b
}
const subtract = (a, b) => {
    return a- b
}
function multiply(a, b) {
    return a * b
}
function divide (a, b) {
    return a / b
}

function operate (a, b, op) {
    if (op === '+') {
        return a + b }
    if (op === '-'){
        return a - b }
    if (op === '*'){
        return a * b }
    if (op === '/'){
        return a / b    }
}