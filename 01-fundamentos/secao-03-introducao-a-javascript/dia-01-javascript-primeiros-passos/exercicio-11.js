let angulo1 = 72;
let angulo2 = 90;
let angulo3 = 28;
let triangle = angulo1 + angulo2 + angulo3;
let isTriangle;
// let result = triangle == 180 ? isTriangle = true : isTriangle = false;

if (triangle === 180) {
    isTriangle = true;
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    isTriangle = "Erro";
} else {
    isTriangle = false;
}

console.log(isTriangle);