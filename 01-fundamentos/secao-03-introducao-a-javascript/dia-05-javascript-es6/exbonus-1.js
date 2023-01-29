const substituaX = nome => {
    const frase = 'Tryber x aqui!';
    let palavrasFrase = frase.split(' ');
    let novaFrase = ''
    for (palavra of palavrasFrase) {
        if (palavra === 'x') {
            novaFrase += ` ${nome} `;
        } else {
            novaFrase += palavra;
        }
    }
    return novaFrase;
}

console.log(substituaX('Bebeto'))