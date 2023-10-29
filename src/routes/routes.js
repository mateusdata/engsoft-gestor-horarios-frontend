import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Spin } from 'antd';
import Home from "../pages/home";
import Login from "../pages/login";
import { AuthProvider, Context } from "../context/authContext";

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
      </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
};
export default MyRoutes;
