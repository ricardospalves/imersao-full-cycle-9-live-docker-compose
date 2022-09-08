# Imersão Full Stack e Full Cycle 9 - Live Docker Compose

Live ensinando como criar um ambiente de desenvolvimento para aplicações de grande porte com _Docker Compose_. Essa live é relacionada a Imersão Full Stack & Full Cycle 9.0.

## O que é _Docker Compose_?

É uma ferramenta para genrenciar de forma prática e produtiva os
_Docker Containers_. Em um arquivo nós podemos gerenciar todos os _Containers_
da aplicação, sem a necessidade de ficar criando ou pausando cada _Image_ via
terminal.

## Comandos

Os comandos a baixo são para a versão 2 _Docker Compose_, para a versão 1, basta
trocar o comando `docker compose` para `docker-compose`.

Rodandar os _Containers_:

```sh
docker compose up
```

---

Listar os _Containers_:

```sh
docker compose ps
```

---

Parar os _Containers_:

```sh
docker compose stop
```

---

Deletar os _Containers_:

```sh
docker compose down
```

---

Acessa o bash do _Containers_:

```sh
docker compose exec app bash
```

Algumas coisas importantes sobre o comando acima:

- O `app` é nome do `service` definido no docker-compose.yaml
- Nem todas a pasta `bash`está presente, em alguns caso a pasta é a `sh`

---

Forçar o Docker a gerar uma nova versão da imagem. Sempre que algum arquivo
Dockerfile for modificado, é necessário rodar o esse comando, caso contrário, as
modificações não serão aplicadas, uma vez que o _Docker_ irá usar a compilação
anterior da imagem, que está desatualizada.

```sh
docker compose up --build
```
