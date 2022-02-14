# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo", caso não
# seja possível formar um triângulo.

# Dica:

#   Três lados formam um triângulo quando a soma de quaisquer dois lados
#       for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.

n1 = float(input('Primeiro lado: '))
n2 = float(input('Segundo lado: '))
n3 = float(input('Terceiro lado: '))


def find_the_triangle(num1, num2, num3):
    if num1 < num2 + num3 and num2 < num1 + num3 and num3 < num1 + num2:
        print("Parabéns! Você encontrou o Triângulo ", end="")
        if num1 == num2 == num3:
            print('Equilátero!')
        elif num1 != num2 != num3 != num1:
            print('Escaleno!')
        else:
            print('Isósceles')
    else:
        print("Valor inválido! Esses valores não formam um triângulo.")


find_the_triangle(n1, n2, n3)
