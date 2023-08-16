const readline = require('readline-sync');

const bmiCalculator = () => {
  const weight = readline.questionInt('Whats your weight? ');
  const height = readline.questionInt('Whats your height? ');
  const bmi = weight / ((height / 100) * (height / 100));
  if (bmi < 18.5) {
    return `Seu IMC é ${bmi.toFixed(2)}. Você está abaixo do peso.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return `Seu IMC é ${bmi.toFixed(2)}. Você está no peso normal.`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    return `Seu IMC é ${bmi.toFixed(2)}. Você está acima do peso.`;
  } else if (bmi >= 30 && bmi <= 34.9) {
    return `Seu IMC é ${bmi.toFixed(2)}. Você está em obesidade grau I.`;
  } else if (bmi >= 35 && bmi <= 39.9) {
    return `Seu IMC é ${bmi.toFixed(2)}. Você está em obesidade grau II.`;
  } else {
    return `Seu IMC é ${bmi.toFixed(2)}. Você está em obesidade grau III ou IV.`;
  }
};

console.log(bmiCalculator());