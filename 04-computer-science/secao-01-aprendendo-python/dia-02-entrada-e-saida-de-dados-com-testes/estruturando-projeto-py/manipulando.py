my_name_and_age = input('Digite seu nome e idade: ')
LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]

with open('arquivo.txt', mode='w') as file:
    file.write('Sarah 45\n')
    file.write('José 24\n')
    print(my_name_and_age, file=file)
    file.writelines(LINES)
    print(file.closed)

with open('arquivo.txt', mode='r') as file:
    for line in file:
        print(line)

print(file.closed)