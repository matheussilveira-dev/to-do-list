# ✅ To-Do List Full Stack

Aplicação **Full Stack de gerenciamento de tarefas** desenvolvida como projeto de estudo para consolidar conhecimentos de **Node.js no backend** e **React no frontend**, trabalhando o fluxo completo de uma aplicação: interface, consumo de API, validação, regras de negócio, persistência em banco de dados e feedback ao usuário.

A proposta do projeto não foi apenas construir um CRUD, mas utilizar uma aplicação simples e conhecida — uma To-Do List — para praticar a organização e a comunicação entre as diferentes camadas de um sistema web.

---

## 📌 Sobre o projeto

A aplicação permite que o usuário organize suas tarefas através de uma interface responsiva e conectada a uma API própria.

Cada tarefa pode possuir **título**, **descrição** e **status de conclusão**. Os dados são persistidos em um banco **MySQL**, portanto continuam disponíveis mesmo após atualizar ou fechar a aplicação.

O projeto foi dividido em duas partes independentes:

- **Backend:** API REST construída com Node.js, Express e MySQL.
- **Frontend:** interface construída com React e Vite, consumindo a API através do Axios.

O desenvolvimento foi utilizado principalmente para praticar:

- construção de APIs REST;
- separação de responsabilidades no backend;
- validação de dados;
- tratamento centralizado de erros;
- operações assíncronas;
- persistência em banco de dados;
- componentização no React;
- gerenciamento de estado;
- formulários controlados;
- consumo de API;
- atualização da interface após operações CRUD;
- estados de loading, sucesso, erro e lista vazia;
- responsividade e microinterações com CSS.

---

## ✨ Funcionalidades

A aplicação possui as seguintes funcionalidades:

- ✅ Listagem de tarefas cadastradas;
- ➕ criação de novas tarefas;
- ✏️ edição do título e da descrição;
- ☑️ marcação de tarefas como concluídas ou pendentes;
- 🗑️ exclusão de tarefas com confirmação;
- 📊 resumo com total de tarefas, pendentes e concluídas;
- 📝 expansão de descrições maiores quando necessário;
- ⏳ feedback visual durante operações assíncronas;
- ✅ mensagens de sucesso;
- ⚠️ mensagens de erro retornadas pela API;
- 📭 estado específico para lista vazia;
- 📱 interface responsiva;
- 🎨 estados de `hover`, `focus`, `active` e `disabled`;
- ✨ animações e microinterações para melhorar o feedback visual.

---

## 🛠️ Tecnologias utilizadas

### Backend

- **Node.js** — ambiente de execução JavaScript;
- **Express** — criação da API e definição das rotas;
- **MySQL** — banco de dados relacional;
- **mysql2** — comunicação assíncrona entre Node.js e MySQL;
- **Zod** — criação dos schemas e validação dos dados recebidos pela API;
- **CORS** — liberação da comunicação entre frontend e backend durante o desenvolvimento;
- **dotenv** — carregamento das variáveis de ambiente;
- **Nodemon** — reinicialização automática do servidor em ambiente de desenvolvimento.

### Frontend

- **React** — construção da interface e gerenciamento dos estados;
- **Vite** — ambiente de desenvolvimento e build;
- **JavaScript** — linguagem utilizada no frontend e backend;
- **Axios** — comunicação HTTP com a API;
- **Lucide React** — biblioteca de ícones;
- **CSS** — responsividade, variáveis de tema, estados visuais e animações.

---

## 🧱 Arquitetura do backend

O backend foi organizado em camadas para separar as responsabilidades da aplicação.

```text
backend/
└── src/
    ├── config/
    │   └── env.js
    ├── controllers/
    │   └── tasks.controller.js
    ├── database/
    │   └── connection.js
    ├── middleware/
    │   ├── errorHandler.middleware.js
    │   └── validate.middleware.js
    ├── models/
    │   └── Task.js
    ├── repositories/
    │   └── tasks.repository.js
    ├── routes/
    │   └── tasks.routes.js
    ├── services/
    │   └── tasks.service.js
    ├── validators/
    │   └── tasks.validator.js
    ├── app.js
    └── server.js
```

### Fluxo de uma requisição

De forma simplificada, uma requisição percorre o seguinte caminho:

```text
Cliente
  ↓
Route
  ↓
Validation Middleware
  ↓
Controller
  ↓
Service
  ↓
Repository
  ↓
MySQL
```

### Responsabilidade de cada camada

