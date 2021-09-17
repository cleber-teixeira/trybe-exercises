# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas",
# "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

names_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def big_name(names):
    result = names[0]
    for name in names:
        if len(result) <= len(name):
            result = name
    print(result)


big_name(names_list)
