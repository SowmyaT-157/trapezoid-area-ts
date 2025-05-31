console.log("trapezoidal area...")


import promptSync from 'prompt-sync';
const prompt = promptSync();

function add(a: number, b: number): number {
  return a + b;
}

const a = Number(prompt('Enter value for a: '));
const b = Number(prompt('Enter value for b: '));

if (isNaN(a) || isNaN(b)) {
  console.log('Please enter valid numbers.');
} else {
  const result = add(a, b);
  console.log(`Output: ${result}`);
}