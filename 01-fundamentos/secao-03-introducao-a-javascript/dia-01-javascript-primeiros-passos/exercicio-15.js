const custoProduto = 20;
const valorVenda = 50;
const custoTotalProduto = custoProduto * 1.2;
const lucroPorProduto = valorVenda - custoTotalProduto;
let unidadesVendidas = 1000;
let lucro;

if (custoProduto >= 0 && valorVenda >= 0) {
    lucro = unidadesVendidas * lucroPorProduto;
} else {
    lucro = "Erro! Valor inválido inserido."
}

console.log(lucro);