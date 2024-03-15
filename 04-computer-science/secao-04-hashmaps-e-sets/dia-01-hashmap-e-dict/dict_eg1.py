# Instanciando a classe Dict
employee_registry = {}

# Inserindo dados
# objeto[chave] = valor
employee_registry[14] = 'name1'
employee_registry[23] = 'name2'
employee_registry[10] = 'name3'
employee_registry[9] = 'name4'
print(employee_registry)

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[10] = 'name30'
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")

exercicio_cinco = {elemento: elemento * 2 for elemento in range(3, 21)}
print(exercicio_cinco)


def count_chars(str):
    counter = dict()
    for c in str:
        if c not in counter:
            counter[c] = 1
        else:
            counter[c] += 1
    return counter


print(count_chars('abobora'))

five_keys = exercicio_cinco.keys()

for key in five_keys:
    exercicio_cinco[key] = key * 3

print(exercicio_cinco)
