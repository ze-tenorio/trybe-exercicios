const hydrate = (string) => {
    const numbers = string.match(/\d+/g);
    let drinks = 0;
    for (n of numbers) {
        drinks += parseInt(n);
    }
    if (drinks === 1) return '1 copo de água';
    return `${drinks} copos de água`
}

console.log(hydrate('1 cerveja'));

module.exports = hydrate