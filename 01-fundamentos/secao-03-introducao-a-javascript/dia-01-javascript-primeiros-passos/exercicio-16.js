let salarioBruto = 8000;
let salarioLiquido;
let aliquotaInss;
let aliquotaIr;

if(salarioBruto <= 1556.94) {
    aliquotaInss = 0.8;
    salarioLiquido = salarioBruto - (salarioBruto * aliquotaInss);
} else if (salarioBruto > 5189.82) {
    aliquotaInss = 570.88;
    aliquotaIr = 0.275;
    salarioLiquido = (salarioBruto - aliquotaInss) - ((salarioBruto * aliquotaIr) - 869.36);
} else {
    salarioLiquido = "ainda nao fiz esse valor"
}

console.log(salarioLiquido);