## Nome do App
Podcast Manager

## Descricao
Um app ao estilo Netflix, onde possa centralizar diferentes episódios podcasts separados por categoria

## Dominio
Podcasts feitos em video

## Features
- Listar os podcasts em sessões de categorias:
    - saúde, fitness, mensalidade, humor.
- Filtrar episódios por nome de podcast.

## Como
- Listar os episódios em sessões de categorias
    Vou retornar em uma API REST o nome do eisódio, imagem de capa, link
```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["saúde", "esporte", "bodybuilder"]
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    category: ["esporte", "corrida"]
  }
]
```
