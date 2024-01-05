A aplicação local exemplifica o uso de containers e k8s.

# Comandos para criação da app (histórico)
`npm init -y` - cria configurações básicas da app (cria package.json).
`npm install express` - instala a dependência do Express (cria/modifica package-lock.json).
`npm install cors` - instala a dependência do CORS (cria/modifica package-lock.json).

# Execução Local
`npm install` - instala todas as dependências listadas no package-lock.json.
`npm start` - executa o servidor Express que disponibiliza a aplicação na porta 3000.

# Teste API
http://localhost:3000/api - Status Code: 200 - "app published!"