import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Spin } from 'antd';
import Home from "../pages/home";
import Login from "../pages/login";
import Password from "../pages/password"
import { AuthProvider, Context } from "../context/authContext";
import SendCode from "../pages/sendCode";
import ChangePassword from "../pages/changePassword";
import NotFound from "../components/notFound";
import ContextGlobal from "../context/globalContext";
import RegisterUsers from "../pages/registerUsers";
import ScheduleTable from "../pages/scheduleTable";
import Teachers from "../pages/teachers";

const MyRoutes = () => {

  function Private({ children }) {
    const { autenticado, loading } = useContext(Context);

    if (loading) {
      return <div style={{display:"flex", color: "blue", justifyContent:"center",alignItems:"center", height:"100vh" }}>
          <Spin size="large" delay={0} />
         </div>
    }
    if (false) {
      return <Navigate to={"/login" || "/test"} />
    }
    return children
  }
  return (
    <BrowserRouter>
      <ContextGlobal>

      <AuthProvider>
        
      <Routes>
        <Route exact path="/" element={<Private>  <Home /> </Private>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/password" element={<Password />} />
        <Route exact path="/sendCode" element={<SendCode />} />
        <Route exact path="/changePassword" element={<ChangePassword />} />
        <Route exact path="*" element={<NotFound />} />
        <Route exact path="/register" element={<Private> <RegisterUsers/> </Private>} />
        <Route exact path="/teachers" element={<Private><Teachers /></Private>} />

        
      </Routes>

      </AuthProvider>
      </ContextGlobal>
    </BrowserRouter>
  );
};
export default MyRoutes;
