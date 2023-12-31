import React, { useContext, useState } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance.js";
import ifba from "../images/ifba.png";
import { GlobalContext } from "../context/globalContext";
import { Checkbox, Modal } from "antd";

function RegisterUsers() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [administrador, setAdministrador] = useState(false);
    const [cargo, setCargo] = useState("");
    const [matricula, setMatricula] = useState("");
    const [departamento, setDepartamento] = useState();
    const { contextHolder, openNotificationWithIcon } = useContext(GlobalContext);
    const [MostrarModal, setMostrarModal] = useState(false);
    const [disponibilidade, setdisponibilidadel] = useState({
        segundaFeira:"", tercaFeira:"", quartaFeira:"", quintaFeira:"", sextaFeira:""
    });

    function SelecionarDia(e){
        
        if (e.target.value == Object.keys(disponibilidade).includes("segundaFeira")){
            alert("aa")
            return
        }

    }
   
    function CadastrarUsuario(e) {
        e.preventDefault()
        const obj = {
            nome, email, senha, administrador, cargo, matricula, departamento
        }
        const verificarSenha = (senha) => /[0-9]/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha) && senha.length > 5;
        if (nome && email && matricula && departamento && cargo && senha) {
            if(verificarSenha(senha)){
               return axiosInstance.post("/cadastro", obj).then((response) => {
                    console.log(email, senha, cargo, matricula, departamento, administrador);
                    setDepartamento(""); setAdministrador(false);setNome("");setEmail("");setSenha("");setCargo("");setMatricula("");
                    openNotificationWithIcon({ message: "Cadastro realizado com sucesso!" }, "success")
                }).catch((erro) => {
                    openNotificationWithIcon({ message: "Ocorreu um  erro no servidor" }, "error")
                })
            }
            openNotificationWithIcon({ message: "A senha deve ter no mínimo 6 dígitos e incluir números e caracteres especiais." }, "warning")          
        }
        else {
            openNotificationWithIcon({ message: "Preencha todos os campos."}, "info")
        }   
    }
    return (

        <Layouts>
            {contextHolder}
            <Modal open={MostrarModal} onCancel={() => { setMostrarModal(false) }} okButtonProps={{className:"bg-blue-500"}} >
                <div className="flex flex-col gap-3">
                    <h1>Selecione os dia disponiveis</h1>
                    <div>
                        <label className="flex items-center gap-2" htmlFor="">Segunda-Feira <Checkbox onChange={SelecionarDia} value={"segundaFeira"}></Checkbox> </label>

                    </div>
                    <div>
                        <label className="flex items-center gap-2" htmlFor="">Terça-Feira <Checkbox ></Checkbox> </label>

                    </div>
                    <div>
                        <label className="flex items-center gap-2" htmlFor="">Quarta-Feira <Checkbox ></Checkbox> </label>

                    </div>
                    <div>
                        <label className="flex items-center gap-2" htmlFor="">Quinta-Feira <Checkbox ></Checkbox> </label>

                    </div>
                    <div>
                        <label className="flex items-center gap-2" htmlFor="">Sexta-Feira <Checkbox ></Checkbox> </label>

                    </div>

                </div>
            </Modal>
            <div style={{ fontFamily: "Inter" }} className="bg-[#F3F4F6]  flex item-center min-h-[85vh] w-full  flex-col">
                <div className="m-1  ">
                    <div className=" border  items-center justify-center md:justify-start hidden lg:flex fixed" >
                        <img src={ifba} alt="Logo do IFBA" className="h-15 w-15 rounded-lg shadow-md" />
                    </div>
                    <div className='flex flex-col items-center justify-center  sm:mt-8 2xl:mt-32 '>
                        <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-15 lg:py-15 md:px-8  xl:w-[50%] w-full">
                            <div className="md:pr-5 md:w-1/1 xl:pr-0 xl:w-1/1 w-full  ">
                                <h2 className=" text-center text-2xl sm:text-1xl dark:text-gray-800 text-gray-600 font-semibold md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight whitespace-nowrap">
                                    Cadastro do professor
                                </h2>

                                <form action="" className="mt-8 border rounded-md shadow-lg p-5">
                                    <div className=" gap-y-4">

                                        <div className="flex items-center  gap-8  flex-col md:flex-row">
                                            <div className=" w-full">
                                                <label htmlFor="" className="block mb-2  text-lg dark:text-gray-800">Nome</label>
                                                <div className="">
                                                    <input value={nome} placeholder="Nome" type="text" onChange={(e) => setNome(e.target.value)} name="Nome" required className=" border border-gray-200 focus:outline-none focus:border-[#1A73E8] py-3 px-4 block w-full  rounded-md text-sm   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>
                                            <div className=" w-full">
                                                <label htmlFor="" className="block mb-2  text-lg dark:text-gray-800">Email</label>
                                                <div className="">
                                                    <input value={email} placeholder="Email" type="text" onChange={(e) => setEmail(e.target.value)} name="Email" required className=" border border-gray-200 focus:outline-none focus:border-[#1A73E8] py-3 px-4 block w-full  rounded-md text-sm   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="flex items-center  gap-8  flex-col md:flex-row">
                                            <div className=" w-full">
                                                <label htmlFor="" className="block mb-2  text-lg dark:text-gray-800">Cargo</label>
                                                <div className="">
                                                    <input value={cargo} placeholder="cargo" type="text" onChange={(e) => setCargo(e.target.value)} name="Cargo" required className="border border-gray-200 focus:outline-none focus:border-[#1A73E8] py-3 px-4 block w-full  rounded-md text-sm   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>
                                            <div className=" w-full">
                                                <label htmlFor="" className="block mb-2  text-lg dark:text-gray-800">Matricula</label>
                                                <div className="">
                                                    <input value={matricula} placeholder="matricula" type="text" onChange={(e) => setMatricula(e.target.value)} name="matricula" required className=" border border-gray-200 focus:outline-none focus:border-[#1A73E8] py-3 px-4 block w-full  rounded-md text-sm   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="flex items-center  gap-8  flex-col md:flex-row">
                                            <div className=" w-full">
                                                <label htmlFor="" className="block mb-2  text-lg dark:text-gray-800">Departamento</label>
                                                <div className="">
                                                    <input value={departamento} placeholder="Departamento" type="text" onChange={(e) => setDepartamento(e.target.value)} name="Departamento" required className=" border border-gray-200 focus:outline-none focus:border-[#1A73E8] py-3 px-4 block w-full  rounded-md text-sm   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>
                                            <div className=" w-full">
                                                <label htmlFor="" className="block mb-2  text-lg dark:text-gray-800">Senha</label>
                                                <div className="">
                                                    <input value={senha} placeholder="Senha" type="password" onChange={(e) => setSenha(e.target.value)} name="Senha" required className=" border border-gray-200 focus:outline-none focus:border-[#1A73E8] py-3 px-4 block w-full  rounded-md text-sm   dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="flex items-center  pt-3  gap-8 justify-between flex-row-reverse">
                                            <div className="class items-center">
                                                <label htmlFor="" className="m-2 text-lg mb-2 ">Administrador</label>
                                                <Checkbox value={administrador} onChange={() => setAdministrador(!administrador)}></Checkbox>
                                            </div>
                                          { false &&  <div className="class items-center">
                                                <button style={{ fontFamily: "Inter" }} onClick={() => { setMostrarModal(true) }} className="px-4 inline-flex items-center gap-x-2 text-md font-semibold animate-pulse rounded-lg border border-transparent text-gray-700 hover:bg-blue-100 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:bg-blue-800/30 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 "
                                                >Disponibilidade</button>
                                            </div>}

                                        </div>
                                        <div className="flex justify-center items-center mb-50">
                                            <button onClick={CadastrarUsuario} className="py-3 px-4 w-60 mt-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800  ">Cadastrar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layouts>
    );

}
export default RegisterUsers;