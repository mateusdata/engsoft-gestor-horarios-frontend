import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../components/config/axiosInstance";
import { notification } from 'antd';
export const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (message, type) => {
    api[type](message)
  };

  useEffect(() => {
    const recoverUser = localStorage.getItem("usuario");
    if (recoverUser) {
      setUser(JSON.parse(recoverUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    !email ? 
    openNotificationWithIcon({ message: "Informe todos os campos" }, "error")
    :
    axiosInstance.post("/auth/login", {
      email,
      senha: password,
    }).then((response) => {
      console.log(response);
      const key = 'updatable';
      if (response.status === 200) {
        setLoading(true)
        notification.destroy(key);
        const userLocal = {
          nome: response.data.nome,
          email,
          token: response.data.token,
        }; localStorage.setItem("usuario", JSON.stringify(userLocal));
        setUser(userLocal);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        navigate("/");
      }
    }).catch((erro) => {
      console.log(erro);
      openNotificationWithIcon({ message: erro?.response?.data?.message, description: "Por favor, entre com as credenciais corretas." }, "error");
    });
  };

  const logout = () => {
    navigate("/login");
    setUser(null);
    localStorage.removeItem("usuario");
  };

  return (
    <Context.Provider
      value={{
        autenticado: !!user,
        user,
        setUser,
        login,
        logout,
        loading,
        contextHolder,
        openNotificationWithIcon,
        navigate
      }}
    >
      {children}
    </Context.Provider>
  );
};
