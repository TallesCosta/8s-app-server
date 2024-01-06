# Imagem do Node v21.5.0 baseada on Linux Alpine v3.19.
FROM node:21.5.0-alpine3.19

# Define a pasta padrão que será utilizada pela aplicação.
WORKDIR /app

# Copia apenas os arquivos de configuração da app para a instalação das dependências.
COPY package*.json ./

# Instala das depenências Node (cria uma nova camada da imagem Docker, essa nova camada gera um cache que otimiza a construção da imagem quando o fonte é atualizado).
RUN npm install

# Copia o código fonte para o 'workdir'.
COPY . .

# Expõe a porta 3000 (permitindo acesso via network ou possibilitando conexão do host caso a porta exposta seja mapeada pelo host).
EXPOSE 3000

# Dá start na aplicação (diretiva node).
CMD ["npm", "start"]