# Bloco 09: JavaScript e Promises :page_with_curl:

## Dia 02: JavaScript Promises :white_check_mark:

### O que aprendi neste dia? :books:

**_Callbacks_** são utilizadas em toda parte no **JavaScript**. A depender da complexidade do que você quer fazer, no entanto, as _callbacks_ podem, muito rápido, ficar confusas e pouco legíveis. Para tornar o código mais compreensível, surgem as **_Promises_**. E, com as _promises_, neste dia aprendemos a fazer uma página web que colhe dados de um serviço terceiro utilizando a **_API_** dele.

### Do que eu sou capaz: :rocket:

- Utilizar **_Promises_** para fazer chamadas assíncronas;

- Fazer integrações com **_APIs_** de terceiros.

### Exercícios - Dia 02 :memo:



- [ ] **1.** Como o primeiro exercício, vamos usar a função `fetch`, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!.

- [ ] **2.** Agora faça uma **_Promise_**. Primeiramente, _instancie_ uma _Promise_. Dentro dela, você deve produzir um _array_ com **dez** números _aleatórios_ de **1** a **50** e _elevá-los todos ao **quadrado**_. Se a **soma** de todos esses elementos for _inferior_ a **8000**, a _promise_ deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um `then` e um `catch` à _Promise_ com 'qualquer coisa' dentro só para que o código funcione.
**_Obs.:_** Tente usar **Higher Order Functions!** Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, _funções_!

- [ ] **3.** Quando a **_promise_** for _resolvida com sucesso_, retorne o **resultado da divisão** desse número por **2**, **3**, **5** e **10** em um **array**.

- [ ] **4.** Quando a **_promise_** for _rejeitada_, imprima, via `console.log`, a frase **_"É mais de oito mil! Essa promise deve estar quebrada!"_**

- [ ] **5.** Quando a **_promise_** for _bem-sucedida_, encadeie nela uma **_segunda Promise_** que **some** os _elementos do array_.
