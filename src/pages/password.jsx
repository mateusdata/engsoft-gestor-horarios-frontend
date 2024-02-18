import React, { useContext } from 'react';
import 'animate.css';
import Sifba from '../image2/sifba.svg'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance.js';
import { GlobalContext } from '../context/globalContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
function Password(){
    const navigate = useNavigate();
    const {email, setemail} = useContext(GlobalContext);
    const schema =  yup.object({
        email: yup.string("").email("Email inválido").required("Email obrigatorio")
    })
    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver:yupResolver(schema),
        defaultValues:{
            email
        }
    });
    const { contextHolder } = useContext(GlobalContext);

    const onSubmit = data => {
        axiosInstance.post('/recuperaremail', {email: data.email}).then((response)=>{
            if(response.status === 200){
                setemail(data?.email)
                navigate("/sendCode");
            }
        }).catch((error)=>{
            console.log(error)
            setError("email", {message:"Email não encontrado"})
        })
    }

    return (
        <div className='flex flex-col border min-h-screen font-normal font-[KoHo] not-italic leading-none shrink-0 md:flex-row'>
            {contextHolder}
            <div className='bg-[#EFEFEF] w-screen h-screen flex flex-col justify-center items-center'>
            <div className='flex text justify-center'><img src={Sifba} alt="logo-SIFBA" className='pt-[20px] pl-[20px] pb-[55px]'/></div>
                <div className='flex justify-center min-h-40'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
                        <h1 className='text-[40px] pb-[60px]'>Redefinir sua senha</h1>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-[20px] pb-[10px] ml-5'>Email</label>
                            <div className='w-full flex flex-col justify-center items-center  mb-12 '>
                                <input type="email" {...register("email", { required: true })} placeholder='Email' className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px]' />
                                <div className='w-full px-6 py-1 '>
                                {<span className='text-red-600 text-left'>{errors?.email?.message}</span>}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='bg-green-500 rounded-[10px] w-[195px] h-[45px] text-[#FFF] text-[25px] mb-[35px]'>Redefinir Senha</button>
                        <span className='text-[20px]'>Lembrou da sua senha ? <Link to={'/login'} className='text-green-600'>Faça login aqui</Link></span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Password
