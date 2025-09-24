# React Native — Criando App com Expo

## Criar um novo projeto

```bash
npx create-expo-app@latest meuApp -t
# ou
npx create-expo-app nomeapp -t
```
> No lugar de `nomeapp`/`meuApp`, use o nome do seu aplicativo.

### Escolher o template
Quando a CLI listar os templates, **selecione `Blank (TypeScript)`**:

```
  Default - includes tools recommended for most app developers
  Blank
>>Blank (TypeScript)
  Navigation (TypeScript)
  Blank (Bare)
```

## Rodar o projeto

Acesse a pasta criada no terminal e execute:

```bash
npx expo start
```

### Pacotes úteis (web/runtime)
Para projetos que também rodam no navegador, instale:

```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```


# Entendendo React Native

React Native é um framework criado por engenheiros do Facebook que permite construir **aplicativos móveis nativos** para **iOS** e **Android** usando **JavaScript/TypeScript** e conceitos do **React**. Com ele, você aproveita o ecossistema web (ES6+, NPM, JSX, Flexbox) e, ao mesmo tempo, acessa APIs nativas com excelente desempenho.

## Por que usar React Native?

- **Código único, apps nativos**: compartilhe a maior parte do código entre Android e iOS.
- **Produtividade**: Fast Refresh, NPM/Yarn e vasta comunidade de pacotes.
- **Tecnologias modernas**: ES6+ (ECMAScript 2015+), JSX, Flexbox, TypeScript (opcional).
- **Depuração integrada**: suporte a Flipper, React DevTools e breakpoints na IDE.
- **Desempenho**: acesso a câmera, geolocalização e outros recursos nativos com fluidez (alvo de 60fps em interfaces bem projetadas).

> **Nota sobre ES6+**  
> ES6 (ECMAScript 2015) é a evolução do JavaScript. Seus objetivos incluem:
> - Melhor base para apps complexas  
> - Correção de limitações históricas da linguagem  
> - Facilitar a criação de bibliotecas  
> E muito mais (arrow functions, `let/const`, classes, módulos, desestruturação, etc.).

---

## Estrutura básica de um app

Geralmente, você encontrará arquivos como:

- `index.js` / `index.tsx`: ponto de entrada; registra o app.
- `App.js` / `App.tsx`: **componente raiz** da aplicação.
- `src/components/*`: componentes reutilizáveis.
- `src/screens/*`: telas do app.
- `src/styles/*`: estilos e temas.

**Exemplo mínimo (`App.tsx`) usando **classe**:**

```tsx
import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Olá, React Native!</Text>
        <Text>Construindo apps nativos com JavaScript/TypeScript.</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  title: { fontSize: 24, fontWeight: "600", marginBottom: 8 },
});
```

---

## JSX (dentro do `render`)

JSX é a sintaxe que permite escrever UI de forma declarativa dentro do método `render()` — parece HTML, mas é JavaScript. O Babel compila JSX para chamadas `React.createElement`.

---

## Componentes, **props** e **state**

### Props (propriedades)
- São **somente leitura** (imutáveis no componente filho).
- Passam dados de um componente pai para outro.

**Exemplo com TypeScript (classe):**
```tsx
import React from "react";
import { Text } from "react-native";

type HelloProps = { name: string; size?: number };

export class Hello extends React.Component<HelloProps> {
  static defaultProps = { size: 18 };
  render() {
    const { name, size } = this.props;
    return <Text style={{ fontSize: size }}>Olá, {name}!</Text>;
  }
}
```

> **Dica (TS + classes)**  
> Tipar evita erros como `Readonly<{}>` em `props`:  
> `class MyComp extends React.Component<MyProps, MyState> { ... }`

### State (estado)
- É **mutável** e representa dados que mudam ao longo do tempo.

**Exemplo com classe:**
```tsx
import React from "react";
import { View, Text, Button } from "react-native";

type CounterState = { count: number };

export class Counter extends React.Component<{}, CounterState> {
  state: CounterState = { count: 0 };

  render() {
    return (
      <View>
        <Text>Contador: {this.state.count}</Text>
        <Button
          title="Somar"
          onPress={() => this.setState(({ count }) => ({ count: count + 1 }))}
        />
      </View>
    );
  }
}
```

**Classe simples com estado:**
```tsx
import React from "react";
import { Text } from "react-native";

type State = { nome: string };

export class MinhaClasse extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = { nome: "TADS" };
  }
  render() {
    return <Text>{this.state.nome}</Text>;
  }
}
```

---

## Estilos no React Native

Use `StyleSheet` e **Flexbox** para layout.

```tsx
import React from "react";
import { View, StyleSheet } from "react-native";

export class Row extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  box: { width: 50, height: 50, backgroundColor: "#ddd", borderRadius: 8 },
});
```


### Flexbox e alinhamentos

No React Native, **Flexbox** é o padrão de layout. Conceitos-chave:

