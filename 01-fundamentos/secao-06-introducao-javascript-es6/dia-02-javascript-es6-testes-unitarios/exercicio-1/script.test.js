function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
}
  
// implemente seus testes aqui

it('verifica se a funcao recebe [1, 2, 3, 4], 3 e retorna [1, 2, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
})

it('verifica se a funcao recebe [1, 2, 3, 4], 3 e nao retorna [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
})

it('verifica se a funcao recebe [1, 2, 3, 4], 5 e retorna [1, 2, 3, 4]', () => {
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})