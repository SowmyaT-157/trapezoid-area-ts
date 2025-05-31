console.log("trapezoidal area...")

import promptSync from 'prompt-sync';

const prompt = promptSync();

function divideByTwo(value: number): number {
  return value / 2;
}

const input = Number(prompt('Enter a value to divide by 2: '));

if (isNaN(input)) {
  console.log('Please enter a valid number.');
} else {
  const result = divideByTwo(input);
  console.log(`Output: ${result}`);
}


function multiply(divisionValue: number, h: number): number {
  return divisionValue * h;
}

const divisionValue = Number(prompt('Enter divisionValue: '));
const h = Number(prompt('Enter height (h): '));

if (isNaN(divisionValue) || isNaN(h)) {
  console.log('Please enter valid numbers.');
} else {
  const result = multiply(divisionValue, h);
  console.log(`Output: ${result}`);
}
