console.log("trapezoidal area...")


import promptSync from 'prompt-sync';
const prompt = promptSync();

function add(a: number, b: number): number {
  return a + b;
}
function divideByTwo(value: number): number {
  return value / 2;
}

const a = Number(prompt('Enter value for a: '));
const b = Number(prompt('Enter value for b: '));

if (isNaN(a) || isNaN(b)) {
  console.log('Please enter valid numbers.');
} else {
  const sum = add(a, b);
  const average = divideByTwo(sum);
  console.log(`Output (a + b) / 2 = ${average}`);
}