import { createContext, useState } from "react";
import { notification } from 'antd';


export const GlobalContext = createContext();

export default function ContextGlobal({children}){
    const [api, contextHolder] = notification.useNotification();
    const [currenPage, setCurrentPage] = useState(1);
    const openNotificationWithIcon = (message, type) => {
      api[type](message)
    };
    const [email, setemail] = useState()
return(
    <GlobalContext.Provider value = {{email, setemail, contextHolder, openNotificationWithIcon, currenPage, setCurrentPage}}>
        {children}
    </GlobalContext.Provider>
)
}