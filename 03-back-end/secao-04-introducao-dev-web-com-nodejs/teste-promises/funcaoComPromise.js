function calcularDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if (num2 == 0) reject(new Error("Nao pode dividir valor por zero"))

    const resultado = num1 / num2;

    resolve(resultado);
  });

  return promise;
}

calcularDivisao(2, 1)
  .then((result) => console.log("O resultado é: %s", result))
  .catch((err) => console.log(err.message));