
const names = [
'Aanemarie', 'Adervandes', 'Akifusa',
'Abegildo', 'Adicellia', 'Aladonata',
'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

// const countA = (arr) => {
//     const str = arr.reduce((acc, curr) => `${acc}${curr}`)
//     const newArr = str.toLowerCase().split('');
//     const asArr = newArr.filter(letter => letter === 'a');
//     return asArr.length;
// }


const countA = (arr) => {
    const newArr = arr.join('').toLowerCase().split('')
    return newArr.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0)
} 

console.log(countA(names));
