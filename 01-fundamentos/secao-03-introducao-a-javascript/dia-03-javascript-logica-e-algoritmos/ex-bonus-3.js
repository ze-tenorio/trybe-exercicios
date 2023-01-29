n = 4;

let asteriscos = 1;

for (let linhas = 1; linhas <= n; linhas += 1) {
    let spaces = n - 1;
    let square = '';
    for (let colunas = 1; colunas <= n; colunas += 1) {
        if (spaces >= asteriscos) {
            square += ' ';
            spaces -= 1;
        } else {
            square += '*';
        }
    }
    console.log(square)
    asteriscos += 1;
}
 