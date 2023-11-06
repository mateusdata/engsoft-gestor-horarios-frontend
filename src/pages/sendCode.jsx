import React, { useContext, useEffect, useState } from 'react';
import 'animate.css';
import ifba from '../images/ifba.png';
import lampada from '../images/lampada.png';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance.js';
import { GlobalContext } from '../context/globalContext';

/**
 * Componente para envio e validação de código de recuperação.
 *
 * Este componente permite que o usuário insira um código de recuperação e valida o código.
 *
 * @returns {JSX.Element} Elemento JSX que representa a página de envio e validação de código.
 */
function SendCode() {
    const navigate = useNavigate();
    const [codigo, setCodigo] = useState();
    const { email, openNotificationWithIcon, contextHolder } = useContext(GlobalContext);

    useEffect(() => {
        if (!email) {
            navigate("/login");
        }
    }, []);

    if (!email) {
        return null;
    }

    /**
     * Valida o código inserido e redireciona para a página de redefinição de senha.
     *
     * @param {Event} e - O evento de clique no botão de validação do código.
     */
    function redirect(e) {
        e.preventDefault();

        if (codigo) {
            axiosInstance.post('/validarcodigo', { codigo: codigo, email: email })
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        navigate('/changePassword');
                    }
                })
                .catch((error) => {
                    openNotificationWithIcon({ message: "Código inválido" }, "error");
                });
        } else {
            openNotificationWithIcon({ message: "Informe o código enviado por email" }, "info");
        }
    }

    return (
        <div className='flex flex-col border min-h-screen font-normal font-[KoHo] not-italic leading-none shrink-0 md:flex-row'>
            {contextHolder}
            <div className='bg-[#EFEFEF] w-screen h-screen'>
                <img src={ifba} alt="" className='pt-[20px] pl-[20px] pb-[55px]' />
                <div className='flex justify-center min-h-40'>
                    <form action="" className='flex flex-col justify-center items-center'>
                        <h1 className='text-[40px] pb-[60px]'>Redefinir sua senha</h1>
                        <div className='flex flex-col'>
                            <label htmlFor="code" className='text-[20px] pb-[10px] ml-5'>Código de Recuperação</label>
                            <span className='text-red-500 ml-5 pb-1'> {`Um email foi enviado para ${email}`}</span>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <input type="text" name="code" id="code" placeholder='Código de Recuperação' onChange={(e) => setCodigo(e.target.value)} className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[75px]' />
                            </div>

                        </div>
                        <button type="submit" onClick={redirect} className='bg-[#59AD4B] rounded-[10px] w-[195px] h-[45px] text-[#FFF] text-[20px] md:text-[25px] mb-[35px]'>Verificar Código</button>
                    </form>
                </div>
            </div>
            <div className='flex-col bg-[#82CF6F] w-screen h-screen justify-center items-center tracking-[7.4px] space-x-[50px] hidden md:flex'>
                <img src={lampada} alt="" className='mt-[70px] pb-[40px]' />
                <h1 className='text-[30px] mb-[10px]'>Redefina o ambiente</h1>
                <h1 className='text-[30px] mt-[10px]'>Abra novas portas para novos conhecimentos.</h1>
            </div>
        </div>
    )
}

export default SendCode
