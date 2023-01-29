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

const minhasSkills = (frase) => {
    const skills = ['HTML', 'CSS', 'JavaScript']
    let lessonsLearned = `
    ${frase}
    Minhas três principais habilidades são:`;
    for (skill of skills) {
        lessonsLearned = `${lessonsLearned} 
        ${skill}`
    }
    return lessonsLearned;
}

console.log(minhasSkills(substituaX('Bebeto')))