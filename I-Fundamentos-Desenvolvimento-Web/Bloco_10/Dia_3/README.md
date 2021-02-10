# Bloco 10: Testes automatizados com Jest :page_with_curl:

## Dia 03: Jest - Simulando comportamentos :white_check_mark:

### O que aprendi neste dia? :books:

As **Mock functions** são ferramentas que nos permitem simular o comportamento de funções reais.
Imagine o seguinte cenário: em um teste, você tem funções com retornos variáveis, como requisições (imagine uma API que retorne um erro de indisponibilidade em vez do resultado esperado, por exemplo) e funções de retorno aleatório. Não há como testar se de fato elas, ou a lógica que depende delas, estão funcionando. A depender do retorno, o teste às vezes passará, e às vezes não.
Para adereçar esse problema, podemos _simular_ o comportamento de tais funções no contexto do teste. No **_Jest_**, as **Mock functions** simulam o comportamento de uma função real, apenas no escopo do teste, e nos dão controle sobre qual retorno essa função envia e quantas vezes ela foi chamada, entre outras coisas.

### Do que eu sou capaz: :rocket:

- Utilizar o **_mock functions_** do **Jest** para simular funções e seus retornos;
- Testar requisições a uma **API** sem a necessidade de ter uma conexão real com ela.

### Exercícios - Dia 03 :memo:

- [ ] **1.** Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

- [ ] **2.** Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

- [ ] **3.** Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.


- [ ] **4.** Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

- [ ] **5.** Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

- [ ] **6.** Crie uma função que faça requisição para a api [dog pictures](https://dog.ceo/dog-api/) . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.

- [ ] **Bônus -**
O código abaixo utiliza uma API de piadas e implementa o fetchJoke, que é um gerador de piadas ruins. As piadas são geradas aleatoriamente através do endpoint armazenado em API_URL. Faça um teste que verifique a chamada dessa API para um resultado específico. Para isso, faça um mock do fetch, que faz a chamada à API, utilizando os seguintes dados:

      {
        'id': '7h3oGtrOfxc',
        'joke': 'Whiteboards ... are remarkable.',
        'status': 200
      }

**Código do exercício**

      const API_URL = 'https://icanhazdadjoke.com/';

      const fetchJoke = () => {
        return fetch(API_URL, { headers: { Accept: 'application/json' }})
          .then(response => response.json())
          .then(data => data.joke);
      };
