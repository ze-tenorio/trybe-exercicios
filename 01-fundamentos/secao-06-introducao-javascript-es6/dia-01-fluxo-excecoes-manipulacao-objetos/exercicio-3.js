const pessoaEstudante = {};

const addProperty = (object, newKey, value) => {
    object[newKey] = value;
}

addProperty(pessoaEstudante, 'nome', 'José Luiz');
addProperty(pessoaEstudante, 'email', 'jlptenorio@gmail.com');
addProperty(pessoaEstudante, 'telefone', '(21) 98376-1399');
console.log(pessoaEstudante);