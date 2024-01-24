from eletrodomestico import Eletrodomestico

class Secador(Eletrodomestico):
    def __str__(self):
        return f'Esse secador é {self.cor} e custa {self.preco}'

secador_vermelho = Secador("Vermelho", 200, 127, 200)
print(secador_vermelho)