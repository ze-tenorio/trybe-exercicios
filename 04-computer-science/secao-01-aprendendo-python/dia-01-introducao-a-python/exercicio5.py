# 1 litro -> 3 metros quadrados
# tinta vendida em latas de 18 litros -> 1 lata = 54 metros
# 1 lata = 80 reais

def calc_paint(wall_size):
    litters = round(wall_size / 3)
    value = 80
    cans = round(litters / 18)
    if cans <= 1:
        cans = 1
    else:
        value = cans * value
    return (cans, value)

print(calc_paint(108))