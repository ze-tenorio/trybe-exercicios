def check_bigger_name(list):
    bigger_name = list[0]
    for name in list:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name

print(check_bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))