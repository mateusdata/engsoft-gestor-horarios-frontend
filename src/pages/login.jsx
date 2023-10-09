import React, { useContext, useState } from 'react';
import { Context } from '../context/authContext';
import { Link } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login , contextHolder} = useContext(Context);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    // Aqui você pode adicionar a lógica de autenticação com os valores de email e senha
    console.log('Email:', email);
    console.log('Senha:', password);
    login(email, password);
    
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center text-white">
      {contextHolder}
      <h1 className="text-4xl font-bold mb-4">Página de Login</h1>
      <p className="text-lg">Faça login</p>
      <form onSubmit={handleLogin}>
        <div className="mt-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-gray-700 text-white w-64 p-2 rounded-md"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mt-2">
          <input
            type="password"
            placeholder="Senha"
            className="bg-gray-700 text-white w-64 p-2 rounded-md"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='flex justify-end'>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md cursor-pointer"
          >
            Entrar
          </button>
        </div>
      </form>
      <Link className='text-red-600' to={"/cadastro"}>Fazer login</Link>

    </div>
  );
};

export default Login;
