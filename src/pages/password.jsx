import React from 'react';
import 'animate.css';
import ifba from '../images/ifba.png';
import lamp from '../images/lamp.png';
import { Link } from 'react-router-dom';

function Password(){
  return (
    <div className='flex flex-col border min-h-screen font-normal font-[KoHo] not-italic leading-none shrink-0 md:flex-row'>
        <div className='bg-[#EFEFEF] w-screen h-screen'>
        <img src={ifba} alt="" className='pt-[20px] pl-[20px] pb-[55px]'/>
            <div className='flex justify-center min-h-40'>
                <form action="" method="post" className='flex flex-col justify-center items-center'>
                    <h1 className='text-[40px] pb-[60px]'>Redefinir sua senha</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-[20px] pb-[10px] ml-5'>Email</label>
                        <div className='w-full flex flex-col justify-center items-center'><input type="email" name="" id="" placeholder='Email' className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[75px]' /></div>
                    </div>
                    <button type="submit" className='bg-[#59AD4B] rounded-[10px] w-[195px] h-[45px] text-[#FFF] text-[25px] mb-[35px]'>Redefinir Senha</button>
                    <span className='text-[20px]'>Lembrou da sua senha ? <Link to={'/login'} className='text-[#178E04]'>Faça login aqui</Link></span>
                </form>
            </div>
        </div>
        <div className='flex-col bg-[#82CF6F] w-screen h-screen justify-center items-center tracking-[7.4px] space-x-[50px] hidden md:flex'>
            <img src={lamp} alt="" className='mt-[70px] pb-[40px]' />
            <h1 className='text-[30px] mb-[10px]'>Redefina o ambiente</h1>
            <h1 className='text-[30px] mt-[10px]'>Abra novas portas para novos conhecimentos.</h1>
        </div>
    </div>
  )
}

export default Password
