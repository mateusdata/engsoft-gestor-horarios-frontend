import React, { useContext, useEffect } from 'react';
import 'animate.css';
import Sifba from '../image2/sifba.svg';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance.js';
import { GlobalContext } from '../context/globalContext';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function ChangePassword() {
    const navigate = useNavigate();
    const schema = yup.object().shape({
        new_password: yup.string()
            .required('Nova senha é obrigatória')
            .min(6, 'A senha deve ter pelo menos 6 caracteres')
            .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
            .matches(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial'),
            new_confirm: yup.string()
            .oneOf([yup.ref('new_password'), null], 'As senhas devem corresponder')
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
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
            const response = await axiosInstance.post('/resetarsenha', { email: email, senha: data.new_password });
            navigate("/login");
        } catch (error) {
            console.log(error)
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
                            <label htmlFor="new_password" className='text-[20px] pb-[10px] ml-5'>Nova Senha</label>
                            <div className='w-full flex flex-col justify-center items-center mb-2'>
                                <input type="password" {...register("new_password", { required: true })} placeholder='Nova Senha' className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[8px]' />
                                <div className='w-full px-6'>
                                    {<span className='text-red-600'>{errors?.new_password?.message}</span>}
                                </div>
                            </div>
                            <label htmlFor="new_confirm" className='text-[20px] pb-[10px] mt-2 ml-5'>Confirmar Nova Senha</label>
                            <div className='w-full flex flex-col justify-center items-center mb-4'>
                                <input type="password" {...register("new_confirm", { required: true })} placeholder='Confirmar Nova Senha' className='w-[370px] max-w-[90%] text-[20px] rounded-[10px] py-[10px] pl-[20px] mb-[8px]' />
                                <div className='w-full px-6'>
                                    {<span className='text-red-600'>{errors?.new_confirm?.message}</span>}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className='bg-green-500 rounded-[10px] w-[195px] h-[45px] text-[#FFF] text-[25px] mb-[35px]'>Alterar Senha</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
