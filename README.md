![Logo](https://i.imgur.com/0pfQfeX.png)


# NLW Space Time API 🛰️


API do projeto Space Time, criado durante o evento da Rocketseat NLW...


## Índice


- [Stack utilizada ⚙️](#stack-utilizada)
- [Funcionalidades 🎯](#funcionalidades)
- [Variáveis de Ambiente 🔑](#variáveis-de-ambiente)
- [Rodando localmente 🏠](#rodando-localmente)
- [Rodando os testes 🧪](#rodando-os-testes)
- [Apêndice 🔍](#apêndice)
- [Documentação da API 📖](#documentação-da-api)
- [Licença 📜](#licença)


## Stack utilizada

### Dependencies

- Node.js
- Prisma
- Fastify

### DevDependencies

- TypeScript
- ESLint


## Funcionalidades


- 


## Variáveis de Ambiente


Para rodar esse projeto, você vai precisar adicionar variáveis de ambiente, como mostra o arquivo `env.example`

```env
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


## Rodando os testes


Para rodar os testes, rode o seguinte comando

```bash
  npm test
```


## Apêndice


| Diagrama Entidade Relacionamento      | Estrutura de Pastas do Projeto     |
| ------------- | ------------- |
| <img alt="Diagrama Entidade Relacionamento" src="https://i.imgur.com/oeiETNw.png"> | <img alt="Estrutura de Pastas do Projeto" src="https://i.imgur.com/Y2buOH0.png"> |


## Documentação da API


Para os métodos da API..

### Usuários

#### Cria um Usuário

```http
  POST /users
```

```JSON
{
	"name": "John",
	"email": "john@email.com",
	"password": "123"
}
```


## Licença


- 📜 [MIT](./LICENSE)
