# Bloco 10: Testes automatizados com Jest :page_with_curl:

## Dia 02: Testes Assíncronos :white_check_mark:

### O que aprendi neste dia? :books:

Já sei como instalar, configurar e utilizar os principais **matchers** do **Jest**.
Neste dia aprendi como **_testar códigos assíncronos_**, como reaproveitar configurações entre testes e como **_separá-las por escopo_**.

### Do que eu sou capaz: :rocket:

- Escrever testes para **códigos assíncronos** com diferentes padrões;

- **Reaproveitar configurações** para diversos testes através do uso de `beforeEach` e `afterEach`;

- **Dividir testes** e suas respectivas **configurações** em grupos separados por **escopos** através do uso de `describe`;

### Exercícios - Dia 02 :memo:

- [ ] **1.** Escreva um teste que verifique a chamada do **_callback_** de uma função `uppercase` , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os **falso-positivos** em _testes assíncronos_.

- [ ] **2.** Utilizando a sintaxe de **Promise**, faça um teste que verifique o resultado da função `getUserName` para o caso em que o _usuário é encontrado_, e também um teste para o caso em que o _usuário não é encontrado_.
**Dica:** Veja os dados **_falsos_** utilizados no banco de dados, disponíveis na variável `users`, para saber quais **IDs** existem.

- [ ] **3.** Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de `async`/`await`.
**Dica:** Utilize o `try`/`catch` para o caso de **erro**.


- [ ] **4.** O código a ser trabalhado busca no **_GitHub_** de um usuário, de acordo com a `URL`, seus repositórios, e retorna uma lista como resultado. Dada a `URL 'https://api.github.com/orgs/tryber/repos'`, faça um teste que verifique que os repositórios `'sd-01-week4-5-project-todo-list'` e `'sd-01-week4-5-project-meme-generator'` se encontram nessa lista.

- [ ] **5.** Para este exercício, tente adivinhar a saída dos `console.log` dos testes a ser trabalhados sem executá-los, e veja se compreendeu bem o funcionamento do `beforeEach` e do `afterEach`.
Após escrever o que imagina que será o resultado, execute os testes e veja se acertou.

- [ ] **6.** Nesse exercício, você irá criar funções parecidas com o código a ser trabalhado - o mesmo que foi usado como exemplo sobre os testes de **promise**.
Use como base para os exercícios a seguir:

- [ ] **6.1.** Adicione uma funcionalidade para buscar pelo **nome** do animal - crie uma função que deverá passar no teste abaixo.

**Dica:** use o código do exemplo dado para criar uma nova função, analise os testes antes de iniciar.

- [ ] **6.2.** Adicione uma nova funcionalidade para buscar pela **idade** dos animais. O retorno deve ser um **array** de **objetos**, mas, caso não ache nenhum, retorne uma mensagem de **erro**. Escreva tanto a função como o seu teste.
