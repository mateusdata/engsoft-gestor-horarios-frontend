import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import { AuthProvider, Context } from "../context/authContext";
import { Spin } from 'antd';
import Teste from "../pages/teste";
import RegisterUser from "../pages/register";

const MyRoutes = () => {

  function Private({ children }) {
    const { autenticado, loading } = useContext(Context);

    if (loading) {
      return <div style={{display:"flex", color: "blue", justifyContent:"center",alignItems:"center", height:"100vh" }}>
          <Spin size="large" delay={0} />
         </div>
    }
    if (!autenticado) {
      return <Navigate to={"/login" || "/test"} />
    }
    return children
  }
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Private>  <Home /> </Private>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/teste" element={<Private>  <Teste /> </Private>} />
        <Route exact path="/cadastro" element={<RegisterUser />} />

      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
export default MyRoutes;
