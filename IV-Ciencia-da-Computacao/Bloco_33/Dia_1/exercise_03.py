# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

# Por exemplo:

# n = 5

# *****
# *****
# *****
# *****
# *****

# Dica: Python sabe multiplicar sequências! Por exemplo, 3 * 'bla' resulta em
# blablabla. Isso se aplica a listas também, caso você precise.

def asterisk_square(value):
    line = value * "*"
    for count in range(0, value):
        print(line)


asterisk_square(5)
