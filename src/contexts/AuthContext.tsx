import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { api } from "../services/api";

type User = {
  email: string;
  nickname: string;
};

type SignUpCredentials = {
  email: string;
  nickname: string;
  password: string;
  legalName: string;
  businessName: string;
  registration: string;
};

type SignCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignCredentials) => Promise<void>;
  signUp: (credentials: SignUpCredentials) => Promise<void>;
  signOut: () => void;
  user: User | undefined;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();

  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem("@tuskdocs/token");

    console.log(token);

    if (token) {
      api
        .get("/users/me")
        .then((response) => {
          console.log(response);
          const { email, nickname } = response.data;

          setUser({ email, nickname });
        })
        .catch(() => {
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }: SignCredentials) {
    try {
      const { data } = await api.post("sessions", {
        email,
        password,
      });

      const { token, user } = data;

      localStorage.setItem("@tuskdocs/token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser({
        email,
        nickname: user.nickname,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function signUp({
    email,
    nickname,
    password,
    legalName,
    businessName,
    registration,
  }: SignUpCredentials) {
    try {
      await api.post("users", {
        email,
        nickname,
        username: email,
        password,
        company: {
          legalName,
          businessName,
          registration,
        },
      });

      signIn({ email, password });
    } catch (error) {
      console.log(error);
    }
  }

  function signOut() {
    localStorage.setItem("@tuskdocs/token", "");
  }

  return (
    <AuthContext.Provider
      value={{ signIn, isAuthenticated, user, signOut, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
