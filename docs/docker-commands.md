# Docker commands

`docker ps` -> Lista todos os contêiners disponíveis, a tag `-a` lista todos os contêiners, inclusive os que não estão sendo rodados.

`docker rm <id_container>` -> Remove o contêiner com o id especificado. Obs: o contêiner não pode estar rodando.

`docker start <id_container>` -> Starta o contêiner com o id especificado.

`docker stop <id_container>` -> Para o contêiner com o id especificado.

`docker exec -it <name_container or id_container> /bin/bash` -> Acessa o contêiner. Obs: Para sair basta apertar `CTRL+D`.

`docker logs <name_container> -f` -> Exibe os logs do container.

## Docker-compose commands

`docker-compose up -d` -> Sobe o contêiner em background através da tag `-d`.

`docker-compose down` -> Para o contêiner e remove tudo que foi criado.

`docker-compose start` -> Inicia o contêiner novamente (se ele já estiver sido criado).

`docker-compose stop` -> Para o contêiner que está rodando, sem remover nada.
