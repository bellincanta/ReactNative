//Este código cria um sistema de autenticação usando a Context API do React. 
//O AuthProvider envolve a aplicação e fornece o estado do usuário para todos 
// os componentes filhos através do contexto. 
// O hook personalizado useAuth permite que qualquer componente dentro do Provider
//  acesse e atualize o estado do usuário de forma simples e segura.

// Importa as dependências necessárias do React
import React, {
  createContext, // Função para criar um contexto React
  useContext, // Hook para consumir um contexto
  useState, // Hook para gerenciar estado em componentes funcionais
  type ReactNode, // Tipo TypeScript para elementos React válidos (children)
} from "react";

// Define o tipo para o objeto Usuário
type User = { nome: string };

// Define o tipo para o valor do contexto de autenticação
type AuthContextValue = {
  user: User; // Objeto usuário atual
  setUser: React.Dispatch<React.SetStateAction<User>>; // Função para atualizar o usuário
};

// Cria o contexto de autenticação com valor inicial undefined
// O tipo é AuthContextValue ou undefined (quando usado fora do Provider)
export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

// Define as props para o componente AuthProvider
type AuthProviderProps = {
  children: ReactNode; // Componentes filhos que terão acesso ao contexto
};

// Componente Provider que envolve a aplicação/componentes filhos
export function AuthProvider({ children }: AuthProviderProps) {
  // Estado que armazena o usuário atual, inicializado com { nome: "IFPR" }
  const [user, setUser] = useState<User>({ nome: "Alunelson" });
  
  // Valor que será disponibilizado pelo contexto
  const value: AuthContextValue = { user, setUser };

  // Retorna o Provider do contexto com o valor definido, envolvendo os children
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personalizado para consumir o contexto de autenticação
export function useAuth() {
  // Consome o contexto AuthContext
  const ctx = useContext(AuthContext);
  
  // Se o contexto não existir (for undefined), lança um erro
  // Isso garante que o hook só seja usado dentro de um AuthProvider
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  
  // Retorna o contexto (user e setUser)
  return ctx;
}

// Exporta o AuthProvider como padrão
export default AuthProvider;