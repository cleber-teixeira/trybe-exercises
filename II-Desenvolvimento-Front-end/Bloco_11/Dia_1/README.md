# Bloco 11: Introdução ao React :atom_symbol:

## Dia 01: Introdução - Front-end :white_check_mark:

### O que aprendi neste dia? :books:

Dei início no desenvolvimento **Front-end** onde irei aprender a utilizar a biblioteca **_React_** para criar aplicações que se conectam com **APIs** e _introdução **React**_!

Aprendi os primeiros conceitos do **React**, os pilares sobre os quais a equipe do **_Facebook/Instagram_** o fez, assim como o motivo de essa tecnologia ter tido adoção tão massiva nos últimos anos.

E tomei ciência do que diferencia **React** de **JavaScript** e alguns conhecimentos sobre **_classes_**. Ao final deste dia tive todas as informações para codar um componente básico em **React**!

### Do que eu sou capaz: :rocket:

- Saber a melhor forma para instalar um gerenciador de pacotes.

- Inicializar um projeto em **React**.

- Utilizar **_JSX_** no **React**.

- Utilizar o `ReactDOM.render` para renderizar elementos numa página web.

- Utilizar o `import` para usar código externo junto ao seu.

### Exercícios - Dia 01 :memo:

- [ ] **1.** Crie um novo projeto utilizando `npx create-react-app nome-app` e acesse a pasta **_nome-app_**.

**_Obs.:_** ⚠️ Substitua o **nome-app** pelo que você desejar para seu app. ⚠️


- [ ] **2.** Crie uma lista de tarefas simples seguindo os passos abaixo:

- insira a função a seguir acima do seu **App**:

      const task = (value) => {
        return (
          <li>{value}</li>
        );
      }

- agora, chame a função dentro do seu componente **App** (não se esqueça da sintaxe **JSX**!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando `npm start`.

- por fim, crie uma **array** de compromissos e use a função `map` para que cada item do **array** apareça, como um item de lista, no seu componente **App**.

- [ ] **3.** Acesse [este link](https://www.freecodecamp.org/learn/front-end-libraries/react/) e faça cada um dos exercícios em ordem, sendo o último o "**_Create a Component with Composition_**"

- [ ] **4.** **Bônus -** Por último, entenda como funciona o código [deste link](https://codepen.io/nathansebhastian/pen/qgOJKe). Adicione mais dois **cards** com descrição e link a sua escolha.
