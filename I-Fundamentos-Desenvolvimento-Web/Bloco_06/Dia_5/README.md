# Bloco 6.5- CSS Responsivo - Mobile First :rocket:

---

## Parte I - Criar uma página para uma tela pequena :desktop_computer: :arrow_right: :iphone: :grin:

> Ajustar o CSS para melhorar a visualização da página.

#### 1. Realize as seguintes tarefas:

- [x] Faça o tamanho da fonte ser maior;
- [x] Faça o tamanho da fonte dos elementos `h1` ser menor;
- [x] Aumente o espaçamento entre as figuras;
- [x] Adicione um pouco de `margin` na página.

#### 2. Realize as seguintes tarefas:
**Dica:** Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual da página não funciona mais.

- [x] Guarde a largura da tela no ponto que você identificou que o layout atual não funcionou bem (por exemplo 800px) . Esse será o primeiro breakpoint do layout . Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar;
- [x] Crie uma media query no seu arquivo CSS , usando a dimensão em pixels que você guardou como o min-width do teste da media query . Dentro desse breakpoint , adicione os seguintes ajustes:
- [x] Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito) ;
- [x] Ajuste o tamanho da fonte;
- [x] Ajuste as margens da página;
- [x] Faça as imagens serem mostradas em duas colunas.
#### 3. Agora, você vai criar outro breakpoint para telas grandes.
- [x] Redimensione sua tela de novo para encontrar um novo breakpoint .
- [x] Crie uma nova media query no seu arquivo CSS usando a dimensão que você encontrou para telas grandes (por exemplo 1300px) , e realize os seguintes ajustes dentro do breakpoint :
- [x] Altere a cor de fundo;
- [x] Ajuste o tamanho da fonte;
- [x] Ajuste as margens da página;
- [x] Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.

## Parte II - Criando 3 layouts diferentes utilizando o mobile first :iphone: :computer: :desktop_computer: :sweat_smile:

> Utilizando a abordagem **_mobile first_** e **_media queries_**, **crie três versões de layout diferentes para essa página**. Cada _layout_ deve corresponder a um tamanho diferente de página (**_pequeno_**, **_médio_** e **_grande_**).

**Lembrete:** Faça pelo menos um `commit` para cada _layout_;

Para fazer isso de forma adequada, você deve prestar atenção no conteúdo da página e pensar em como mostrá-lo em cada um dos tamanhos de tela:

- [ ] Onde a lista de capítulos deve estar posicionada?
- [ ] Como a história deve ser mostrada?
- [ ] Como o cabeçalho deve ser posicionado?
- [ ] O que fazer com as informações do autor em cada tamanho de tela?

Talvez você precise alterar o **_HTML_** um pouco, adicionando elementos para facilitar a estilização, ou talvez mudando um bloco de lugar dentro da página.

## Parte III - Criando layouts para dispositivos móveis e para impressão :iphone: :computer: :desktop_computer: :printer: :flushed:

> O objetivo deste exercício é usar **_media queries_** para fazer a página acima parecer diferente na hora da impressão e em diferentes tamanhos de tela.

- Adicione uma **_media query_** no arquivo **_CSS_** e as regras necessárias para que a página se pareça com a imagem abaixo quando ela for impressa. Especificamente:

- [ ] Os elementos com `id header`, `navigation` e `footer` devem desaparecer;
- [ ] O elemento com `id aside` deve ser mostrado abaixo do conteúdo principal.

![alt text](https://course.betrybe.com//fundamentals/css-responsive/images/exercise_3_before_print.png)
**Visualização da página antes da impressão**

- Adicione uma **_media query_** no arquivo **_CSS_** e as regras necessárias para que a página se pareça com as imagens abaixo quando a tela for redimensionada para larguras menores. Especificamente:

- [ ] O elemento com `id aside` deve desaparecer;
- [ ] O elemento `body` não deve ter `padding`;
- [ ] As imagens não devem exceder a largura da tela;
- [ ] Os itens dentro do elemento `navigation` devem aparecer cada um em sua própria linha;
- [ ] O elemento com `id header` deve ser fixo, de forma que ele fique aparecendo sempre no topo da tela mesmo apos o usuário rolar a página.

![alt text](https://course.betrybe.com//fundamentals/css-responsive/images/exercise_3_before_small_phone.png)
**`240x320`: tela pequena**

![alt text](https://course.betrybe.com//fundamentals/css-responsive/images/exercise_3_before_android.png)
**`360x640` tela de smartphone**

# Bônus (opcional) :scream:

O vídeo abaixo mostra como você pode criar **_layouts_** responsivos utilizando o **_framework Bootstrap_**.
Use-o como referência para realizar o exercício **bônus** proposto a seguir.

[![Watch the video](https://th.bing.com/th/id/OIP.OiYMfekbYg-QgXQcBldlLAHaFj?w=240&h=180&c=7&o=5&pid=1.7)](https://youtu.be/n2tuBD2bwIw)

Agora que você já está ~fera~ em criar **_layouts_** específicos para diferentes tamanhos de tela utilizando a abordagem **_mobile first_**, que tal voltar à pagina que você criou na aula de **HTML Semântico** sobre o **_camarão louva deus_** e criar um _layout_ bem ~bacana~ para ela ser acessada a partir de telas menores? 🦐🦗🥊

**Sugestão:**

- [ ] Crie um _layout_ específico para _telas pequenas_ (**_smartphones_**); :iphone:
- [ ] Crie um _layout_ específico para _telas médias_ (**_tablets_**); :computer:
- [ ] Crie um _layout_ específico para _impressão_ (**_impressoras_**, _**salvar como PDF_**, etc) . 🖨

**Dica:** o **_Bootstrap_** não tem uma classe específica para o tipo de `media print`. Você deve definir a **_media query_** no seu arquivo **CSS** e estilizar conforme achar melhor! :wink:
