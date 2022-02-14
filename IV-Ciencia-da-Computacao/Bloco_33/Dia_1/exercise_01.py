# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def max_num(num_1, num_2):
    if num_1 <= num_2:
        print(f"O maior valor é: {num_2}")
    else:
        print(f"O maior valor é: {num_1}")


max_num(10, 15)
