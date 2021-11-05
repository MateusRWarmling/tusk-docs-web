import { createContext, ReactNode, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { api } from "../services/api";

type User = {
  email: string;
};

type SignCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn: (credentials: SignCredentials) => Promise<void>;
  signOut: () => void;
  user: User | undefined;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

const history = useHistory();

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem("@tuskdocs/token");

    if (token) {
      api
        .get("/users/me")
        .then((response) => {
          const { email } = response.data;

          setUser({ email });
          console.log(response.data);
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

      const { token } = data;

      localStorage.setItem("@tuskdocs/token", token);

      setUser({
        email,
      });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  function signOut() {
    localStorage.setItem("@tuskdocs/token", "");

    history.push("/");
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
