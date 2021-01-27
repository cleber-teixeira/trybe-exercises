# Bloco 09: JavaScript e Promises :page_with_curl:

## Dia 01: JavaScript Assíncrono e Callbacks :white_check_mark:

### O que aprendi neste dia? :books:

**Aprendi sobre:**

- Operações assíncronas;

- `callbacks`

### Do que eu sou capaz: :rocket:

- Aplicar corretamente operações assíncronas;

- Utilizar `callbacks` corretamente.

### Exercícios - Dia 01 :memo:



- [ ] **1.** Dado o código, qual a ordem de finalização de execução das linhas comentadas?

- [ ] **2.** Dado o código com algumas mudanças, qual a ordem de finalização de execução das linhas comentadas?

- [ ] **3.** A função `getPlanet`, _imprime_ o planeta **Marte** de forma **_síncrona_**. Modifique `getPlanet`, de forma que **Marte** seja _impresso_ **_assincronamente_**, depois de **4** segundos.

- [ ] **4.** Suponha que você precise simular uma mensagem enviada do robô **_Curiosity_** de _Marte_ para a _Terra_. O **_Curiosity_** envia para a _Terra_ a **temperatura** atual em _Marte_, gastando um tempo variável de até **5** segundos para que termine o envio. Crie a função `sendMarsTemperature`, que _imprime_ a **temperatura** em _Marte_.

- [ ] **5.** Agora que você fez a função que envia a _temperatura_ de _Marte_, suponha que você consiga enviar para o robô **_Curiosity_** o que você deseja fazer, uma vez obtida com sucesso a _temperatura_ em _Marte_. Logo, adicione na função `sendMarsTemperature` um `callback` que contenha as ações a serem tomadas em cima da _temperatura_.

- [ ] **6.** Por fim, o robô **_Curiosity_** tem uma taxa de sucesso de envio de mensagem de **60%** devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função `sendMarsTemperature` um outro `callback` que contenha as ações a serem tomadas em caso de **falha**.
