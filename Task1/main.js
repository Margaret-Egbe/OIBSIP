let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
  expression += value;
  display.innerHTML = expression;
}

function openParenthesis() {
  appendToDisplay('(');
}

function closeParenthesis() {
  appendToDisplay(')');
}

function clearDisplay() {
  expression = '';
  display.innerHTML = '0';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  display.innerHTML = expression || '0';
}
  
function toggleSign() {
  if (expression !== '') {
     expression = (parseFloat(expression) * -1).toString();
    display.innerHTML = expression;
  }
}

function appendToDisplay(value) {
  if (value === 'Math.sqrt(') {
    expression = '√';
  } else {
    expression += value;
  }
  display.innerHTML = expression;
}

function calculate() {
  try {
    expression = expression.replace(/%/g, '/100'); 
     
    if (expression.includes('√')) {
      let sqrtExpression = expression.replace(/√/g, '');  
      
      let result = Math.sqrt(parseFloat(sqrtExpression));
      
      display.innerHTML = result;
      expression = result.toString();
    } else {
      expression = eval(expression).toString();
    display.innerHTML = expression;
    }
  } catch (error) {
    display.innerHTML = 'Error';
  }
}


