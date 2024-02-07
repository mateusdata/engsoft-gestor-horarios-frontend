import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Context } from '../context/authContext';
import Sifba from '../image2/sifba.svg'

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  senha: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

function Login() {
  const { login, contextHolder, openNotificationWithIcon } = useContext(Context)
  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data)
    login(data.email, data.senha);
  }

  return (
    <>
      {contextHolder}
      <div style={{ fontFamily: "KoHo" }} className="flex justify-center items-center relative overflow-hidden bg-gray-100 h-screen font-normal font-[KoHo] not-italic">
        <div className="flex flex-col items-center w-full gap-5">
          <img src={Sifba} alt="Logo do projeto" />
          <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12 flex flex-col items-center min-w-[80%] gap-8">
            <h1 className="text-3xl text-gray-800 dark:text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
              Olá, faça o seu login
            </h1>
            <form className="mt-8 w-full flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full lg:w-96 flex flex-col gap-4">
                <div>
                  <label for="email" className="block text-sm mb-2 dark:text-white">Email</label>
                  <div className="relative">
                    <input {...register('email')} placeholder='email' type="text" id="email" name="email" className="py-3 px-4 w-full block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"  aria-describedby="email-error" />
                    <p className='text-red-600'>{errors.email?.message}</p>
                  </div>
                </div>
                <div>
                  <label for="senha" className="block text-sm mb-2 dark:text-white">senha</label>
                  <div className="relative">
                    <input {...register('senha')} placeholder='senha' type="password" id="senha" name="senha" className="py-3 px-4 w-full block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"  aria-describedby="senha-error" />
                    <p className='text-red-600'>{errors.senha?.message}</p>
                  </div>
                </div>
               
                <div className="flex flex-col items-center">
                  <button type="submit" className="py-3 px-4 w-60 mt-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Entrar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
