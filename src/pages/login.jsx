import React, { useContext, useState } from 'react';
import { Context } from '../context/authContext';
import Lampada from '../image2/lampada.svg'
import Logo from '../image2/logo-ifba.svg'
import { GlobalContext } from '../context/globalContext';

function Login() {
  const {login, contextHolder} = useContext(Context)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function verificyEmail(e) {
    e.preventDefault()
    login(email, senha)
    console.log('email')
    console.log(email)
    console.log('senha')
    console.log(senha)
  }
  return (
    <>
    {contextHolder}
      <div className="relative overflow-hidden bg-gray-100 min-h-screen font-normal not-italic leading-none shrink-0 md:flex-row pt-[20px] pl-[20px] pb-[55px]">
        <div className="m-5">
          <img src={Logo} alt="Logo do IFBA" />
        </div>
        <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
          <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
            <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight dark:text-gray-200 not-italic leading-none">
              Olá, faça o seu login
            </h1>
            <form className="mt-8" onSubmit={verificyEmail}>
              <div className="grid gap-y-4">
                <div>
                  <label for="email" className="block text-sm mb-2 dark:text-white">Email</label>
                  <div className="relative">
                    <input placeholder='Digite aqui seu email' type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error" onChange={(e) => setEmail(e.target.value)} />
                    <div className=" absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <label for="password" className="block text-sm mb-2 dark:text-white">Senha</label>
                  </div>
                  <div className="relative">
                    <input placeholder='Digite aqui sua senha' type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" onChange={(e) => setSenha(e.target.value)} />
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                  <div className="flex justify-end mt-2">
                    <a className="text-sm text-green-600 decoration-2 hover:underline font-medium" href="/password">Esqueci minha senha</a>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <button type="submit" className="py-3 px-4 w-60 mt-5 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Entrar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="md:flex md:absolute md:top-0 md:left-1/2 md:right-0 bg-[#8fc681] justify-center items-center text-2xl h-screen tracking-[7.4px] space-x-[50px] hidden">
          <div className="text-center p-10">
            <div className="flex items-center justify-center">
              <img src={Lampada} alt="Icone de lâmpada" />
            </div>
            <p className='font-koho font-normal text-[20px] mb-[10px]'>Transforme o ambiente</p>
            <p className='font-koho font-normal text-[20px] mb-[10px]'>
              Crie um ecossistema onde o conforto reflita a harmonia da sua essência
            </p>
          </div>
        </div>
      </div>
      {/* <Link to={"/"}>home</Link> */}
    </>
  )
}

export default Login