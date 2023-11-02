import { createContext, useState } from "react";

export const GlobalContext = createContext();

export default function ContextGlobal({children}){

    const [email, setemail] = useState()
return(
    <GlobalContext.Provider value = {{email, setemail}}>
        {children}
    </GlobalContext.Provider>
)
}