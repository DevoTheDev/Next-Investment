"use client"
import * as React from "react";
import { authController } from "./controllers/AuthController";
import { useRouter } from "next/navigation";

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export interface AuthContextType {
  register: (username: string, password: string) => void,
  login: (username: string, password: string) => void,
  token: string | null;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = React.useState<string | null>(null);
  const { registerUser, loginUser } = authController();
  const router = useRouter();

  const register = async (username: string, password: string) => {
    try {
      const response = await registerUser(username, password);
      console.log('Registration successful:', response);
      if(response) {
        router.push("/auth/login")
      }
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const { token } = await loginUser(username, password);
      setToken(token);
      if(token) {
        router.push("/")
      }
      console.log('Login successful, token:', token);
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed. Please check your credentials.');
    }
  };

  return (
    <AuthContext.Provider value={{ register, login, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
