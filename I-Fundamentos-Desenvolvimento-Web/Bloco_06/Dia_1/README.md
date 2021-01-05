# Bloco 06: HTML e CSS: Forms, Flexbox e Responsivo

## Dia 01: HTML & CSS - Forms

### O que aprendi neste dia? :books:

Aprendi sobre formulários em **_HTML_**, que são uma forma de enviar informações para outra página do seu site ou para um servidor.

### Do que eu sou capaz: :rocket:

- Criar formulários em **_HTML_** com as tags: `input`, `button`, `textarea`, `select`, `form`.


### Exercícios - Dia 01 :memo:

# Criando um formulário de currículo :clipboard:

* Crie um arquivo **_HTML_** chamado **form.html** para o formulário.
* Caso julgue necessário, crie estilos **_CSS_** para o seu formulário, de acordo com a sua imaginação. Coloque-os em um arquivo **styles.css**.
* Crie também um arquivo **script.js** para seu código **_JavaScript_**.

Vamos criar um formulário de cadastro de currículo com base na especificação a seguir:

**1.** Crie um `<fieldset>` para os seguintes dados pessoais: :white_check_mark:
  - [x] Nome - Texto
      * Limite de 40 caracteres
      * Campo obrigatório

  - [x] Email - Texto
      * Limite de 50 caracteres
      * Campo obrigatório

  - [x] CPF - Texto
      * Limite de 11 caracteres
      * Campo obrigatório

  - [x] Endereço - Texto
      * Limite de 200 caracteres
      * Campo obrigatório

  - [x] Cidade - Texto
      * Limite de 28 caracteres
      * Campo obrigatório

  - [x] Estado - ComboBox
      * Todos os estados do Brasil
      * Utilize estruturas de repetição via **_JavaScript_** para gerar os `<option>`
      * Campo obrigatório

  - [x] Tipo - Radio Button
      * Casa, Apartamento
      * Campo obrigatório

**2.** Crie outro `<fieldset>` para dados do seu último emprego

  - [x] Resumo do currículo - TextArea
      * Limite de 1000 caracteres
      * Campo obrigatório

  - [x] Cargo - Texto
      * Limite de 40 caracteres
      * Campo obrigatório

  - [x] Descrição do cargo - Texto
      * Limite de 500 caracteres
      * Campo obrigatório

  - [ ] Data de início - Texto
      * Verificar o formato da data dd/mm/aaaa .
      * O dia deve ser > 0 e <= 31.
      * O mês deve ser > 0 e <= 12.
      * O ano não pode ser negativo.
      * Caso alguma das condições for inválida no momento do envio do formulário, exibir mensagem de erro contextualizada.
      * Campo obrigatório

3.1 Logo abaixo do formulário, crie um botão que:

   - [ ] Chame uma função **_JavaScript_** e interrompa o fluxo automático do form utilizando o `preventDefault()`.
   - [ ] Execute as validações que foram pedidas ao longo da montagem do formulário.
   - [ ] Monte uma `<div>` com o consolidado dos dados que foram inseridos no formulário.

4.1. Crie um botão **Limpar** que limpa todos os campos do formulário e a `<div>` com seu currículo também.
