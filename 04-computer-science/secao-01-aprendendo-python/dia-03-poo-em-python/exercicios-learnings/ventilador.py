# class Ventilador:
#     def __init__(self, cor, potencia, tensao, preco):
#         self.preco = preco
#         self.cor = cor
#         self._potencia = potencia
#         self._tensao = tensao
#         self.__ligado = False
#         self.__velocidade = 0
#         self.__velocidade_maxima = 3
#         self.__corrente_atual_no_motor = 0
from eletrodomestico import Eletrodomestico

class Ventilador(Eletrodomestico):
    pass

ventilador_preto = Ventilador('Preto', 200, 127, 200)

print(ventilador_preto)