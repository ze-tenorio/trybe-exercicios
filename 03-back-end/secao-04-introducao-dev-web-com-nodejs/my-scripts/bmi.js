const readline = require('readline-sync');

const bmiCalculator = () => {
  const weight = readline.questionInt('Whats your weight? ');
  const height = readline.questionInt('Whats your height? ');
  const bmi = weight / ((height / 100) * (height / 100));
  return bmi;
}

console.log(bmiCalculator().toFixed(2));