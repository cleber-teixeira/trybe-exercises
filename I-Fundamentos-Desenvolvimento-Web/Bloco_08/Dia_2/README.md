# Bloco 08: Higher Order Functions do JavaScript ES6 :page_with_curl:

## Dia 02: JavaScript ES6 - Higher Order Functions - map e filter :white_check_mark:

### O que aprendi neste dia? :books:

Aprendi sobre outras duas _Higher Order Functions_: `Array.map` e o `Array.filter`
A função `map` é, talvez, uma das mais poderosas (e complexas!) funções para manipulação e criação de **_arrays_**. Em conjunto, essas **HOFs** deixarão seu código mais legível, conciso e expressivo.

### Do que eu sou capaz: :rocket:

- Utilizar a função `Array.map` para **manipular** e construir **_arrays_**;
- Utilizar a função `Array.filter` para **filtrar** um **_array_**;
- Aprender a usar de forma conjunta as **_Higher Order Functions_**.

### Exercícios - Dia 02 :memo:

>Nos exercícios a seguir, trabalhará com uma estrutura de dados representando uma _lista de livros_, contendo informações como _nome do livro_, _gênero_, _pessoa autora do livro_ e _data de lançamento_.
Em cada exercício, será pedido para que encontre ou produza alguma informação a respeito dessa lista utilizando as funções que foram apresentadas neste dia. Todos os exercícios contêm um _código base_ que foi salvo em um arquivo nomeado conforme o número do exercício, onde deve ser completado a função em branco.

- [x] **1.** Crie um `array` com `strings` no formato `NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA`.
**_Dica:_** use a função `map`.

- [ ] **2.** Construa um `array` de _objetos_ a partir do `array` de **_livros_**. Cada _objeto_ deve conter uma propriedade `author`, com o **_nome_** da pessoa autora do livro, e uma propriedade `age` com a **_idade_** dessa pessoa quando o livro foi _lançado_. O `array` deve ser _ordenado_ por **_idade_**, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi _lançado_.
**_Dica:_** use a função `map`, `sort`.

- [ ] **3.** Crie um `array` com todos os _objetos_ que possuem gênero **_ficção científica_** ou **_fantasia_**.
**_Dica:_** use a função `filter`.

- [ ] **4.** Crie um `array` _ordenado_ pelos livros com mais de **60 anos** de publicação e _ordene-o_ pelo livro _mais velho_.
**_Dica:_** use a função `filter` e `sort`.

- [ ] **5.** Crie um `array` em _ordem alfabética_ apenas com os nomes de todas as pessoas autoras de **_ficção científica_** ou **_fantasia_**.

- [ ] **6.** Crie um `array` com o **nome** de todos os livros com mais de **60 anos** de publicação.

- [ ] **7.** Encontre o **nome** do livro escrito pela pessoa cujo nome registrado começa com **_três iniciais_** (_terminam com um ponto_).