- `flex`: define quanto espaço o componente ocupa em relação aos irmãos.
- `flexDirection`: eixo principal do container — `'column'` (padrão) ou `'row'`.
- `justifyContent` (**eixo principal**): `'flex-start'`, `'center'`, `'flex-end'`, `'space-between'`, `'space-around'` (e `'space-evenly'` em versões mais novas).
- `alignItems` (**eixo transversal**): `'flex-start'`, `'center'`, `'flex-end'`, `'stretch'` (e `'baseline'` em alguns casos).
- `alignContent`: quando usar `flexWrap: 'wrap'`, controla o espaçamento entre linhas: `'flex-start'`, `'center'`, `'flex-end'`, `'space-between'`, `'space-around'`, `'space-evenly'`, `'stretch'`.

**Exemplo (classe):**
```tsx
import React from "react";
import { View, StyleSheet } from "react-native";

export class FlexboxDemo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",            // eixo principal na horizontal
    justifyContent: "space-between", // distribui ao longo do eixo principal
    alignItems: "center",            // alinha no eixo transversal
    padding: 16,
  },
  box: { width: 60, height: 60, backgroundColor: "#ddd", borderRadius: 8 },
});
```


### Grupos de estilo
Agrupe estilos reutilizáveis para reduzir código e aumentar produtividade.

```tsx
import { StyleSheet } from "react-native";

export const palette = StyleSheet.create({
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 16, elevation: 2 },
  title: { fontSize: 20, fontWeight: "600" },
  subtitle: { fontSize: 14, opacity: 0.7 },
});
```

---

## Tamanhos **dinâmicos** e **fixos**

- **Fixos**: quando o elemento precisa de medidas exatas (ex.: ícones).  
- **Dinâmicos**: preferidos para telas variadas; use `flex`, `%` e `Dimensions`.

```tsx
import React from "react";
import { Image, Dimensions } from "react-native";

export class ResponsiveImage extends React.Component {
  render() {
    const { width } = Dimensions.get("window");
    return (
      <Image
        source={{ uri: "https://picsum.photos/800" }}
        style={{ width, height: width * 0.6 }}
      />
    );
  }
}
```

---


## Recebendo dados

### Via *props* (entre componentes)
Use *props* para passar dados do componente pai para o filho. Exemplo (classe):
```tsx
import React from "react";
import { Text } from "react-native";

type GreetingProps = { name: string; size?: number };

export class Greeting extends React.Component<GreetingProps> {
  static defaultProps = { size: 18 };
  render() {
    const { name, size } = this.props;
    return <Text style={{ fontSize: size }}>Olá, {name}!</Text>;
  }
}
```

### De uma API (requisição assíncrona)
Em classes, faça a busca em `componentDidMount` e atualize o `state`:
```tsx
import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

type Post = { id: number; title: string };
type State = { posts: Post[]; loading: boolean; error?: string };

export class PostsList extends React.Component<{}, State> {
  state: State = { posts: [], loading: true };

  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const data = (await res.json()) as Post[];
      this.setState({ posts: data, loading: false });
    } catch (e) {
      this.setState({ error: "Falha ao carregar dados.", loading: false });
    }
  }

  render() {
    if (this.state.loading) return <ActivityIndicator />;
    if (this.state.error) return <Text>{this.state.error}</Text>;

    return (
      <FlatList
        data={this.state.posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    );
  }
}
```


## Acesso a recursos nativos

Você pode usar:
- **Câmera**  
- **Geolocalização**  
- **Sensores** (acelerômetro, giroscópio)  
- **Armazenamento**, **Notificações**, **Bluetooth**, etc.

Isso é feito via APIs do RN, bibliotecas da comunidade ou **Native Modules**/**Turbo Modules** quando necessário.

---

## Desempenho na prática

- Prefira **`FlatList`** e **`SectionList`** (virtualização) a mapear arrays diretamente.
- Evite trabalho pesado na thread de UI; mova computação para **JS thread** ou nativo.
- Memorize componentes (`React.PureComponent`) quando fizer sentido.
- Imagens: use tamanhos adequados e cache quando possível.

---

## Depuração

- **Flipper**: logs, layout inspector, network, performance.  
- **React DevTools**: inspeciona árvore de componentes.  
- **Breakpoints**: configure na IDE/editor; `console.log` continua válido :)

---

## Referências úteis

- Documentação oficial: https://reactnative.dev  
- Guia de Estilo e Flexbox: https://reactnative.dev/docs/flexbox  
- TypeScript no RN: https://reactnative.dev/docs/typescript

---

## Resumo

Com React Native, você desenvolve **apps nativos** para Android e iOS usando a produtividade do ecossistema web, sem abrir mão de **desempenho** e **acesso a APIs nativas**. Dominar **componentes (classes)**, **props**, **state**, **JSX**, **estilos** e **Flexbox** é o passo essencial para criar interfaces modernas, responsivas e manuteníveis.
