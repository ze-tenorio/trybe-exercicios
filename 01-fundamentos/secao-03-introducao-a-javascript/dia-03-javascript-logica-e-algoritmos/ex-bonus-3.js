//Agora inverta o lado do triângulo. Por exemplo:

//preciso de uma variável que armazena o tamanho do triangulo retangulo invertido
let n = 5;

//preciso de uma variavel que armazene o que deve ser imprimido a cada linha
let triangleLines = '';
let asterisco = 1;
let espacos = n;

//vou ter que primeiro imprimir uma linha com n espaços 
for (let contColuna = 1; contColuna < n; contColuna++) {
    triangleLines = '';
    for (let contLinha = 1; contLinha <= n - 1; contLinha++) {
        triangleLines += 'a';
        if (triangleLines.length === n - 1) {
            triangleLines += '*';
        }
        
    }
    console.log(triangleLines);
}



console.log(triangleLines);

//vou ter que  imprimir uma linha com n-1 espaços


//e n-4 asterisco



//depois vou ter que criar uma estrutura de loop que aumente o 1 no número de espaços e diminua o 4 no número de asteriscos