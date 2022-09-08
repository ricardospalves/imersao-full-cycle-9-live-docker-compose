# Define a imagem que queremos usar no projeto.
FROM node:16.16.0-slim

# Instala os pacotes que serão usados no comando logo abaixo.
RUN apt update && apt install -y wget netcat

# Script para ouvir uma porta. Este script cria o comando wait-for, que é útil
# para ouvir uma porta e saber se ela já está pronta.
RUN wget -q -O /usr/bin/wait-for https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for && \
    chmod +x /usr/bin/wait-for

# Evitar que o usário do Docker seja o root, isso evita conflitos de permissões
# no momento do desenvolvimento.
USER node

# Define o diretório que queremos trabalhar dentro do Container.
WORKDIR /home/node/app

# Mantem o Container executando indefinidamente.
CMD [ "/home/node/app/start.sh" ]