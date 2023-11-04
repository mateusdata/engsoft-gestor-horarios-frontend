import { createContext, useState } from "react";
import { notification } from 'antd';


export const GlobalContext = createContext();

export default function ContextGlobal({children}){
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (message, type) => {
      api[type](message)
    };
    const [email, setemail] = useState()
return(
    <GlobalContext.Provider value = {{email, setemail, contextHolder, openNotificationWithIcon}}>
        {children}
    </GlobalContext.Provider>
)
}