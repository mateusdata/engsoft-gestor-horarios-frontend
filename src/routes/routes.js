import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Spin } from 'antd';
import Home from "../pages/home";
import Login from "../pages/login";
import Password from "../pages/password"
import { AuthProvider, Context } from "../context/authContext";
import SendCode from "../pages/sendCode";
import ChangePassword from "../pages/changePassword";
import NotFound from "../components/notFound";

const MyRoutes = () => {

  function Private({ children }) {
    const { autenticado, loading } = useContext(Context);
    const navigate = useNavigate()

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
        <Route exact path="/password" element={<Password />} />
        <Route exact path="/sendCode" element={<SendCode />} />
        <Route exact path="/changePassword" element={<ChangePassword />} />
        <Route exact path="*" element={<NotFound />} />
        
        
      </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
};
export default MyRoutes;
