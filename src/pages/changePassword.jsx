import React, { useContext, useState } from 'react';
/* import 'animate.css'; */
import ifba from '../images/ifba.png';
import lampada from '../images/lampada.png';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance';
import { GlobalContext } from '../context/globalContext';

function ChangePassword(){
    const navigate = useNavigate();
    const [senha, setsenha] = useState();
    const [new_change, setNewChange] = useState();
    const {email, setemail} = useContext(GlobalContext)

    function redirect(e){
        e.preventDefault()
        axiosInstance.post('/resetarsenha', {email: email, senha: senha}).then((response) =>{
            console.log(response)
            navigate("/login");
        }).catch((error) =>{
            console.log(error)
        })
        
    }
  return (
    <div className='flex flex-col border min-h-screen font-normal font-[KoHo] not-italic leading-none shrink-0 md:flex-row'>
        <div className='bg-[#EFEFEF] w-screen h-screen'>
        <img src={ifba} alt="" className='pt-[20px] pl-[20px] pb-[55px]'/>
            <div className='flex justify-center min-h-40'>
                <form action="" method="post" className='flex flex-col justify-center items-center'>
                    <h1 className='text-[40px] pb-[60px]'>Redefinir sua senha</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="new_password" className='text-[20px] pb-[10px] ml-5'>Nova Senha</label>
                        <div className='w-full flex flex-col justify-center items-center'><input type="password" name="new_password" id="new_password" placeholder='Nova Senha' onChange={(e)=> setsenha(e.target.value)} className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[25px]' /></div>
                        <label htmlFor="new_confirm" className='text-[20px] pb-[10px] ml-5'>Confirmar Nova Senha</label>
                        <div className='w-full flex flex-col justify-center items-center'><input type="password" name="new_confirm" id="new_confirm" placeholder='Confirmar Nova Senha' onChange={(e)=> setNewChange(e.target.value)} className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[75px]' /></div>
                    </div>
                    <button type="submit" onClick={redirect} className='bg-[#59AD4B] rounded-[10px] w-[195px] h-[45px] text-[#FFF] text-[25px] mb-[35px]'>Alterar Senha</button>
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

export default ChangePassword
