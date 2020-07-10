# Teste Fullstack Startse

Repositorio com o teste para a vaga de desenvolvedor full-stack na empresa [Startse](https://www.startse.com/)

# Como utilizar o backend

1 - Instale as dependencias com `yarn` `npm install` 

2 - Edite o arquivo `.env` 

3 - Navegue até `backend/src/config/database.js` e edite os campos `host` e `port`

4 - Crie o banco de dados manualmente ou execute `yarn sequelize db:create` ou `npx sequelize-cli db:create`

5 - Para executar as migrations e seeds execute `yarn sequelize db:migrate`/`npx sequelize-cli db:migrate` e `yarn sequelize db:seed:all`/`yarn sequelize db:seed:all`

6 - Execute o script `prod` com `yarn prod` `npm run prod`

7 - Voilà, a API já está funcionando

# Como utilizar o frontend

1 - Instale as dependencias com `yarn` `npm install` 

2 - Navegue até `src/services/api.js` e edite o campo `baseURL` inserindo a URL da API

3 - Execute o script `start` com `yarn start` ou `npm run start`

4 - Voilá, é o frontend está funcionando
