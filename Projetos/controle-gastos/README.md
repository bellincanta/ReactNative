# Projeto React Native com Expo e TypeScript: Controle de Gastos Pessoais

## Visão Geral
Vamos criar um aplicativo de controle de gastos pessoais para aprender os conceitos básicos de React Native com Expo e TypeScript.

O app permitirá:
- Registrar gastos em diferentes categorias (mercado, combustível, etc.)
- Visualizar um resumo dos gastos
- Gerenciar entradas e saídas financeiras

## 🛠️ Configuração Inicial

### Passo 1: Criar o projeto
```bash
npx create-expo-app controle-gastos --template expo-template-blank-typescript
```
### Passo 2: Executar o projeto

	- cd controle-gastos
	- npm run android   # Para Android
	- npm run ios       # Para iOS
	- npm run web       # Para versão web

# Estrutura do Projeto React Native com Expo e TypeScript
```bash
controle-gastos/
├── node_modules/
├── assets/
├── App.tsx
├── app.json
├── package.json
├── index.ts
├── tsconfig.json
└── babel.config.js



```
## 1. node_modules/

🔹 **O que é**: Pasta criada automaticamente pelo npm/yarn

🔹 **Função**: Armazena todas as dependências do projeto

🔹 **Conteúdo**:

- Bibliotecas do React Native e Expo
- Dependências de desenvolvimento (TypeScript, Babel)
- Bibliotecas adicionais que você instalar

⚠️ **Importante**:

- Nunca edite manualmente
- Não deve ser commitada no Git (está no .gitignore)
- Recriada automaticamente com `npm install`

---

## 2. assets/

🔹 **O que é**: Pasta para recursos estáticos

🔹 **Função**: Armazenar imagens, fonts, ícones, etc.

🔹 **Uso típico**:
```javascript
import logo from './assets/logo.png';
```

## 3. App.tsx

🔹 O que é: Componente principal do React Native

Exemplo de código:
```javascript
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}
````
🔹 Características:

- Ponto de entrada da aplicação

- Componente raiz (tudo parte daqui)

- Extensão .tsx indica uso de JSX + TypeScript

## 4. app.json

🔹 O que é: Arquivo de configuração do Expo

- Conteúdo exemplo:
```json
{
  "expo": {
    "name": "Controle Gastos",
    "slug": "controle-gastos",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain"
    },
    "android": {
      "package": "com.seunome.controle-gastos"
    }
  }
}
```
🔹 Configurações importantes:

- name: Nome do app (como aparece no celular)

- slug: Usado em URLs (expo.io/@yourname/slug)

- icon/splash: Imagens de ícone e tela inicial

- Configs específicas por plataforma (android/ios)

## 5. package.json

🔹 O que é: Arquivo de configuração do Node.js/npm

- Partes principais:

a) Metadados:
```json
{
  "name": "controle-gastos",
  "version": "1.0.0",
  "private": true
}
```
b) Scripts (comandos úteis):
```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```
c) Dependências:
```json
"dependencies": {
  "expo": "~48.0.0",
  "react": "18.2.0",
  "react-native": "0.71.0"
},
"devDependencies": {
  "@types/react": "~18.0.0",
  "typescript": "~4.9.0"
}
```
🔹 Funções:

- Lista todas as bibliotecas necessárias

- Define comandos para rodar o projeto

- Especifica versões de cada dependência

## 6. index.ts

🔹 O que é:

- Ponto de entrada alternativo para módulos
- Configuração adicional do aplicativo

## 7. tsconfig.json

🔹 O que é: Configuração do TypeScript

Conteúdo típico:
```json
{
  "compilerOptions": {
    "jsx": "react-native",
    "target": "esnext",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  },
  "exclude": ["node_modules"]
}
```
🔹 Opções importantes:

- jsx: Como tratar sintaxe JSX

- strict: Ativa verificações de tipo

- esModuleInterop: Compatibilidade entre módulos

🔹 Propósito:

- Define regras para checagem de tipos

- Configura como o TS compila para JS

## 8. babel.config.js

🔹 O que é: Configuração do Babel (transpilador)

Conteúdo padrão:
```javascript
module.exports = {
  presets: ['babel-preset-expo']
};
```
🔹 Funcionamento:

- babel-preset-expo inclui:

	- Preset para React Native

	- Suporte a JavaScript moderno

	- Otimizações para mobile

ℹ️ Importante:

- Raramente precisa ser modificado

- Adicione plugins apenas para funcionalidades extras

## 9. Fluxo de Execução

- Inicialização:
	
	- Expo lê app.json para configurações

	- Carrega App.tsx como componente raiz

- Desenvolvimento:

	- Babel transpila TypeScript/JSX (usando tsconfig.json)

	- Metro Bundler empacota o código

- Build:
	 
	- Expo CLI usa todas essas configurações para gerar os binários


📂 Estrutura de Pastas

```bash
/src
  /components    # Componentes reutilizáveis
  /screens       # Telas do aplicativo
  /contexts      # Contextos do React
  /types         # Tipos TypeScript
  /utils         # Utilitários e helpers
