let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let memory = 0;
let mode = 'DEG'; // DEG eller RAD för trigonometriska funktioner

// Lägg till nummer
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Rensa displayen
function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';
    updateDisplay();
}

// Sätt operator (för grundläggande operationer)
function setOperator(op) {
    if (firstOperand === '') {
        firstOperand = currentInput;
        operator = op;
        currentInput = '';
    } else if (currentInput !== '') {
        secondOperand = currentInput;
        calculateResult();
        operator = op;
    }
}

// Beräkna resultat
function calculateResult() {
    if (firstOperand !== '' && operator !== '' && currentInput !== '') {
        secondOperand = currentInput;
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
            default:
                return;
        }
        currentInput = result.toString();
        firstOperand = '';
        secondOperand = '';
        operator = '';
        updateDisplay();
    }
}

// Trigonometriska funktioner
function calculateSin() {
    let angle = parseFloat(currentInput);
    if (mode === 'DEG') angle = angle * (Math.PI / 180); // Om i grader, konvertera till radianer
    currentInput = Math.sin(angle).toString();
    updateDisplay();
}

function calculateCos() {
    let angle = parseFloat(currentInput);
    if (mode === 'DEG') angle = angle * (Math.PI / 180);
    currentInput = Math.cos(angle).toString();
    updateDisplay();
}

function calculateTan() {
    let angle = parseFloat(currentInput);
    if (mode === 'DEG') angle = angle * (Math.PI / 180);
    currentInput = Math.tan(angle).toString();
    updateDisplay();
}

function calculateArcsin() {
    currentInput = Math.asin(parseFloat(currentInput)).toString();
    updateDisplay();
}

function calculateArccos() {
    currentInput = Math.acos(parseFloat(currentInput)).toString();
    updateDisplay();
}

function calculateArctan() {
    currentInput = Math.atan(parseFloat(currentInput)).toString();
    updateDisplay();
}

// Omvandla mellan grader och radianer
function toggleMode() {
    if (mode === 'DEG') {
        mode = 'RAD';
    } else {
        mode = 'DEG';
    }
    updateDisplay();
}

// Exponent och logaritm
function calculatePower() {
    if (currentInput !== '') {
        currentInput = Math.pow(parseFloat(currentInput), 2).toString();
        updateDisplay();
    }
}

function calculateSquareRoot() {
    if (currentInput !== '') {
        currentInput = Math.sqrt(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

function calculateLog() {
    if (currentInput !== '') {
        currentInput = Math.log10(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

// Exponential funktion
function calculateExp() {
    if (currentInput !== '') {
        currentInput = Math.exp(parseFloat(currentInput)).toString();
        updateDisplay();
    }
}

// Finansiella funktioner
function calculatePV() { // Present Value (Nuvärde)
    let interestRate = parseFloat(prompt("Ange räntesatsen (i procent):"));
    let periods = parseInt(prompt("Ange antalet perioder:"));
    let payment = parseFloat(currentInput);
    let rate = interestRate / 100;
    let pv = payment * (1 - Math.pow(1 + rate, -periods)) / rate;
    currentInput = pv.toString();
    updateDisplay();
}

function calculateFV() { // Future Value (Framtida värde)
    let interestRate = parseFloat(prompt("Ange räntesatsen (i procent):"));
    let periods = parseInt(prompt("Ange antalet perioder:"));
    let payment = parseFloat(currentInput);
    let rate = interestRate / 100;
    let fv = payment * (Math.pow(1 + rate, periods) - 1) / rate;
    currentInput = fv.toString();
    updateDisplay();
}

function calculatePMT() { // Betalning (PMT)
    let interestRate = parseFloat(prompt("Ange räntesatsen (i procent):"));
    let periods = parseInt(prompt("Ange antalet perioder:"));
    let presentValue = parseFloat(prompt("Ange nuvärde:"));
    let rate = interestRate / 100;
    let pmt = presentValue * rate / (1 - Math.pow(1 + rate, -periods));
    currentInput = pmt.toString();
    updateDisplay();
}

// Uppdatera displayen
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput || '0';
}

// Minne
function clearMemory() {
    memory = 0;
}

function memoryRecall() {
    currentInput = memory.toString();
    updateDisplay();
}

function memoryStore() {
    memory = parseFloat(currentInput);
}

function memoryAdd() {
    memory += parseFloat(currentInput);
    updateDisplay();
}

