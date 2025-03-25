# Task Manager Server

## 💻 Projeto

Este projeto é um aplicativo Full Stack de gerenciamento de tarefas desenvolvido para auxiliar os usuários a organizar e acompanhar suas atividades de forma eficiente. Com uma interface intuitiva e recursos de criação, edição e exclusão de tarefas, o aplicativo oferece uma experiência de usuário agradável e produtiva.

O projeto conta com um **front-end** desenvolvido em Next.js, disponível no repositório:
🔗 [Task Manager Frontend](https://github.com/vitorbelarmino/task-manager-app)

## 📝 Tecnologias e Implementação

O **Task Manager Server** é um aplicativo **Full Stack** desenvolvido em **TypeScript** com **Express** no back-end. Ele utiliza **PostgreSQL** como banco de dados, gerenciado através do **ORM Prisma**, e é executado em um ambiente Docker, garantindo consistência e eficiência durante o desenvolvimento.

### Funcionalidades

- **Criação / Edição de Tarefas**: Permite aos usuários criar novas tarefas, fornecendo informações como título, descrição e data de vencimento.
- **Marcação de Concluídas**: As tarefas podem ser marcadas como concluídas, o que facilita o acompanhamento do progresso.
- **Exclusão de Tarefas**: Usuários podem excluir tarefas que não são mais necessárias ou que já foram completadas.
- **Autenticação de Usuários**: A aplicação verifica se o usuário está autenticado, criando um novo usuário automaticamente, caso não haja.
- **Persistência de Dados**: As tarefas são armazenadas no banco de dados PostgreSQL, garantindo que os dados não se percam entre as execuções do servidor.
- **Validação de Dados**: A entrada de dados é validada usando o **Joi**, garantindo que as informações sejam precisas e seguras.

### Tecnologias e Ferramentas Utilizadas

- **TypeScript**: Proporciona segurança e robustez no código, com tipagem estática que previne erros durante a execução.
- **Express**: Framework web para construir a API RESTful, com um código eficiente e de fácil manutenção.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar de maneira persistente as informações das tarefas.
- **Prisma**: ORM para facilitar a interação com o banco de dados de maneira eficiente e segura.
- **Docker**: Utilizado para containerizar tanto o back-end quanto o banco de dados, garantindo consistência e facilidade de configuração.
- **Joi**: Usado para validar as entradas de dados, prevenindo falhas e melhorando a segurança da aplicação.
- **ESLint e Prettier**: Ferramentas para garantir que o código seja consistente e siga boas práticas de estilo
- **bcrypt**: Utilizado para a criptografia de senhas dos usuários, garantindo que elas sejam armazenadas de maneira segura.

### Estrutura do Projeto

O projeto segue uma arquitetura limpa e bem definida, com as camadas de **rotas**, **controladores** e **modelos** separadas. A configuração do banco de dados é simplificada utilizando o **Prisma**, enquanto a containerização com **Docker** facilita a configuração e execução da aplicação.

### Como Rodar o Projeto Localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/vitorbelarmino/task-manager-server.git
   cd task-manager-server


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
