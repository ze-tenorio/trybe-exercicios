//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positiveNegative(value) {
    let answer;
    if (value === 0) {
        answer = 'zero'
    } else if (value > 0) {
        answer = 'positive'
    } else {
        answer = 'negative'
    }
    return answer;
}

console.log(positiveNegative(0))