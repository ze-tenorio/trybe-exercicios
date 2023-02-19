const {encode, decode} = require('./script')

describe('testa se as funcoes encode e decode sao funcoes', () => {
    test('testa se a funcao encode eh uma funcao', () => {
        expect(typeof encode).toBe('function');
    })
    test('testa se a funcao decode eh uma funcao', () => {
        expect(typeof decode).toBe('function');
    })
})

describe('testa a funcao encode', () => {
    test('testa se a funcao encode recebe aeiou e retorna 12345', () => {
        expect(encode('aeiou')).toBe('12345');
    })
    test('testa se a funcao encode recebe bcdfg e retorna bcdfg', () => {
        expect(encode('bcdfg')).toBe('bcdfg');
    })
    test('testa se a funcao encode recebe uma string de 5 caracteres e retorna outra string de 5 caracteres', () => {
        expect(decode('aeiou').length).toBe(5);
    })
})

describe('testa a funcao decode', () => {
    test('testa se a funcao decode recebe 12345 e retorna aeiou', () => {
        expect(decode('12345')).toBe('aeiou');
    })
    test('testa se a funcao decode recebe 6789 e retorna 6789', () => {
        expect(encode('6789')).toBe('6789');
    })
    test('testa se a funcao decode recebe uma string de 5 caracteres e retorna outra string de 5 caracteres', () => {
        expect(decode('12345').length).toBe(5);
    })
})