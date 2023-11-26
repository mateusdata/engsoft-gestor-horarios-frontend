import React, { useContext, useEffect, useState } from 'react';
import 'animate.css';
import Sifba from '../image2/sifba.svg'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance.js';
import { GlobalContext } from '../context/globalContext';

/**
 * Componente para solicitar código de recuperação de senha por email.
 *
 * Este componente permite que o usuário insira seu email e solicite um código de recuperação de senha.
 *
 * @returns {JSX.Element} Elemento JSX que representa a página de solicitação de código de recuperação de senha.
 */
function Password() {
    const navigate = useNavigate();
    const { email, setemail } = useContext(GlobalContext);
    const { contextHolder, openNotificationWithIcon } = useContext(GlobalContext);

    /**
     * Manipula o processo de solicitação de código de recuperação por email.
     *
     * @param {Event} e - O evento de clique no botão de solicitação de código.
     */
    function redirect(e) {
        e.preventDefault();
        console.log(email);

        if (email) {
            return axiosInstance.post('/recuperaremail', { email: email })
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        navigate("/sendCode");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    openNotificationWithIcon({ message: "Nenhuma conta com esse email" }, "error");
                });
        }
        openNotificationWithIcon({ message: "Informe um email" }, "info");
    }

  return (
    <div className='flex flex-col border min-h-screen font-normal font-[KoHo] not-italic leading-none shrink-0 md:flex-row'>
        {contextHolder}
        <div className='bg-[#EFEFEF] w-screen h-screen flex flex-col justify-center items-center'>
        <div className='flex text justify-center'><img src={Sifba} alt="logo-SIFBA" className='pt-[20px] pl-[20px] pb-[55px]'/></div>
            <div className='flex justify-center min-h-40'>
                <form className='flex flex-col justify-center items-center'>
                    <h1 className='text-[40px] pb-[60px]'>Redefinir sua senha</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-[20px] pb-[10px] ml-5'>Email</label>
                        <div className='w-full flex flex-col justify-center items-center'><input type="email" name="email" id="email" onChange={(e)=> setemail(e.target.value)} placeholder='Email' className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[75px]' /></div>
                    </div>
                    <button type="submit" onClick={redirect} className='bg-green-500 rounded-[10px] w-[195px] h-[45px] text-[#FFF] text-[25px] mb-[35px]'>Redefinir Senha</button>
                    <span className='text-[20px]'>Lembrou da sua senha ? <Link to={'/login'} className='text-green-600'>Faça login aqui</Link></span>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Password
