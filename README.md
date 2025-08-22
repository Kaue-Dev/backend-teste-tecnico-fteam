# Backend Teste Técnico FTeam

Este repositório contém uma aplicação backend desenvolvida com NestJS para um teste técnico. A aplicação gerencia uma lista de tarefas (todos), permitindo operações CRUD (Criar, Ler, Atualizar, Deletar).

## Tecnologias Utilizadas

*   **NestJS**: Um framework progressivo Node.js para a construção de aplicações server-side eficientes e escaláveis.
*   **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
*   **Cuid**: Biblioteca para geração de IDs únicos.

## Estrutura do Projeto

O projeto segue a estrutura padrão de uma aplicação NestJS, com módulos, controladores, serviços e entidades bem definidos. A lógica principal da aplicação está concentrada no módulo `todos`.

```
backend-teste-tecnico-fteam/
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── todos/
│       ├── dto/
│       │   ├── create-todo.dto.ts
│       │   └── update-todo.dto.ts
│       ├── entities/
│       │   └── todo.entity.ts
│       ├── repositories/
│       │   ├── create-todo.repository.ts
│       │   ├── delete-todo.repository.ts
│       │   ├── list-all-todos.repository.ts
│       │   ├── list-todo-by-id.repository.ts
│       │   ├── todos.storage.ts
│       │   └── update-todo.repository.ts
│       ├── todos.controller.ts
│       ├── todos.module.ts
│       ├── todos.service.ts
│       └── ... (arquivos de teste)
├── test/
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── ... (outros arquivos de configuração)
```

## Funcionalidades

A aplicação oferece as seguintes funcionalidades para gerenciamento de tarefas:

*   **Criar Tarefa**: Adiciona uma nova tarefa à lista.
*   **Listar Todas as Tarefas**: Retorna todas as tarefas existentes.
*   **Buscar Tarefa por ID**: Retorna uma tarefa específica pelo seu ID.
*   **Atualizar Tarefa**: Modifica uma tarefa existente pelo seu ID.
*   **Remover Tarefa**: Exclui uma tarefa da lista pelo seu ID.

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

### Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/Kaue-Dev/backend-teste-tecnico-fteam.git
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd backend-teste-tecnico-fteam
    ```

3.  Instale as dependências:

    ```bash
    npm install
    # ou 
    yarn install
    ```

### Execução

*   **Modo Desenvolvimento (com watch)**:

    ```bash
    npm run start:dev
    ```

*   **Modo Produção**:

    ```bash
    npm run start:prod
    ```

A aplicação estará disponível em `http://localhost:3000` (ou na porta definida pela variável de ambiente `PORT`).

## Endpoints da API

Todos os endpoints são prefixados com `/todos`.

| Método HTTP | Endpoint      | Descrição                       | Corpo da Requisição (Exemplo)                                  | Resposta (Exemplo)                                       |
| :---------- | :------------ | :------------------------------ | :------------------------------------------------------------- | :------------------------------------------------------- |
| `POST`      | `/todos`      | Cria uma nova tarefa            | `{"title": "Minha Tarefa", "description": "Descrição da tarefa", "completed": false}` | `{"id": "cuid_id", "title": "Minha Tarefa", ...}` |
| `GET`       | `/todos`      | Lista todas as tarefas          | N/A                                                            | `[{"id": "cuid_id", "title": "Minha Tarefa", ...}]` |
| `GET`       | `/todos/:id`  | Busca uma tarefa por ID         | N/A                                                            | `{"id": "cuid_id", "title": "Minha Tarefa", ...}` |
| `PUT`       | `/todos/:id`  | Atualiza uma tarefa por ID      | `{"title": "Tarefa Atualizada", "completed": true}`        | `{"id": "cuid_id", "title": "Tarefa Atualizada", ...}` |
| `DELETE`    | `/todos/:id`  | Remove uma tarefa por ID        | N/A                                                            | `200 OK` (sem corpo)                                     |

## Considerações sobre o Armazenamento

Atualmente, as tarefas são armazenadas em memória (`todos.storage.ts`). Isso significa que os dados não são persistidos e serão perdidos a cada reinício da aplicação. Para um ambiente de produção, seria necessário integrar um banco de dados (ex: PostgreSQL, MongoDB, MySQL) e um ORM/ODM (ex: TypeORM, Prisma, Mongoose).