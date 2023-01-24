let percentual = 0;
let nota;

if (percentual >= 90 && percentual < 100) {
    nota = "A";
} else if (percentual >= 80 && percentual < 90) {
    nota = "B";
} else if (percentual >= 70 && percentual < 80) {
    nota = "C";
} else if (percentual >= 60 && percentual < 70) {
    nota = "D";
} else if (percentual >= 50 && percentual < 60) {
    nota = "E";
} else if (percentual < 50 && percentual >= 0) {
    nota = "F";
} else {
    nota = "Erro. Nota inválida.";
}

console.log(nota);