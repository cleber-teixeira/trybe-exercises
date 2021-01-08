# Bloco 06: HTML e CSS: Forms, Flexbox e Responsivo

## Dia 04: CSS Flexbox - Parte 2

### O que aprendi neste dia? :books:

Aprendi mais sobre **_CSS Flexbox_**.

Na aula anterior aprendi sobre as propriedades **Flexbox** que atuam no container e neste dia 6.4 foi passado as propriedades que atuam nos items.

### Do que eu sou capaz: :rocket:

- Utilizar **_CSS Flexbox_** para criar layouts flexíveis;
- Utilizar **_CSS Flexbox_** para alterar o comportamento de _items_.


### Exercícios - Dia 04 :memo:

# TRYFLIX :p óstas: :film_projector:

### Parte 1

**1.** Adicione uma propriedade que defina o tamanho **Flexbox** base para o container da imagem `268px` e para o container do menu `500px`. Após aplicar as propriedades o `header` deverá estar similar a imagem abaixo:

![alt text](img/exercicio-1.jpeg)
- [x] **Header Exercicio 1**

**2.** Adicione uma propriedade **Flexbox** que modifique a **ordem** em que a logomarca e os itens do menu aparecem na tela. Após aplicar a propriedade o `header` deverá estar similar a imagem abaixo:

![alt text](img/exercicio-2.jpeg)
- [x] **Header Exercicio 2**

**3.** Adicione uma propriedade **Flexbox** que modifique o tamanho padrão do container do menu quando a largura da página for maior que `768px`. Após aplicar a propriedade o `header` deverá estar similar a imagem abaixo:

![alt text](img/exercicio-3.jpeg)
- [x] **Header Exercicio 3**

**4.** Utilize a propriedade `align-self` no elemento correto para que o `header` da página tenha o seguinte comportamento:

![alt text](img/exercicio-4.jpeg)
- [x] **Header Exercicio 4**

### Parte 2

Vamos continuar praticando com a continuação do `header` realizado no exercício acima e construir um `main` com o restante de sua página. Copie o restante dos códigos **HTML** e **CSS** e aplique a seus documentos criados anteriormente.

**HTML**

    <main class="main-container">
        <div class="movie-container">
            <section>
            <h2>Assista hoje</h2>
            <div class="card-container">
                <div>FILMES 1</div>
                <div>FILMES 2</div>
                <div>FILMES 3</div>
                <div>FILMES 4</div>
                <div>FILMES 5</div>
                <div>FILMES 6</div>
                <div>FILMES 7</div>
                <div>FILMES 8</div>
                <div>FILMES 9</div>
            </div>
            </section>
            <article>
            <h2>Mais assitidos</h2>
            <div class="card-container">
                <div>FILMES 1</div>
                <div>FILMES 2</div>
                <div>FILMES 3</div>
                <div>FILMES 4</div>
                <div>FILMES 5</div>
                <div>FILMES 6</div>
                <div>FILMES 7</div>
                <div>FILMES 8</div>
                <div>FILMES 9</div>
            </div>
            </article>
        </div>
        
        <aside class="aside-container">
            <h3>Últimas notícias</h3>

            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

            <h4>Title</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>
        </aside>
        </main>

**CSS**

    .main-container {
    display: flex;
    flex-wrap: wrap;
    }

    .movie-container {
    display: flex;
    flex-direction: column;
    }

    .movie-container h2 {
    margin: 40px 0;
    text-align: center;
    }

    .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    }

    .card-container div {
    align-items: center;
    background-color: #5C687C;
    border: black solid 1px;
    display: flex;
    height: 150px;
    justify-content: center;
    margin: 10px;
    }

    .aside-container {
    display: flex;
    flex-direction: column;
    margin: 20px;
    }

    .aside-container h3, h4 {
    margin-bottom: 10px;
    text-align: center;
    }

    .aside-container p {
    margin: 10px 0;
    text-align: justify;
    }


**1.** Aplique uma base de `350px` para seu container `aside`. Deverá ficar similar a imagem abaixo:

![alt text](img/exercicio-part2-1.png)
- [x] **Main do Exercicio 1**

**2.** Aplique um alinhamento para centralizar e outro para expandir. Seu `aside` apresentar o seguinte comportamento:

![alt text](img/exercicio-part2-2.png)
- [x] **Main do Exercicio 2**

**3.** Adicione uma propriedade que faça com que seu container de filmes tenha uma base de `700px` e outra base de `16%` para as `div` do container de seu card. Deve ficar similar a imagem abaixo:

![alt text](img/exercicio-part2-3.png)
- [x] **Main do Exercicio 3**

**4.** Aplique uma propridade com o valor `10` que expanda o container de filmes. Deve ficar similar a imagem abaixo:

![alt text](img/exercicio-part2-4.png)
- [ ] **Main do Exercicio 4**

**5.** Adicione uma propriedade com o valor `1` que faça com que suas `div` do container de filmes ocupe todo o espaço em branco. Deve ficar similar a imagem abaixo:

![alt text](img/exercicio-part2-5.png)
- [ ] **Main do Exercicio 5**



### Parte 3 (opcional)

- Para finalizar, escolha alguns exercícios antigos como, por exemplo, o portfólio ou até mesmo os projetos de **_HTML_**, **_CSS_** e **_JavaScript_** e estruture as páginas utilizando **Flexbox**.



**Spoiler:** Caso queira praticar ainda mais, na seção de recursos adicionais existem alguns exercícios gamificados que são super divertidos. :rocket:
