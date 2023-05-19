![Logo](https://i.imgur.com/0pfQfeX.png)


# NLW Space Time API 🛰️


API do projeto Space Time, criado durante o evento da Rocketseat NLW...


## Índice


- [Stack utilizada ⚙️](#stack-utilizada)
- [Funcionalidades 🎯](#funcionalidades)
- [Variáveis de Ambiente 🔑](#variáveis-de-ambiente)
- [Rodando localmente 🏠](#rodando-localmente)
- [Documentação da API 📖](#documentação-da-api)
- [Licença 📜](#licença)


## Stack utilizada

### Dependencies

![node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![fastify](https://img.shields.io/badge/fastify-202020?style=for-the-badge&logo=fastify&logoColor=white)
![jwt](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![eslint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

### Outras Libs

- DotEnv
- CORS
- Zod
- Axios


## Funcionalidades


- Cadastrando usando OAuth do GitHub
- CRUD de Memórias


## Variáveis de Ambiente


Para rodar esse projeto, você vai precisar adicionar variáveis de ambiente, como mostra o arquivo `env.example`

```env
  # Database
  DATABASE_URL="file:./dev.db"

  # Github (Web)
  GITHUB_CLIENT_ID=
  GITHUB_CLIENT_SECRET=

  # Github (Mobile)
  # GITHUB_CLIENT_ID=
  # GITHUB_CLIENT_SECRET=

  # JWT Secret
  AUTH_SECRET=

```


## Rodando localmente


Clone o projeto

```bash
  git clone https://github.com/helioLJ/nlw-spacetime-api
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Documentação da API

Para os métodos da API..

### Usuários

#### Cria um Usuário

```http
  
```

```JSON

```


## Licença


- 📜 [MIT](./LICENSE)
