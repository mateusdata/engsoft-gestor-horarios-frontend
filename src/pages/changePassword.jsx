import React, { useContext, useEffect, useState } from 'react';
import 'animate.css';
import Sifba from '../image2/sifba.svg';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance.js';
import { GlobalContext } from '../context/globalContext';

function ChangePassword(){
    const navigate = useNavigate();
    const [senha, setsenha] = useState();
    const [new_change, setNewChange] = useState();
    const {email, contextHolder, openNotificationWithIcon} = useContext(GlobalContext)
    const {}= useContext(GlobalContext);

    useEffect(()=>{
        //if(!email){navigate("/login")};
    },[]);

    if(!email){
        //return null;
    }

    const verificarSenha = (senha) => /[0-9]/.test(senha) && /[!@#$%^&*(),.?":{}|<>]/.test(senha);; 
      
    function redirect(e){
        e.preventDefault()
        if(senha && senha === new_change){
            if(senha && senha?.length > 5 && verificarSenha(senha)){
            return  axiosInstance.post('/resetarsenha', {email: email, senha: senha}).then((response) =>{
                openNotificationWithIcon({ message: "Sua senha foi atualizada." }, "success")
                setTimeout(() => {
                    navigate("/login");
                }, 2500);
                }).catch((error) =>{
                    console.log(error);
                    openNotificationWithIcon({ message: "Ocorreu um erro ao atualizar a senha."}, "error")
                })
         }
         return openNotificationWithIcon({ message: "A nova senha deve conter números e caracteres especiais ! Ex:' 123456* '"}, "warning")
        }
        openNotificationWithIcon({ message: "Informe ambas as senhas e certifique-se de que sejam idênticas." }, "info")
    }
  return (
    <div className='flex flex-col border min-h-screen font-normal font-[KoHo] not-italic leading-none shrink-0 md:flex-row'>
        {contextHolder}
        <div className='bg-[#EFEFEF] w-screen h-screen flex flex-col justify-center items-center'>
        <img src={Sifba} alt="" className='pt-[20px] pl-[20px] pb-[55px]'/>
            <div className='flex justify-center min-h-40'>
                <form action="" method="post" className='flex flex-col justify-center items-center'>
                    <h1 className='text-[40px] pb-[60px]'>Redefinir sua senha</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="new_password" className='text-[20px] pb-[10px] ml-5'>Nova Senha</label>
                        <div className='w-full flex flex-col justify-center items-center'><input type="password" name="new_password" id="new_password" placeholder='Nova Senha' onChange={(e)=> setsenha(e.target.value)} className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[25px]' /></div>
                        <label htmlFor="new_confirm" className='text-[20px] pb-[10px] ml-5'>Confirmar Nova Senha</label>
                        <div className='w-full flex flex-col justify-center items-center'><input type="password" name="new_confirm" id="new_confirm" placeholder='Confirmar Nova Senha' onChange={(e)=> setNewChange(e.target.value)} className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[75px]' /></div>
                    </div>
                    <button type="submit" onClick={redirect} className='bg-green-500 rounded-[10px] w-[195px] h-[45px] text-[#FFF] text-[25px] mb-[35px]'>Alterar Senha</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword
