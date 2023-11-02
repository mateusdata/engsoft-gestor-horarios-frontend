import React, { useState } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance";

function RegisterUsers(){
    const [nome,setNome] = useState();
    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();
    const [tipo,setTipo] = useState(true);

    function CadastrarUsuario(e) {
        e.preventDefault()
        
        const obj = {
            nome,email,senha,tipo
        }
        console.log(nome,email,senha);
        axiosInstance.post("/cadastro",obj).then((response)=>{
            console.log(response)
        }).catch((erro)=>{
            console.log(erro)
        })

    }
return(


    <Layouts>
    <form action="" className=""> 

        <label htmlFor="">Nome</label> <br />
        <input placeholder="Nome" type="text" onChange={(e)=> setNome(e.target.value)} name="Nome"/>
        <br /> 
        <label htmlFor="">Email</label> <br />
        <input placeholder="Email" type="text" onChange={(e)=> setEmail(e.target.value)} name="Email"/> <br />
        <br/>
        <label htmlFor="">Senha</label> 
        <input placeholder="Senha" type="password" onChange={(e)=> setSenha(e.target.value)} name="Senha"/> <br/>
        <br/> 
        <button onClick={CadastrarUsuario}>Salvar</button>
        <br/>
        <label htmlFor="">Administrador</label>
        <input defaultChecked={tipo} type="checkbox" onClick={()=> setTipo(! tipo)} name="Administrador" />
        
   
    </form>  
    </Layouts>
);

}
export default RegisterUsers;