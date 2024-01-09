A aplicação local exemplifica o uso de containers e k8s.

# Comandos para criação da app (histórico)
`npm init -y` - cria configurações básicas da app (cria package.json).

`npm install express` - instala a dependência do Express (cria/modifica package-lock.json).

`npm install cors` - instala a dependência do CORS (cria/modifica package-lock.json).

`npm install redis` - instala a dependência do Redis (cria/modifica package-lock.json).

# Execução Local
`npm install` - instala todas as dependências listadas no package-lock.json.

`npm start` - executa o servidor Express que disponibiliza a aplicação na porta 3000.

# Execução via container Docker
`docker build -t k8s-example-server -f Dockerfile .` - cria imagem com Node.js v20 baseada no Linux Alpine, além do fonte do projeto.

`docker run -d -p 3000:3000 --name k8s-example-container-server k8s-example-server` - cria container a partir da imagem gerada, além de construir o artefato da app a partir do fonte do projeto.

`docker network create k8s-example-network-app` - cria network para comunicação entre client e server.

`docker network connect k8s-example-network-app k8s-example-container-server` - adiciona container client à network app.

`docker run -d -p 6379:6379 --name k8s-example-container-db-redis --env REDIS_URL=redis://k8s-example-container-db-redis:6379 redis:7.2.3-alpine3.19` - cria container a partir da imagem do Redis v7.2.3.

`docker network create k8s-example-network-server` - cria network para comunicação entre server e banco de dados.

`docker network connect k8s-example-network-server k8s-example-container-server` - adiciona container server à network server.

`docker network connect k8s-example-network-server k8s-example-container-db-redis` - adiciona container database à network server.

# Execução via Docker Compose
`docker-compose up --build -d` - cria todos os containers, networks, volumes, etc. da app client.

# Teste API
http://localhost:3000/api - Status Code: 200 - "app published!"
