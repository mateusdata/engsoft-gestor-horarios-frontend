import React, { useContext, useState } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance";
import ifba from "../images/ifba.png";
import { GlobalContext } from "../context/globalContext";


function RegisterUsers(){
    const [nome,setNome] = useState();
    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();
    const [tipo,setTipo] = useState(true);
    const [cargo,setCargo] = useState();
    const [matricula,setMatricula] = useState();
    const [departamento,setDepartamento] = useState();
    const {contextHolder, openNotificationWithIcon}= useContext(GlobalContext);

    function CadastrarUsuario(e) {
        e.preventDefault()
        
        const obj = {
            nome,email,senha,tipo,cargo,matricula,departamento
        }
        console.log(nome,email,senha,cargo,matricula,departamento);

        axiosInstance.post("/cadastro",obj).then((response)=>{
            console.log(response)
            alert("Cadastro realizado....")
            openNotificationWithIcon({ message: "Cadastro realizado com sucesso!" }, "success")
        }).catch((erro)=>{
            console.log(erro)
            openNotificationWithIcon({ message: "Ocorreu um erro." }, "error")
        })

    }
return(

    <Layouts>
    {contextHolder}
    <div className="bg-gray-100  flex item-center justify-stretch border w-full gap-80">  
        <div className="m-5 ">
            <img src={ifba} alt="Logo do IFBA" />
        </div>
        <div className=""> 
        <br />
            <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
                <h2 className="font-[KoHo] text-2xl text-gray-600 font-bold md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight dark:text-gray-200 whitespace-nowrap">
                Cadastro do professor
                </h2>
              <form action="" className="mt-8 "> 
                <div className="grip gap-y-4">
                    <div>
                        <label htmlFor="" className="block mb-2 dark:text-white font-[KoHo] text-lg">Nome</label> 
                        <div className="">
                            <input placeholder="Nome" type="text" onChange={(e)=> setNome(e.target.value)} name="Nome" required className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/> 
                        </div>
                    </div> 
                    <br />
                    <div> 
                        <div className="flex justify-between intems-center">
                         <label htmlFor="" className="block text-lg
                          mb-2 dark:text-white font-[KoHo]">Email</label>
                        </div>
                        <div className=""> 
                         <input placeholder="Email" type="text" onChange={(e)=> setEmail(e.target.value)} name="Email"   required  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/> 
                        </div>
                    </div>  
                    <br />
                    <div> 
                        <div className="flex justify-between intems-center">
                         <label htmlFor="" className="block text-lg
                          mb-2 dark:text-white font-[KoHo]">Cargo</label>
                        </div>
                        <div className=""> 
                         <input placeholder="Informe o cargo" type="text" onChange={(e)=> setCargo(e.target.value)} name="Cargo"   required  className="py-3 px-4 block w-full border-gray-200 rounded-md text-lg
                          focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/> 
                        </div>
                    </div>  
                    <br />
                    <div> 
                        <div className="flex justify-between intems-center">
                         <label htmlFor="" className="block text-lg
                          mb-2 dark:text-white font-[KoHo]">Matricula</label>
                        </div>
                        <div className=""> 
                         <input placeholder="Informe a matrícula" type="text" onChange={(e)=> setMatricula(e.target.value)} name="Matricula"   required  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/> 
                        </div>
                    </div>  
                    <br />
                    <div> 
                        <div className="flex justify-between intems-center">
                         <label htmlFor="" className="block text-lg
                          mb-2 dark:text-white font-[KoHo]">Departamento</label>
                        </div>
                        <div className=""> 
                         <input placeholder="Informe o departamento" type="text" onChange={(e)=> setDepartamento(e.target.value)} name="Departamento"   required  className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/> 
                        </div>
                    </div>  
                    <br />
                    <div>
                        <div className="flex justify-between intems-center"> 
                         <label htmlFor="" className="block text-lg
                          mb-2 dark:text-white font-[KoHo]">Senha</label> 
                        </div>
                        <div className=""> 
                         <input placeholder="Senha" type="password" onChange={(e)=> setSenha(e.target.value)} name="Senha" required className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/>
                        </div>
                    </div> 
                    <br />
                    <div>
                        <div className="class items-center">
                         <label htmlFor="" className="m-2 text-lg
                          mb-2 dark:text-white font-[KoHo]">Administrador</label>
                         <input defaultChecked={tipo} type="checkbox" onClick={()=> setTipo(! tipo)} name="Administrador" className=""/>    
                        </div>       
                    </div> 
                    <div className="flex fle-col items-center"> 
                     <button onClick={CadastrarUsuario} className="py-3 px-4 w-60 mt-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 font-[KoHo] ">Cadastrar</button>
                    </div>
                </div>
             </form> 
            </div>
        </div> 
    </div>
    </Layouts>
);

}
export default RegisterUsers;