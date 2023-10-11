import React, { useEffect } from 'react'
import axiosInstance from '../components/config/axiosInstance'
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const GlobalLayouts = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();
    const navigate = useNavigate();

    const openNotificationWithIcon = (message, type) => {
        api[type](message)
    };

    useEffect(() => {
        const interval = setInterval(() => {
            axiosInstance.get("/estalogado").then((response) => {
            }).catch((erro) => {
                if (erro?.response?.status === 401) {
                    openNotificationWithIcon({ message: "Token expirado.", description: "Atenção, Voce sera deslogado.." }, "warning");

                    setTimeout(() => {
                        navigate("/login");
                    }, 5000);
                    localStorage.removeItem("usuario");

                }
                if (erro?.response?.status !== 403) {
                    console.log("");
                }
            });
        }, 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line
    }, []);

    return (
        <div>{contextHolder}{children}</div>
    )
}
export default GlobalLayouts   