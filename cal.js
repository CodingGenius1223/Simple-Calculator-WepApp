function add(value) {
  const display = document.getElementById('display');
  const lastChar = display.value.slice(-1);

  // Avoid repeating operators
  if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
    return;
  }

  display.value += value;
}

function erase() {
  document.getElementById('display').value = '';
}

function delChar() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  let expression = display.value;

  // Remove trailing operator if needed
  const lastChar = expression.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) {
    expression = expression.slice(0, -1);
  }

  try {
    if (expression.trim() === '') return;
    const result = eval(expression);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}
