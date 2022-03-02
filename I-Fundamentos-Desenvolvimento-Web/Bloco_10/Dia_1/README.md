# Bloco 10: Testes automatizados com Jest :page_with_curl:

## Dia 01: Primeiros passos no Jest :white_check_mark:

### O que aprendi neste dia? :books:

Aprendi o que são e para que servem testes unitários. Já sei usar o **módulo** `assert` do **_NodeJS_** para fazer asserções simples sobre suas funções. Também já aprendi a testar programas maiores que envolvem diferentes fluxos de execução. E neste dia aprendi a utilizar o **Jest**, um _framework_ de testes unitários para **_JavaScript_** desenvolvido pelo **Facebook**.

### Do que eu sou capaz: :rocket:

- Utilizar **Jest** para escrever testes unitários.

### Exercícios - Dia 01 :memo:


>Parte I (fonte: Bloco 07 / Dia 03)
- [x] **1.** Refaça os exercícios **1** a **5** do conteúdo de **_Testes unitários em JavaScript_**, dessa vez utilizando **Jest**.

>Parte II (Projeto _Playground Functions_ do Bloco 04)
- [ ] **1.** Para as funções `encode` e `decode` crie os seguintes testes:

- [ ] **2.** Teste se `encode` e `decode` são funções;

- [ ] **3.** Para a função `encode` teste se as vogais **a**, **e**, **i**, **o**, **u** são convertidas em **1**, **2**, **3**, **4** e **5**, respectivamente;

- [ ] **4.** Para a função `decode` teste se os números **1**, **2**, **3**, **4** e **5** são convertido nas vogais **a**, **e**, **i**, **o**, **u**, respectivamente;

- [ ] **5.** Teste se as demais _letras_/_números_ não são convertidos para cada caso;

- [ ] **6.** Teste se a **_string_** que é retornada pelas funções têm o mesmo número de caracteres que a **_string_** passada como parâmetro.

- [ ] **7.** A função `techList` recebe como parâmetros um **array** contendo uma lista de tecnologias e uma **_string_** com um nome. Para cada tecnologia no **array** a função cria, em _ordem alfabética_, um objeto com a seguinte estrutura:

      {
        tech: 'nomeTecnologia',
        name: name,
      }
  - Implemente a função `techList` a partir dos testes abaixo. Experimente refatorar a função que você criou para esse projeto! **É importante nunca alterar os testes ou as variáveis já escritas no código**.

  - [ ] **8.** A função `hydrate` recebe uma **_string_** no formato `"numero bebida"`, e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água para não ter ressaca.

  - Implemente a função `hydrate` a partir dos testes abaixo. Experimente refatorar a função que você criou para o projeto **_Playground Function_**! **É importante nunca alterar os testes ou as variáveis já escritas no código.**

> Bônus
  - [ ] Você está pronto para um desafio?! Neste exercício, você irá praticar o desenvolvimento orientado a testes implementando:

- A função;

- Os testes para essa função;

Você deve criar uma função que receba dois parâmetros: o **id** do funcionário e a informação disponível sobre ele (`firstName`, `lastName`, `specialities`). Você também deverá criar os **testes** para essa função. Sua função deverá então retornar os resultados da busca pelo **id** para aquele funcionário e a informação consultada. Caso o **id** _não conste_ no quadro de funcionários, sua função deve retornar o **erro** `"ID não identificada"`. Se a informação que se quer acessar _não existir_, a função deve retornar o **erro** `"Informação indisponível"`.

Como ponto de partida, comece implementando um teste para checar se a função existe. Execute o teste que você escreveu e implemente, na função, a funcionalidade que passará nesse teste. Repita esse processo até que todos os retornos esperados sejam testados.
