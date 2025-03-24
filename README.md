# Task Manager Server

## 💻 Projeto

Este projeto é um aplicativo Full Stack de gerenciamento de tarefas desenvolvido para auxiliar os usuários a organizar e acompanhar suas atividades de forma eficiente. Com uma interface intuitiva e recursos de criação, edição e exclusão de tarefas, o aplicativo oferece uma experiência de usuário agradável e produtiva.

O projeto conta com um **front-end** desenvolvido em Next.js, disponível no repositório:
🔗 [Task Manager Frontend](https://github.com/vitorbelarmino/task-manager-app)

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[Node.js](https://nodejs.org/)**
- **[Express](https://expressjs.com/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Prisma](https://www.prisma.io/)**
- **[PostgreSQL](https://www.postgresql.org/)**
- **[Docker](https://www.docker.com/)**
- **[Eslint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**

## ⬇️ Como executar o projeto

### Rodando localmente
```bash
# Clone este repositório
$ git clone git@github.com:vitorbelarmino/task-manager-server.git 

# Acesse a pasta do projeto
$ cd task-manager-server

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente (conforme .env.example)
# OBS: Se atente que existe duas DATABASE_URL, uma para ser usada localmente e outra para com o Docker
# aqui você deve usar a localmente 

# Para o banco de dados Postgres, pode usar o disponibilizado no projeto com Docker, usando o comando abaixo.
$ npm run db:up

# Rode as migrations
$ npx prisma migrate dev

# Execute a aplicação
$ npm run dev

# O servidor iniciará na porta:3333 - acesse http://localhost:3333
```

### Rodando com Docker
Caso prefira, você pode rodar toda a aplicação utilizando Docker. O Docker irá inicializar tanto o back-end quanto o banco de dados PostgreSQL automaticamente:
```bash
# Clone este repositório
$ git clone git@github.com:vitorbelarmino/task-manager-server.git 

# Acesse a pasta do projeto
$ cd task-manager-server

# Instale as dependências
$ npm install

# Configure as variáveis de ambiente (conforme .env.example)
# OBS: Se atente que existe duas DATABASE_URL,uma para ser usada localmente e outra para com o Docker
# aqui você deve usar a com Docker

# Construa e inicie os containers
npm run app:up

# Rode as migrations
npm run docker:migrate

# O servidor iniciará na porta:3333 - acesse http://localhost:3333
```

> GitHub: https://github.com/vitorbelarmino

> LinkedIn: https://www.linkedin.com/in/vitor-belarmino/

> Email: vitor.belarmino@hotmail.com
