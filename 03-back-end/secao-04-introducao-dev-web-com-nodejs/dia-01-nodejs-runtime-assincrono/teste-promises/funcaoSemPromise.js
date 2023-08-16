function calcularDivisao(num1, num2) {
  if (num2 == 0) throw new Error('Nao pode ser feito uma divisao por zero');

  const resultado = num1 / num2;

  return resultado;
}

try {
  const resultado = calcularDivisao(2, 1);
  console.log("resultado: %s", resultado);
} catch(e) {
  console.log("erro: %s", e.message);
}