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