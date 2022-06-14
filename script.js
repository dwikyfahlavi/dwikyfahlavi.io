const calculatorScreen = document.querySelector('.calculator-screen')
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")
const clearBtn = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const calculate = () =>{
    let result = ""
    switch(calculationOperator) {
        case "+" :
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-" :
            result = parseInt(prevNumber) - parseInt(currentNumber)
            break
        case "*" :
            result = parseInt(prevNumber) * parseInt(currentNumber)
            break
        case "/" :
            result = parseInt(prevNumber) / parseInt(currentNumber)
            break
        case "%" :
            result = parseInt(prevNumber) % parseInt(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ""
}

const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
}

inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const inputOperator = (operator) => {
    if (calculationOperator === ""){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ""
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

numbers.forEach((number) => {
    number.addEventListener("click",(event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})