#### `routes`

Define os endpoints disponíveis e conecta cada rota aos seus middlewares de validação e ao controller correspondente.

#### `validators`

Contém os schemas do **Zod** utilizados para validar parâmetros de rota e corpo das requisições.

#### `middleware`

O middleware de validação executa o schema recebido antes de permitir que a requisição siga para o controller.

Também existe um middleware de erro responsável por centralizar a resposta de erros da aplicação.

#### `controllers`

Recebem a requisição HTTP, extraem os dados necessários, chamam a camada de serviço e constroem a resposta HTTP.

#### `services`

Concentram regras relacionadas ao fluxo da aplicação, como a verificação da existência de uma tarefa e o tratamento de situações em que um ID não é encontrado.

#### `models`

O model `Task` representa os dados que podem compor uma tarefa e permite que atualizações parciais mantenham somente os campos enviados na requisição.

#### `repositories`

Responsáveis pelo acesso ao banco de dados e pela execução das queries SQL. As consultas utilizam parâmetros (`?`) para enviar os valores separadamente da instrução SQL.

#### `database`

Cria o pool de conexões com o MySQL utilizando `mysql2/promise` e testa a conexão durante a inicialização do backend.

---

## 🎨 Estrutura do frontend

O frontend foi dividido em uma página principal e componentes menores, cada um responsável por uma parte específica da interface.

```text
frontend/
└── src/
    ├── components/
    │   ├── FeedbackMessage/
    │   │   ├── FeedbackMessage.jsx
    │   │   └── FeedbackMessage.css
    │   ├── TasksCard/
    │   │   ├── TasksCard.jsx
    │   │   └── TasksCard.css
    │   ├── TasksForm/
    │   │   ├── TasksForm.jsx
    │   │   └── TasksForm.css
    │   ├── TasksList/
    │   │   ├── TasksList.jsx
    │   │   └── TasksList.css
    │   └── TasksSummary/
    │       ├── TasksSummary.jsx
    │       └── TasksSummary.css
    ├── pages/
    │   └── Tasks/
    │       ├── Tasks.jsx
    │       └── Tasks.css
    ├── services/
    │   └── api.js
    ├── styles/
    │   └── variables.css
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

### Principais responsabilidades

#### `Tasks`

É a página principal da aplicação e concentra os estados e as operações relacionadas às tarefas.

Ela é responsável por:

- buscar as tarefas ao carregar a aplicação;
- armazenar a lista no estado;
- criar uma nova tarefa;
- iniciar e cancelar uma edição;
- atualizar uma tarefa;
- excluir uma tarefa;
- alterar o status entre concluída e pendente;
- controlar operações de loading;
- controlar mensagens de erro e sucesso;
- calcular os totais exibidos no resumo.

#### `TasksForm`

Formulário reutilizado tanto para **criação** quanto para **edição**.

Quando nenhuma tarefa está sendo editada, o formulário cria uma nova tarefa. Ao selecionar uma tarefa para edição, os campos são preenchidos com os dados atuais e a interface muda para o modo de atualização.

#### `TasksList`

Recebe a lista de tarefas e renderiza um `TasksCard` para cada item. Também exibe uma mensagem específica quando nenhuma tarefa está cadastrada.

#### `TasksCard`

Representa individualmente cada tarefa.

O componente permite:

- marcar ou desmarcar a tarefa;
- iniciar a edição;
- excluir a tarefa;
- exibir o loading durante a exclusão;
- expandir descrições maiores.

Para identificar quando uma descrição ultrapassa o espaço disponível, o componente utiliza `useRef`, `useEffect` e `ResizeObserver`.

#### `TasksSummary`

Apresenta os indicadores calculados a partir do estado atual da aplicação:

- total de tarefas;
- tarefas pendentes;
- tarefas concluídas.

#### `FeedbackMessage`

Centraliza os diferentes tipos de feedback visual da interface:

- `loading`;
- `success`;
- `error`;
- `empty`.

---

## 🔄 Fluxo completo da aplicação

Um dos principais objetivos deste projeto foi entender o caminho percorrido pelos dados entre frontend, backend e banco de dados.

Por exemplo, ao criar uma nova tarefa:

```text
Usuário preenche o formulário
        ↓
React controla os campos
        ↓
TasksForm envia os dados para Tasks
        ↓
Axios executa POST /tasks
        ↓
Express recebe a requisição
        ↓
Zod valida o body
        ↓
Controller recebe os dados validados
        ↓
