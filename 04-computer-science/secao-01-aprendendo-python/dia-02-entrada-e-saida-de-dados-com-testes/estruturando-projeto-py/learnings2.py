natural_numbers = input('Insira vários valores naturais separados por espaço: ')
numbers_list = natural_numbers.split()

sum = 0
for number in numbers_list:
  if not number.isdigit():
    print(f'Erro ao somar valores, {number} é um valor inválido')
  else:
    sum += int(number)

print(f'A soma dos valores válidos foi {sum}')