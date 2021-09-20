# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

values = [8, 10, 7, 7, 9, 10, 8]


def average(list):
    avg = ""
    sum_num = 0
    for value in list:
        sum_num += value
        avg = sum_num / len(list)
    print(f"A média é: {round(avg, 1)}")


average(values)
