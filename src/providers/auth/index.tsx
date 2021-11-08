import { useContext, createContext, useState, ReactNode } from "react";
import { useHistory } from "react-router";
import api from "../../services";

interface AuthProps {
  children: ReactNode;
}

interface User {
  email: string;
  password: string;
  passwordConfirm: string;
}

interface AuthProviderData {
  logout: () => void;
  authToken: string;
  signUp: (userData: User) => void;
  signIn: (userData: User) => void;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthtoken] = useState(
    () => localStorage.getItem("token") || ""
  );
  const [userId, setUserId] = useState(
    () => localStorage.getItem("@KenzirBurger:userId") || ""
  );

  const signUp = (userData: User) => {
    api
      .post("users", userData)
      .then((response) => {
        console.log(userData);
        history.push("/");
        console.log("cadastro realizado");
      })
      .catch((err) => console.log(err));
  };

  const signIn = (userData: any) => {
    api
      .post("login", userData)
      .then((response) => {
        localStorage.setItem("@KenzieBurger:token", response.data.accessToken);
        localStorage.setItem("@KenzieBurger:userId", response.data.user.id);
        setAuthtoken(response.data.acessToken);
        setUserId(response.data.user.id);
        history.push("/");
        console.log("logou");
      })
      .catch((err) => console.log(err));
  };
  const logout = () => {
    localStorage.clear();
    setAuthtoken("");
    setUserId("");
    history.push("/");
    console.log("deslogou");
  };

  return (
    <AuthContext.Provider value={{ logout, authToken, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
