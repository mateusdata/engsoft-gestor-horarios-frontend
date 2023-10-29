import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import { AuthProvider, Context } from "../context/authContext";
import { Spin } from 'antd';
import { GlobalContext } from "../context/globalContext";
import Password from "../pages/password";


const MyRoutes = () => {

  function Private({ children }) {
   // const { autenticado, loading } = useContext(Context);
       const { loading } = useContext(Context);


    if (loading) {
      return <div style={{display:"flex", color: "blue", justifyContent:"center",alignItems:"center", height:"100vh" }}>
          <Spin size="large" delay={0} />
         </div>
    }
      //  if (!!autenticado) {//
    if (false) {
      return <Navigate to={"/login" || "/test"} />
    }
    return children
  }
  return (
    <BrowserRouter>
    <GlobalContext>
      <AuthProvider>
      <Routes>
        <Route exact path="/" element={<Private>  <Home /> </Private>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/password" element={<Password />} />
      </Routes>
      </AuthProvider>
      </GlobalContext>
    </BrowserRouter>
  );
};
export default MyRoutes;
