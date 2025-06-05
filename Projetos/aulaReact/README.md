# Introdução ao React

## O que é React?

- É uma **biblioteca JavaScript** para desenvolvimento de aplicações front-end.
- A categoria das aplicações é **SPA (Single Page Application)**.
- É possível criar uma aplicação com React ou inseri-lo em um projeto já em andamento.
- Sua arquitetura é baseada em **componentes**.
- É mantido pelo **Facebook/Meta**.

---

## Pré-requisitos para rodar React

Para iniciar uma aplicação React da maneira convencional, é necessário:

- **Node.js**  
  Verifique a versão:  
  ```bash
  node -v
  ```

- **npm (gerenciador de pacotes)**  
  Verifique a versão:  
  ```bash
  npm -v
  ```

---

## Hello World em React

Para criar nossas aplicações utilizaremos o **Vite**.

> Antigamente era comum usar o `create-react-app`, mas ele tem performance inferior.

Criação do projeto:

```bash
npm create vite@latest
```

Siga as opções exibidas no terminal para configurar o projeto.

---

## Estrutura base do React

- `node_modules`: dependências do projeto  
- `public`: assets e arquivos estáticos  
- `src`: onde escrevemos o código da aplicação  
  - `main.tsx` ou `main.js`: inicializa a aplicação  
  - `App.tsx` ou `App.js`: componente principal (pode ser modificado)

---

## Extensões úteis para React no VS Code

- **ES7+ React/Redux/React-Native snippets**  
  Facilita a criação de componentes e estruturas padrão com atalhos.

---

## Preparando o Emmet para React

O **Emmet** é uma extensão nativa do VS Code que acelera a escrita de HTML, mas precisa de configuração para funcionar com React (JSX).

> Vá em:  
> `File > Settings > Extensions > Emmet`  
> e configure para reconhecer arquivos `.jsx` ou `.tsx`.

---
