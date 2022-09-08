#!/bin/bash

npm install

# tail -f /dev/null

# É possível já rodar o servidor logo assim que o Container é iniciado através
# do comando abaixo. Lembrando que se esse for o caso, então o comando acima
# (tail -f /dev/null) deve ser removido para evitar conflitos.

npm start