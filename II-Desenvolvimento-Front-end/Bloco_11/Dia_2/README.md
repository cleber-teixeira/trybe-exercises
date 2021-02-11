# Bloco 11: Introdução ao React :atom_symbol:

## Dia 02: Componentes React :white_check_mark:

### O que aprendi neste dia? :books:

Aprendi sobre os conceitos e utilização de **_componentes React_**, **_props_** e **_propTypes_**.

### Do que eu sou capaz: :rocket:

- Criar componentes **React** corretamente;

- Fazer uso de **_props_** corretamente;

- Fazer composição de **_componentes_** corretamente;

- Criar múltiplos **_componentes_** dinamicamente.

- Utilizar `PropTypes` para checar o tipo de uma `prop` no uso de um **_componente_**;

- Utilizar `PropTypes` para garantir a presença de **_props_** obrigatórias no uso de um **_componente_**;

- Utilizar `PropTypes` para checar que uma `prop` é um objeto de formato específico;

- Utilizar `PropTypes` para garantir que uma `prop` é um array com elementos de um determinado tipo.

### Exercícios - Dia 02 :memo:

> Você vai implementar de forma simplificada uma [Pokedex](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex)!! Para os que não estão familiarizados com o universo **Pokemon**, a **Pokedex** é uma enciclopédia de todos os **_pokemons_** na natureza. Para o seu caso, a sua aplicação precisa mostrar todos os **_pokemons_** presentes no arquivo `data.js` mencionado acima.
Você pode usar a imaginação para estilizar a sua aplicação. Entretanto, é obrigatório que você implemente pelo menos estes dois componentes:

- [ ] **1.** **_Pokemon_** : como o próprio nome diz, esse componente representa um **pokemon**. Esse componente recebe como entrada um **_objeto_** que contém informações referentes a um **pokemon** específico. Esse **componente** precisa retornar as seguintes informações obrigatórias para serem mostradas para quem usar a aplicação, essas informações devem ser validadas utilizando `PropTypes`:

- nome do pokemon;

- tipo do pokemon;

- peso médio do pokemon, acompanhado da unidade de medida usada;

- imagem do pokemon.


- [ ] **2.** **_Pokedex_**: esse componente representa a **_enciclopédia de_** **pokemons**. Esse componente recebe como entrada uma lista de **pokemons** para serem mostrados na tela. Para cada um desses **pokemons** recebidos, **Pokedex** chama o **_componente_** **Pokemon**.
Segue uma sugestão de implementação da aplicação:

<div align="center">
  <img src="pokedex.gif">
</div>
