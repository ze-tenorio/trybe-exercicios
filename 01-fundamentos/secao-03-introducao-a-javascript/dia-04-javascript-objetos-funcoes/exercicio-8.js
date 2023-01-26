//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function isTriangle(angle1, angle2, angle3) {
    let isTriangle;
    if (angle1 + angle2 + angle3 === 180) {
        isTriangle = true;
    } else if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
        isTriangle = "Erro! Ângulo inválido!"
    } else {
        isTriangle = false;
    }
    return isTriangle;
}

console.log(isTriangle(100, 20, 60))