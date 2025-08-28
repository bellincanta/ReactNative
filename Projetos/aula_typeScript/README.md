# O que é TypeScript?

O TypeScript é um pré-processador (superset) de códigos JavaScript open source desenvolvido e mantido pela Microsoft.

Desenvolvido pelo time do Anders Hejlsberg, arquiteto líder do time TypeScript e desenvolvedor do C#, Delphi e do Turbo Pascal.

A sua primeira versão, a 0.8, foi lançada em 1 de outubro de 2012.

Projetado para auxiliar no desenvolvimento de códigos simples até os mais complexos, utilizando os princípios de Orientação a Objetos, como classes, tipagens, interfaces, Generics etc.

---

# Por que TypeScript?

O TypeScript trouxe consigo, além da tipagem estática, o paradigma Orientação a Objeto, que facilita e viabiliza o desenvolvimento de softwares de longa duração, o que era requisitado na época, já que o JavaScript não dava suporte.

A utilização de tipagem ajuda no momento de depuração (debug) do nosso código, prevenindo alguns possíveis bugs ainda em tempo de desenvolvimento.

---

# Funcionamento

Como os navegadores não interpretam código TypeScript, é necessário transpilar o código para uma das versões ECMAScript.

---

# Instalação

Para instalar o TypeScript, é necessário ter o Node.js e o seu gerenciador de pacotes, o NPM, instalados.

[https://nodejs.org/en/](https://nodejs.org/en/)

Para verificar se ele foi instalado corretamente ou qual é a versão que você tem instalada, basta abrir um terminal e digitar:

```bash
node -v && npm -v
```

Para instalar o TypeScript em modo global:

```bash
npm install -g typescript
```

Verificar versão instalada:

```bash
tsc -v
```

---

# Executando manualmente o TypeScript

1. Crie um diretório e dentro dele o arquivo `primeiro.ts`
2. Edite o arquivo com o seguinte conteúdo:

```ts
const a: string = 'Hello World';
console.log(a);
```

3. Compile com:

```bash
tsc primeiro.ts
```

4. Execute com:

```bash
node primeiro.js
```

Resultado esperado:

```
Hello World
```

---

# Entendendo o compilador do TypeScript

O compilador TypeScript é configurável:

- Define onde estão os arquivos `.ts`
- Diretório de destino
- Versão do ECMAScript
- Nível do verificador de tipos
- Permissão para arquivos JS

Criação do arquivo de configuração:

```bash
tsc --init
```

---

# Conhecendo o TS

## Espaços em branco e quebras de linha

TypeScript ignora ambos.

## Ponto e vírgula é opcional

```ts
console.log("quero ;");
console.log("não quero ;")
console.log("aqui"); console.log("é obrigado ;");
```

---

## 7.1 - Identificadores

### 7.1.1 - Regras

- Podem conter: letras, números (não no início), `_`, `$`
- Não podem conter espaços ou símbolos como `@`, `#`, `-`
- Não podem ser palavras reservadas
- Case-sensitive

#### Exemplos válidos

```ts
let idade: number = 25;
const _nome: string = "João";
function calcularTotal$() {}
class Usuario {}
interface IAnimal {}
```

#### Exemplos inválidos

```ts
let 2variavel: number = 10; // começa com número
function class() {} // palavra reservada
const nome-completo: string = "Ana"; // hífen não permitido
```

### 7.1.2 - Tipos Comuns

- **Variáveis/Constantes**:

```ts
let contador: number = 0;
const PI: number = 3.14;
```

- **Funções**:

```ts
function soma(a: number, b: number): number {
  return a + b;
}
```

- **Classes/Interfaces**:

```ts
class Pessoa {}
interface ICarro {}
```

- **Tipos personalizados**:

```ts
type ID = string | number;
```

### Convenções de Nomenclatura

- camelCase: variáveis, funções
- PascalCase: classes, interfaces
- UPPER_CASE: constantes globais
- Prefixo `I`: interfaces (opcional)

---

## 7.1.3 - Variáveis

### Sintaxe

```ts
let nome: Tipo = Valor;
const nome: Tipo = Valor;
var nome: Tipo = Valor;
```

### 7.1.3.1 - `var`, `let`, `const`

#### `var` (Escopo de Função)

- Escopo de função ou global
- Pode ser reatribuída e redeclarada
- Hoisting com `undefined`

```ts
function exemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}
```

#### `let` (Escopo de Bloco)

- Escopo de bloco
- Pode ser reatribuída, não redeclarada
- Hoisting sem inicialização

```ts
function exemploLet() {
  if (true) {
    let y = 20;
    console.log(y); // 20
  }
  console.log(y); // Erro
}
```

#### `const` (Constante)

- Escopo de bloco
- Não pode ser reatribuída nem redeclarada
- Objetos podem ter suas propriedades modificadas

```ts
const PI = 3.14;
// PI = 5; // Erro

const pessoa = { nome: "João" };
pessoa.nome = "Maria"; // OK
// pessoa = { nome: "Ana" }; // Erro
```

---

# Melhores Práticas no TypeScript

- Prefira `const` (imutabilidade)
- Use `let` quando necessário
- Evite `var` (legado)