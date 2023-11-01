import { createContext } from "react";

export const GlobalContext = createContext();

export default function ContextGlobal({children}){

return(
    <GlobalContext.Provider value = {{nome: "Gustavo"}}>
        {children}
    </GlobalContext.Provider>
)
}