Service cria a entidade da tarefa
        ↓
Repository executa o INSERT
        ↓
MySQL salva os dados
        ↓
API devolve a tarefa criada
        ↓
React adiciona a nova tarefa ao estado
        ↓
Interface é atualizada
```

Esse mesmo princípio é aplicado às operações de leitura, edição, conclusão e exclusão.

---

## 🌐 API REST

Por padrão, o backend utiliza:

```text
http://localhost:3010
```

A API disponibiliza os seguintes endpoints:

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/tasks` | Lista todas as tarefas |
| `GET` | `/tasks/:id` | Busca uma tarefa pelo ID |
| `POST` | `/tasks` | Cria uma nova tarefa |
| `PUT` | `/tasks/:id` | Atualiza um ou mais campos da tarefa |
| `DELETE` | `/tasks/:id` | Exclui uma tarefa |

### `GET /tasks`

Retorna todas as tarefas ordenadas da mais recente para a mais antiga.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "title": "Estudar React",
    "description": "Revisar gerenciamento de estado",
    "completed": 0,
    "created_at": "2026-09-30T18:00:00.000Z",
    "updated_at": "2026-09-30T18:00:00.000Z"
  }
]
```

### `GET /tasks/:id`

Busca uma tarefa específica utilizando seu ID.

```http
GET /tasks/1
```

Caso a tarefa não exista, a API retorna erro `404`.

### `POST /tasks`

Cria uma nova tarefa.

Exemplo de body:

```json
{
  "title": "Estudar Node.js",
  "description": "Revisar a arquitetura do backend"
}
```

O campo `completed` recebe `false` como valor padrão quando não é informado.

Exemplo de resposta:

```json
{
  "message": "Tarefa cadastrada com sucesso",
  "data": {
    "id": 1,
    "title": "Estudar Node.js",
    "description": "Revisar a arquitetura do backend",
    "completed": 0
  }
}
```

### `PUT /tasks/:id`

Permite atualizar somente os campos necessários.

Exemplo — alteração de título e descrição:

```json
{
  "title": "Estudar Express",
  "description": "Revisar rotas e middlewares"
}
```

Exemplo — alteração somente do status:

```json
{
  "completed": true
}
```

A API exige que pelo menos um campo seja enviado na atualização.

### `DELETE /tasks/:id`

Exclui uma tarefa utilizando seu ID.

```http
DELETE /tasks/1
```

Caso o ID não exista, a API retorna erro `404`.

---

## ✅ Validações

As validações da API foram implementadas com **Zod**.

### ID

O parâmetro `id` deve:

- ser um número;
- ser inteiro;
- ser positivo e maior que zero.

### Criação de tarefa

O campo `title`:

- deve ser uma string;
- passa por `trim()`;
- é obrigatório;
- deve possuir pelo menos 1 caractere após o `trim`;
- pode possuir no máximo 150 caracteres.

O campo `description`:

- é opcional;
- quando enviado, deve ser texto.

O campo `completed`:

- deve ser booleano;
- recebe `false` por padrão na criação.

### Atualização

Na atualização, todos os campos são opcionais individualmente, permitindo alterações parciais.

Entretanto, a requisição precisa possuir **pelo menos um campo para ser atualizado**.

### Formato dos erros de validação

Quando a validação falha, a API responde com status `400` e uma lista de mensagens:

```json
{
  "error": [
    "O título é obrigatório!"
  ]
}
```

O frontend trata tanto listas de erros de validação quanto mensagens simples retornadas pelo backend.

---

## 🗄️ Banco de dados

O projeto utiliza **MySQL** para persistência das tarefas.

O arquivo `banco_de_dados.sql`, localizado na raiz do projeto, cria o banco e a tabela necessários:

```sql
CREATE DATABASE todo_list;

USE todo_list;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Estrutura da tabela `tasks`

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | `INT` | Identificador único e auto incremental |
| `title` | `VARCHAR(150)` | Título obrigatório da tarefa |
| `description` | `TEXT` | Descrição opcional |
| `completed` | `BOOLEAN` | Indica se a tarefa foi concluída |
| `created_at` | `TIMESTAMP` | Data de criação |
| `updated_at` | `TIMESTAMP` | Atualizado automaticamente após alterações |

---

## ⚙️ Como executar o projeto

### Pré-requisitos

Para executar o projeto localmente é necessário possuir:

- **Node.js** instalado;
- **npm**;
- **MySQL** em execução.

