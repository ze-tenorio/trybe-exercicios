const bmiCalculator = () => {
  const weight = 63
  const height = 1.70
  const bmi = weight / (height * height);
  return bmi;
}

console.log(bmiCalculator().toFixed(2));