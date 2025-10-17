A CRUD está separa em pastas backend e frontend

no backend está a chamada e execuçao do servidor com server.ts
o arquivo de chamada do banco e login .env na pasta banco
a pasta models com o modelo de como deve ser o usuario no banco de dados
a pasta routes com as rotas da API RESTful (métodos GET, POST, PUT, DELETE);

no front end está a node_modules do projeto para configuraçao do Node.js
no public está o index.html que coloca o React no DOM via javascript
no src está toda a aplicaçao do App React, onde nos componentes temos a utilizaçao dos navbar, os routes onde temos as telas dinamicas da nossa aplicaçao
além dos arquivos tsx, o app principal que inicializa tudo, e o index que configura o app. 
em types temos uma interface para uso padrao do usuario

o restante dos arquivos sao configuraçoes do code, node.js, typescript, express e mongoDb

de começo, na pasta desafioCRUD rode npm init -y, npm install -g typescript

para iniciar o servidor acesse pelo terminal a pasta desafioCRUD\backend e digite npm install express mongoose, npm install mongodb, e para iniciar npm run dev ou npx ts-node server.ts

para iniciar a aplicaçao, acesse a pasta desafioCRUD\frontend e digite npm start
