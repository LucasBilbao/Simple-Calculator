const num1 = document.querySelector('[data-num1]');
const num2 = document.querySelector('[data-num2]');
const operation = document.querySelector('[data-operation]');
const btn = document.querySelector('[data-btn]');
const solution = document.querySelector('[data-solution]');

btn.addEventListener('click', function () {
  const number1 = +num1.value;
  const number2 = +num2.value;

  const calculation = calculate(number1, number2, operation.value);

  solution.innerText = calculation;
});

function calculate(number1, number2, operation) {
  if (number2 === 0 && operation === '/') {
    return 'Cannot divide by 0';
  }

  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    default:
      return 'Invalid operation';
  }
}
