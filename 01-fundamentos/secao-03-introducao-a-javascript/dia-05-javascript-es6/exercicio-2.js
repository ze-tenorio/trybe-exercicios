  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  
  pessoa.nome = 'Luna';
  pessoa.idade = 19;
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);