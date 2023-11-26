import React, { useContext, useState } from 'react';
import { Context } from '../context/authContext';
import Sifba from '../image2/sifba.svg'

function Login() {
  const {login, contextHolder,openNotificationWithIcon} = useContext(Context)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function verificyEmail(e) {
    e.preventDefault()
    if(senha.length > 5 && email) {
      login(email, senha);
      return;
    }
    openNotificationWithIcon({ message: "A senha tem que ser maior que 6 digitos" }, "error")
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
            <form className="mt-8 w-full flex flex-col items-center" onSubmit={verificyEmail}>
              <div className="w-full lg:w-96 flex flex-col gap-4">
                <div>
                  <label for="email" className="block text-sm mb-2 dark:text-white">Email</label>
                  <div className="relative">
                    <input placeholder='Digite aqui seu email'required type="email" id="email" name="email" className="py-3 px-4 w-full block border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"  aria-describedby="email-error" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div>
                  <label for="password" className="block text-sm mb-2 dark:text-white">Senha</label>
                  <div className="relative">
                    <input placeholder='Digite aqui sua senha' type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" onChange={(e) => setSenha(e.target.value)} />
                  </div>
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
      </div>
    </>
  )
}

export default Login