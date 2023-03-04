const checkNumber = (cNum, num) => cNum === num;

const lottery = (cNum, callback) => {
    const num = Math.ceil(Math.random() * 5);
    return callback(cNum, num) ? 'Parabéns, você ganhou!' : 'Tente novamente';
}

console.log(lottery(2, checkNumber));
