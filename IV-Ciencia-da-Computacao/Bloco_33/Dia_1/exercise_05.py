# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede(em m²).

m2 = 150


def can_of_paint(wall_size):
    can_of_paint_liter = 18
    can_of_paint_value = 80
    m2_coverage = can_of_paint_liter * 3
    calc_quantity = wall_size / m2_coverage
    amount_of_paint_cans = int(
        calc_quantity + (0 if calc_quantity % 1 == 0 else 1)
        # arredonda para cima
    )
    total_value = f"R$ {round(amount_of_paint_cans * can_of_paint_value, 2)}"
    print((amount_of_paint_cans, total_value))


can_of_paint(m2)