---

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd projeto_2_to-do-list
```

---

### 2. Prepare o banco de dados

Execute o arquivo:

```text
banco_de_dados.sql
```

em seu servidor MySQL.

Ele criará o banco `todo_list` e a tabela `tasks`.

---

### 3. Configure o backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env` dentro da pasta `backend`:

```env
PORT=3010

DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=todo_list
DB_PORT=3306
```

As variáveis de conexão com o banco são verificadas durante a inicialização da aplicação.

Inicie o backend em modo de desenvolvimento:

```bash
npm run dev
```

Ou execute normalmente:

```bash
npm start
```

Por padrão, o servidor ficará disponível em:

```text
http://localhost:3010
```

---

### 4. Configure o frontend

Abra outro terminal e entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

> **Observação:** o Axios está configurado em `src/services/api.js` com `http://localhost:3010` como URL base da API. Caso a porta do backend seja alterada, essa configuração também precisa ser ajustada.

---

## 📜 Scripts disponíveis

### Backend

```bash
npm run dev
```

Executa o servidor utilizando Nodemon.

```bash
npm start
```

Executa o servidor com Node.js.

### Frontend

```bash
npm run dev
```

Inicia o Vite em modo de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção do frontend.

```bash
npm run lint
```

Executa o ESLint no projeto.

```bash
npm run preview
```

Executa localmente a build de produção gerada pelo Vite.

---

## 🎯 Decisões e conceitos praticados

### Atualização do estado sem recarregar a página

Após uma operação de criação, edição, exclusão ou alteração de status, o estado do React é atualizado diretamente com o retorno da API. Dessa forma, a interface acompanha as mudanças sem necessidade de recarregar a página ou buscar novamente toda a lista após cada operação.

### Controle de loading por operação

O estado de loading possui a operação em andamento e, quando necessário, o ID da tarefa:

```js
{
  operation: null,
  id: null
}
```

Isso permite diferenciar operações como:

- `get`;
- `create`;
- `update`;
- `delete`;
- `toggle`.

Assim, a interface consegue desabilitar ou exibir feedback apenas nos elementos relacionados à ação atual.

### Feedback temporário

Mensagens de erro e sucesso são controladas por estado e removidas automaticamente após alguns segundos, evitando que permaneçam indefinidamente na tela.

### Formulário de criação e edição

O mesmo componente é utilizado para os dois contextos. O estado `editingTask` determina se o formulário deve criar uma nova tarefa ou atualizar uma existente.

### Atualizações parciais no backend

O model e o repository verificam quais propriedades realmente foram recebidas, permitindo construir dinamicamente a operação de `UPDATE` somente com os campos enviados.

### Variáveis de CSS

As cores e tempos de transição foram centralizados em `variables.css`, facilitando a manutenção da identidade visual e a reutilização de valores em diferentes componentes.

### Responsividade e microinterações

A interface possui breakpoints para adaptação em telas menores e diferentes estados visuais para ações do usuário, incluindo:

- foco nos campos;
- hover dos botões e cards;
- estados de edição;
- tarefa concluída;
- loading;
- feedback de sucesso e erro;
- animações de entrada.

---

## 📚 Principais aprendizados

Este projeto foi importante para consolidar a visão de uma aplicação como um conjunto de partes que precisam trabalhar de forma integrada.

No backend, o foco esteve na construção da API, no caminho percorrido por uma requisição, na separação das responsabilidades, nas validações e no acesso ao banco de dados.

No frontend, o foco esteve na componentização, nos estados, nos efeitos, nos formulários controlados, no consumo da API e na atualização da interface de acordo com cada operação executada pelo usuário.

O resultado é uma aplicação em que o fluxo pode ser acompanhado de ponta a ponta:

```text
Interface React
      ↓
Axios
      ↓
API Express
      ↓
Validação com Zod
      ↓
Controller
      ↓
Service
      ↓
Repository
      ↓
MySQL
```

Mais do que implementar as funcionalidades de uma lista de tarefas, o objetivo foi entender e praticar **como frontend, backend e banco de dados se conectam dentro de uma aplicação Full Stack**.

---

## 📁 Estrutura geral do projeto

```text
projeto_2_to-do-list/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── validators/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── banco_de_dados.sql
└── README.md
```

---

## ✅ Status do projeto

**Projeto finalizado como etapa de estudo e consolidação de conhecimentos em desenvolvimento Full Stack com Node.js, React e MySQL.**
