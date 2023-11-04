import React, { useContext, useState } from 'react';
/* import 'animate.css'; */
import ifba from '../images/ifba.png';
import lampada from '../images/lampada.png';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance';
import { GlobalContext } from '../context/globalContext';

function SendCode(){
    const navigate = useNavigate();
    const [codigo, setcodigo] = useState();
    const {email, setemail, openNotificationWithIcon, contextHolder} = useContext(GlobalContext)

    function redirect(e){
        e.preventDefault()
        axiosInstance.post('/validarcodigo', {codigo: codigo, email: email}).then((response) => {
            console.log(response)
            if(response.status === 200){
                navigate('/changePassword')
            }
        }).catch((error) =>{
            openNotificationWithIcon({ message: "Código invalido" }, "error")
        })
    }
  return (
    <div className='flex flex-col border min-h-screen font-normal font-[KoHo] not-italic leading-none shrink-0 md:flex-row'>
        {contextHolder}
        <div className='bg-[#EFEFEF] w-screen h-screen'>
        <img src={ifba} alt="" className='pt-[20px] pl-[20px] pb-[55px]'/>
            <div className='flex justify-center min-h-40'>
                <form action="" className='flex flex-col justify-center items-center'>
                    <h1 className='text-[40px] pb-[60px]'>Redefinir sua senha</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="code" className='text-[20px] pb-[10px] ml-5'>Código de Recuperação</label>
                        <div className='w-full flex flex-col justify-center items-center'><input type="text" name="code" id="code" placeholder='Código de Recuperação' onChange={(e)=> setcodigo(e.target.value)} className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[75px]' /></div>
                    </div>
                    <button type="submit" onClick={redirect} className='bg-[#59AD4B] rounded-[10px] w-[195px] h-[45px] text-[#FFF] text-[25px] mb-[35px]'>Verificar Código</button>
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
