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