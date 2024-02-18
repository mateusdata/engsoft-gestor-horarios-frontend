import React, { useContext, useEffect } from 'react';
import 'animate.css';
import Sifba from '../image2/sifba.svg'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance.js';
import { GlobalContext } from '../context/globalContext';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function SendCode() {
    const navigate = useNavigate();
    const schema = yup.object({
        code: yup.string().required("Código é obrigatorio")
    })
    const { register, handleSubmit, setError, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            code: ""
        }
    });
    const { email, contextHolder } = useContext(GlobalContext)

    useEffect(() => {
        if (!email) { navigate("/login") };
    }, []);

    if (!email) {
        return null;
    }

    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance.post('/validarcodigo', { codigo: data.code, email: email });
            navigate('/changePassword')

        } catch (error) {
            console.log(error)
            setError("code", {message:"Código inválido"})
        }
    }

    return (
        <div className='flex flex-col border min-h-screen font-normal font-[KoHo] not-italic leading-none shrink-0 md:flex-row'>
            {contextHolder}
            <div className='bg-[#EFEFEF] w-screen h-screen flex flex-col justify-center items-center'>
                <img src={Sifba} alt="" className='pt-[20px] pl-[20px] pb-[55px]' />
                <div className='flex justify-center min-h-40'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center'>
                        <h1 className='text-[40px] pb-[60px]'>Redefinir sua senha</h1>
                        <div className='flex flex-col'>
                            <label htmlFor="code" className='text-[20px] pb-[10px] ml-5'>Código de Recuperação</label>
                            <span className='text-green-500 ml-5 pb-1 mb-[7px]'> {`Um email foi enviado para ${email}`}</span>
                            <div className='w-full flex flex-col justify-center items-center  mb-12 '>
                                <input type="text" {...register("code", { required: true })} placeholder='code' className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px]' />
                                <div className='w-full px-6 py-1 '>
                                    {<span className='text-red-600 text-left'>{errors?.code?.message}</span>}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='bg-green-500 rounded-[10px] w-[195px] h-[45px] text-[#FFF] text-[20px] md:text-[25px] mb-[35px]'>Verificar Código</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SendCode
