let turma = 30; //Number
let company = 'Trybe'; //String
let isBeautiful = true; //boolean
let xablau;
let supimpa = null;

let number1 = 5;
let number2 = 10;
let number3 = 15;

//Soma
let soma = number1 + number2;

//Subtração
let subtracao = number1 - number2;

//Multiplicação
let multiplicacao = number1 * number2;

//Divisão
let divisao = number1 / number2;

//Comparação
let comparacao = number3 == number1;

//Condições
if(number1 > number2) {
    console.log("catapimbas, o num1 é do balacobaco")
} else {
    console.log("Errou!!! num2 maior")
}

//Como descobrir se o número é par
let isEven = (number1 + number2 + number3) % 2 == 0

console.log(isEven);

//Switch

let weekDay = 1;

switch(weekDay) {
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segundou")
        break;
    case 3:
        console.log("Terça, simplesmente terça")
        break;
    case 4:
        console.log("Quarta, cinema tá 50% off")
        break;
    case 5:
        console.log("Pré-sexta, quinta-feira")
        break;
    case 6:
        console.log("Its Friday, Im in love")
        break;
    case 7:
        console.log("Dia de maldade")
        break;
    default:
        console.log("Não existe esse dia, ainda :)")
}
