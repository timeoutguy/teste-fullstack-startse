# Teste Fullstack Startse

Repositorio com o teste para a vaga de desenvolvedor full-stack na empresa [Startse](https://www.startse.com/)

# Como utilizar o back-end

1 - Instale as dependencias com `yarn` `npm install` 

2 - Edite o arquivo `.env` 

3 - Navegue até `backend/src/config/database.js` e edite os campos `host` e `port`

4 - Crie o banco de dados manualmente ou execute `yarn sequelize db:create` ou `npx sequelize-cli db:create`

5 - Para executar as migrations execute `yarn sequelize db:migrate`/`npx sequelize-cli db:migrate` 

6 - Para executar as seeders execute `yarn sequelize db:seed:all`/`npx sequelize-cli db:seed:all`

7 - Execute o script `prod` com `yarn prod` `npm run prod`

8 - Voilà, a API já está funcionando

Obs: Caso tenha que editar algo, repita o passo 7 apos as edições

# Como utilizar o front-end

1 - Instale as dependencias com `yarn` `npm install` 

2 - Navegue até `src/services/api.js` e edite o campo `baseURL` inserindo a URL da API

3 - Execute o script `start` com `yarn start` ou `npm run start`

4 - Voilá, é o frontend está funcionando

# Ferramentas
## Back-end

- [express](https://www.npmjs.com/package/express)
- [sequelize](https://www.npmjs.com/package/sequelize)
- [yup](https://www.npmjs.com/package/yup)

## Front-end

- [axios](https://www.npmjs.com/package/axios)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [react-calendar](https://www.npmjs.com/package/react-calendar)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [styled-components](https://www.npmjs.com/package/react-toastify)


