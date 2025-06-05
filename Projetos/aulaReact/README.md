
# Introdução a React

## O que é React?

- É uma biblioteca JavaScript para desenvolvimento de aplicações front-end;
- A categoria das aplicações é **SPA** (Single Page Application);
- É possível criar uma aplicação com React ou inserir em um projeto já em andamento;
- Sua arquitetura é baseada em **componentes**;
- É mantido pelo **Facebook/Meta**.

---

## Pré-requisitos para rodar React

- Para iniciar uma aplicação React da maneira convencional, precisaremos do **Node.js**:
  ```bash
  $ node -v
  ```
- Através do gerenciador de pacotes **npm**, é possível iniciar projetos:
  ```bash
  $ npm -v
  ```

---

## Hello World em React

- Para criar nossas aplicações utilizaremos o **Vite**;
- Antigamente era muito comum utilizar o `create-react-app`, porém ele possui pior performance;
- Para iniciar, digite no terminal:
  ```bash
  npm create vite@latest
  ```
  e siga as opções no terminal.

---

## Estrutura base do React

- `node_modules`: dependências do projeto;
- `public`: assets e arquivos estáticos;
- `src`: onde escrevemos o código da aplicação;
- `src/main.tsx` ou `main.js`: arquivo de inicialização da aplicação;
- `src/App.tsx` ou `App.js`: componente principal inicial (pode ser modificado);

---

## Extensão para React

- Há diversas extensões interessantes para React no **VS Code**;
- A principal e mais utilizada é: **ES7 React snippets**;
- Ela ajuda a criar rapidamente estruturas comuns em projetos React.

---

## Preparando o Emmet para o React

- O **Emmet** é uma extensão nativa do VS Code que ajuda a escrever código mais rápido;
- Mas ela não vem configurada para o React;
- Para configurar:
  1. Acesse: `File > Settings > Extensions`;
  2. Procure por **Emmet**;
  3. Adicione: `javascript` e `javascriptreact` na configuração.

---

## Fundamentos do React

### Criando componentes

- Os componentes ficam dentro da pasta `components`, criada dentro de `src`;
- Nomeados em **CamelCase**, ex: `FirstComponent.tsx`;
- A extensão `.tsx` (ou `.jsx`) facilita a formatação e entendimento pelo editor;
- Dentro do componente criamos e exportamos uma função (a lógica do componente).

### Importando componentes

- Para reutilizar um componente é necessário importá-lo:
  ```js
  import FirstComponent from './components/FirstComponent.jsx';
  ```
- Para inseri-lo no JSX, utilizamos a sintaxe de tags HTML:
  ```jsx
  <FirstComponent />
  ```

### JSX

- **JSX** é o HTML do React, escrito dentro do `return` da função do componente;
- Podemos escrever tags HTML e importar outros componentes;
- Diferenças importantes:
  - `class` → `className`
- Podemos executar código JS dentro do JSX usando chaves:
  ```jsx
  {2 + 2}
  ```
- O JSX deve conter **apenas um elemento pai** por componente.

### Comentários no componente

- Fora do JSX:
  ```js
  // Comentário
  ```
- Dentro do JSX:
  ```jsx
  {/* Algum comentário */}
  ```

### Template Expressions

- Permite execução de JS dentro do JSX:
  ```jsx
  <p>{2 + 2}</p>
  ```
- Qualquer código JS pode ser executado dentro das chaves `{ }`.

### Hierarquia de componentes

- Componentes podem ser reutilizados dentro de outros;
- Podemos montar uma **hierarquia** de componentes (pai → filho);
- Ao importar o componente pai, todos os filhos inclusos também são renderizados.

### Evento de click

- Eventos são essenciais no desenvolvimento front-end;
- Em React usamos eventos de forma simplificada:
  ```jsx
  <button onClick={handleClick}>Clique aqui</button>
  ```
- `onClick` dispara a função `handleClick` ao clicar no botão.

---

> Desenvolvido como introdução ao React com base nos principais fundamentos e boas práticas.
