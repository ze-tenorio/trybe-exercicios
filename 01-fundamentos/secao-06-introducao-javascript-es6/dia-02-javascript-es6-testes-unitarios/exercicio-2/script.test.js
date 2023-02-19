const myFizzBuzz = require('./script')

test('testa se a funcao recebe 15 e retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
})

test('testa se a funcao recebe 3 e retorna fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
})

test('testa se a funcao recebe 5 e retorna buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
})

test('testa se a funcao recebe 7 e retorna 7', () => {
    expect(myFizzBuzz(7)).toBe(7);
})

test('testa se a funcao recebe uma string e retorna false', () => {
    expect(myFizzBuzz('test')).toBe(false);
})