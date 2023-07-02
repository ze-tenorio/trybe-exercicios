FROM node:16.14-alpine
# buscamos a imagem, como estamos executando pelo node, instalamos o node
WORKDIR /app
# setamos diretório padrão do container
COPY package*.json .
# copiamos as configurações do nosso app react para a image
RUN npm ci
# rodamos o npm install para fazer as instalações necessárias
COPY . .
# copiamos todos os arquivos disponíveis desde o Dockerfile
EXPOSE 3000
# expomos a porta que servirá para nosso computador acessar o conteúdo disponível
ENTRYPOINT ["npm"]
CMD ["start"]