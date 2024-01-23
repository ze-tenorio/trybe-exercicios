try:
  with open('students.txt', mode='r') as file:
    reproved = []
    for line in file:
      data = line.split()
      if int(data[1]) < 6:
        reproved.append(f'{data[0]}\n')

  with open('reprovados.txt', mode='w') as file:
      file.writelines(reproved)
except FileNotFoundError:
  print('Arquivo inexistente!')
else:
  print('Arquivo manipulado e fechado com sucesso')
finally:
  print('Fim da tentativa de ler e manipular os arquivos')