```

Crie essas pastas manualmente ou com o comando:
```bash
mkdir -p src/{components,screens,contexts,types,utils}
```
## 1. /components

Finalidade: Armazenar componentes reutilizáveis da UI

- Conteúdo típico:

	- Componentes "burros" (apresentacionais)

	- Peças de UI usadas em múltiplas telas

	- Exemplos no projeto:

		- ExpenseForm.tsx (formulário de gastos)

		- BottomTabsNavigator.tsx (navegação por abas)

- Características:

	- Recebem dados via props

	- Não gerenciam estado próprio (quando possível)

	- Estilização isolada

	- Nomeclatura: NomeDoComponente.tsx

- Boas práticas:

	- Um componente por arquivo

	- Pastas para componentes complexos:

```bash
			/components
			  /ExpenseCard
			    index.ts
			    ExpenseCard.tsx
			    styles.ts
```
## 2. /screens

- Finalidade: Telas principais/navegáveis do app

- Conteúdo típico no projeto:

	- AddExpenseScreen.tsx (tela de adição) 
	- ExpenseListScreen.tsx (lista de gastos)
	- SummaryScreen.tsx (resumo financeiro)

- Diferença para componentes:
	- Representam rotas/navegação
	- Normalmente compostas por múltiplos componentes
	- Conectadas ao sistema de navegação
	- Gerenciam lógica de tela específica

- Padrões recomendados:
	- Nomeclatura: NomeDaTelaScreen.tsx
	- Deveriam ser "lean" (magras), delegando lógica para:

			- Hooks customizados
			- Contextos
			- Componentes filhos

## 3. /contexts

- Finalidade: Gerenciamento de estado global

- Arquivo principal no projeto:
	- ExpenseContext.tsx (gerencia a lista de gastos)

- Contém:
	- Definições de contexto
	- Providers
	- Hooks customizados (ex: useExpenses())

- Quando usar:
	- Dados compartilhados por muitas telas
	- Estado de autenticação
	- Configurações do usuário
	- Tema da aplicação

Estrutura típica:

```bash
	// 1. Criação do contexto
	const MyContext = createContext<ContextType>(...);

	// 2. Provider component
	export const MyProvider = ({ children }) => {...};

	// 3. Hook customizado
	export const useMyContext = () => {...};
```

## 4. /types

- Finalidade: Definir tipos TypeScript

- Arquivo principal:
	- index.ts (exporta todos os tipos)

- Contéudo no projeto:
	- Tipos de gastos (Expense)
	- Categorias (ExpenseCategory) 
	- Tipos de contexto (ExpenseContextType)

- Boas práticas:
	- Tipos específicos perto de seus usos:

```bash
	/components
  		/ExpenseForm
    		types.ts
```
## 5. /utils

- Finalidade: Funções utilitárias/helpers

- Exemplos do que poderia conter:

	- currencyFormatter.ts (formatação monetária)

	- dateUtils.ts (manipulação de datas)

	- storage.ts (wrapper para AsyncStorage)

- Características:

	- Funções puras (sem side-effects)
	- Lógica reutilizável desacoplada
	- Testes unitários fáceis

- Exemplo de utilidade:

```bash
	//src/utils/currencyFormatter.ts
	export const formatBRL = (value: number) => {
  		return new Intl.NumberFormat('pt-BR', {
    		style: 'currency',
    		currency: 'BRL'
  		}).format(value);
	};
```

## 6. Fluxo de Dados Típico

- Dados entram por:
	- Telas (/screens) via interação do usuário
	- API externa (não implementado ainda)

- São processados em:
	- Utilitários (/utils)
	- Hooks customizados

- Armazenados no:
	- Contexto (/contexts)

- Exibidos por:
	- Componentes (/components)
	- Organizados em Telas (/screens)

- Tipados por:
	- Definições em (/types)

📦 Dependências Necessárias

Instale as bibliotecas adicionais:

```bash
npx expo install react-native-paper @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-vector-icons @types/react-native-vector-icons
```
<!--npm install @react-navigation/bottom-tabs @react-navigation/native react-native-screens react-native-safe-area-context react-native-vector-icons -->

## Passo 4: Definindo os Tipos

- Criar o arquivo src/types/index.ts

## Passo 5: Criando o Contexto de Gastos

- Criar src/contexts/ExpenseContext.tsx

## Passo 6: Componentes Reutilizáveis

- Criar src/components/ExpenseForm.tsx

## Passo 7: Criando as Telas
Crie src/screens/AddExpenseScreen.tsx
<!-- Crie src/screens/ExpenseListScreen.tsx
Crie src/screens/SummaryScreen.tsx

Passo 8: Configurando a Navegação
Crie src/components/BottomTabsNavigator.tsx

Passo 9: Configurando o App Principal
Atualize o App.tsx

Passo 10: Executando o Projeto
Execute o projeto com:
npx expo start -->


⚙️ Configuração do VS Code

Para habilitar o comando code no terminal:

- Abra o VS Code

- Pressione Ctrl+Shift+P (Windows/Linux) ou Cmd+Shift+P (Mac)

- Busque por "Shell Command"

- Selecione: "Install 'code' command in PATH"

- Reinicie o terminal
