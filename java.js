let displayVal = 0
let initialVal = 0
let newVal = 0
//const op = ['+', '-', '*', '/']


const display = document.querySelector('.display')
const buttons = document.querySelectorAll('button')

//function updateDisplay() {
  // display.textContent = displayVal} 


buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        const value = e.target.value
        

        if (e.target.value === '='){
            if (display.textContent.includes('/')){
               const A = display.textContent.split('/')
               operate(A[0], A[1], '/')

            }
            if (display.textContent.includes('*')){
                const A = display.textContent.split('*')
                operate(A[0], A[1], '*')


            }
            if (display.textContent.includes('+')){
                const A = display.textContent.split('+')
                operate(A[0], A[1], '+')


            }
            if (display.textContent.includes('-')){
                const A = display.textContent.split('-')
                operate(A[0], A[1], '-')


            }
        }
        display.textContent += value
        
        if (value === 'clear'){
            display.textContent = ''
        }
    }) 

})

        // operator event listeners
/*
const plus = document.getElementById('plus')
plus.addEventListener('click', e=>{

    add(initialVal, newVal)

})

const minus = document.getElementById('minus')
minus.addEventListener('click', e=>{

})

const mult = document.getElementById('mult')
mult.addEventListener('click', e=>{

})

const divide = document.getElementById('divide')
divide.addEventListener('click', e => {

})

const clear = document.getElementById('clear')
clear.addEventListener('click', e => {
    displayVal = '0'
    display.textContent = displayVal
    
})
*/

/*function add(a, b) {
    return a + b
}
const subtract = (a, b) => {
    return a- b
}
function multiply(a, b) {
    return a * b
}
function division (a, b) {
    return a / b
} */

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





