# Bootstrap Avançado

## Menu
[Aula 1 - Cards](#aula-1---cards)  
[Aula 2 - Carousel](#aula-2---carousel)  


## Aula 1 - Cards
Nesta aula vamos aprender a baixar o arquivo CSS e JS do Bootstrap e deixá-lo junto do nosso repositório.

Quando baixamos bibliotecas de terceiros, temos que colocar esses arquivos na pasta `lib`.

Aqui não estamos trabalhando com o `index.html`, vamos trabalhar com a produção de cards.

### O que são cards?
Cards são componentes visuais usados para exibir informações de forma organizada.

**Exemplos:**
* Produtos em um E-commerce (cada produto é um card)
* Posts em redes sociais
* Artigos de um blog
* Painéis de um dashboard

```html
<div class="container">
    <div class="row">
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    Cabeçalho do card
                </div>
                <img src="https://placehold.co/100x100" alt="">
                <div class="card-body">
                    <h4 class="card-title">Título do Card</h4>
                    <h5 class="card-subtitle">Subtítulo do Card</h5>
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quisquam sequi repellendus excepturi perspiciatis porro quod nisi aspernatur placeat eveniet!
                    </p>
                    <a href="#" class="btn btn-primary">Botão Link</a>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Estrutura:
Estamos estruturando um container que vai conter alguns cards. O processo envolve:

1. Criar uma `div` com classe `container` para sinalizar que teremos uma parte separada do site.
2. Criar uma `div` com classe `row`, que representa uma linha do layout grid.
3. Definir quantos cards queremos na tela. Lembrando que o Bootstrap trabalha com um esquema de 12 colunas; neste caso específico, queremos 3 cards, então cada um ocupa 4 colunas: `div` com classe `col-4`.
4. Estrutura de cada card:
    * `card-header` → Cabeçalho do card     
    * `card-body` → Corpo do card, que pode conter:
        * `card-title` → Título do card     
        * `card-subtitle` → Subtítulo do card     
        * `card-text` → Texto do card     
        * `<a href="#" class="btn btn-primary">Botão Link</a>` → Um link com estilização de botão.
    * `card-footer` → Rodapé do card

### Personalizações específicas:
* `text-bg-dark` → Adiciona estilo escuro à `div` com classe `card`.
* `card-img-overlay` → Torna a imagem um plano de fundo para todo o card. Requer uma estilização CSS para destacar o texto.

```html
<div class="col-4">
    <div class="card text-bg-dark">
        <img src="https://cdn.pixabay.com/photo/2022/02/07/12/17/street-6999284_960_720.jpg" alt="">
        <div class="card-img-overlay">
            <h4 class="card-title">Título do Card</h4>
            <h5 class="card-subtitle">Subtítulo do Card</h5>
            <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quisquam sequi repellendus excepturi perspiciatis porro quod nisi aspernatur placeat eveniet!
            </p>
            <a href="#" class="btn btn-primary">Botão Link</a>
        </div>
    </div>
</div>
```

```css
.card-img-overlay {
    background-color: rgba(0, 0, 0, 0.7);
}
```

### Card para um artigo de blog (aplicação real):
```html
<div class="col-4">
    <article class="card">
        <header class="card-header">
            Desenvolvimento Web
        </header>
        <img src="media/tela_pc.jpg" alt="">
        <div class="card-body">
            <h4 class="card-title">Cards do Bootstrap</h4>
            <p class="card-text">
                Conheça os cards do Bootstrap e suas variações.
            </p>
            <a href="#" class="btn btn-primary">Leia mais</a>
        </div>
        <footer class="card-footer">
            Postado em <time>28/03/2025 às 15:27</time>
        </footer>
    </article>
</div>
```

**Notas:**
1. Trocamos a `div` por `article` para uma sintaxe mais semântica.
2. Adicionamos um título ao `card-header` (categoria do artigo).
3. Substituímos o placeholder por uma imagem mais adequada.
4. Adicionamos o título do artigo no `card-title`.
5. Removemos o subtítulo.
6. Alteramos o texto do link para "Leia mais".
7. Adicionamos um `footer` com a tag `time` indicando a data/hora da publicação.

## Aula 2 - Carousel
Nesta aula vamos aprender a fazer um carrossel utilizando o Bootstrap. Fiquei travado em uma parte do código; mesmo seguindo as orientações do professor, não estava funcionando. Eu fui lendo linha por linha, até que resolvi consultar o código pronto no final. Acredito que houve alguma pequena alteração no Bootstrap entre o período em que a aula foi gravada e o momento em que fiz o curso, o que gerou esse bug — ou foi apenas algum detalhe que não percebi mesmo. Mas consegui achar a solução! Irei explicar mais à frente, depois de escrever a estrutura básica do carrossel.

### Criando um carrossel
1. Criar uma `div` com a classe `container` ou utilizar outra de sua escolha que tenha um tamanho definido.
```html
<div class="container"></div>
```

2. Criar uma `div` com um `id` para o carrossel, as classes `carousel slide` e o atributo `data-bs-ride="carousel"`.
```html
<div class="container">
    <div id="x" class="carousel slide" data-bs-ride="carousel">
        
    </div>
</div>
```

3. Criar uma `div` com a classe `carousel-inner` e `div(s)` filhas com a classe `carousel-item`. A primeira `div` deve ter uma classe adicional `active` para indicar o slide ativo quando a página for carregada. Nessa `div` com a classe `carousel-item` você deve colocar imagens com a tag `<img>` e legendas das imagens do carrossel dentro de uma `div` com a classe `carousel-caption`. Aqui você já consegue ter um carrossel funcional.
```html
<div class="container">
    <div class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="" alt="">
                <div class="carousel-caption">
                    
                </div>
            </div>
        </div>
    </div>
</div>
```

### Adicionando funções extras
4. Para adicionar controles ao carrossel, crie fora da `div` `carousel-inner` dois botões `button` com uma tag filha `span`, usando as seguintes classes e atributos `data-bs-*`:
```html
<button data-bs-target="#x" data-bs-slide="prev" class="carousel-control-prev" type="button">
    <span class="carousel-control-prev-icon"></span>
</button>

<button data-bs-target="#x" data-bs-slide="next" class="carousel-control-next" type="button">
    <span class="carousel-control-next-icon"></span>
</button>
```

5. Para adicionar a indicação de qual slide está ativo no carrossel, é necessário adicionar uma `div` com a classe `carousel-indicators`, contendo `button(s)` na quantidade correspondente de slides no carrossel:
```html
<div class="carousel-indicators">
    <button type="button" data-bs-target="#x" class="active" data-bs-slide-to="0"></button>
    <button type="button" data-bs-target="#x" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#x" data-bs-slide-to="2"></button>
</div>
```

### Explicando as classes – Utilizando o Bootstrap para aplicar CSS aos elementos
* `container` → Centraliza e define um tamanho máximo para o conteúdo.
* `carousel` → Aplica o CSS para dar a aparência e estrutura de um carrossel ao elemento.
* `slide` → Define a transição dos slides com a animação de deslizamento.
* `carousel-fade` → Aplica a animação de transição do tipo "fade" entre os slides.
* `carousel-inner` → Define a área que os slides do carrossel vão ocupar; funciona como uma `<ul>` em uma lista.
* `carousel-item` → Equivalente a um `<li>`, representa cada slide com imagem e legenda.
* `active` → Define o slide como o primeiro a ser exibido ao carregar a página.
* `carousel-caption` → Área destinada à legenda ou texto sobre o slide. Pode conter título, parágrafo ou outros elementos HTML.
* `carousel-control-next(prev)` → Estiliza os botões de navegação lateral, definindo tamanho, posicionamento e área clicável.
  * `carousel-control-next-icon(prev-icon)` → Classe adicionada ao `<span>` que insere o ícone de seta no botão.

### Atributos de comportamento (`data-bs-*`) – Aplicam o comportamento JavaScript e tornam o site interativo
* `data-bs-ride="carousel"` → Ativa a movimentação automática do carrossel.
* `data-bs-interval="milissegundos"` → Define o tempo que o slide ficará visível antes da troca.
* `data-bs-target="seletorCSS"` → Define qual seletor CSS (geralmente um `#id`) será afetado pela ação do usuário.
* `data-bs-slide="next" | "prev"` → Indica se o botão deve avançar ou retroceder o slide.
* `data-bs-slide-to="0"` → Leva o carrossel até o slide correspondente à posição informada (começando em 0).

