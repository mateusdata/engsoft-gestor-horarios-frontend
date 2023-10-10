import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance';

const RegisterUser = () => {
    const [user, setUser] = useState({
        nome: '',
        email: '',
        senha: '',
        tipo: 'Aluno', 
        matricula: '',
        departamento: '',
        cargo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        
    };

    const handleSubmit = async (e) => {
        console.log(user);
   
        e.preventDefault();

        axiosInstance.post('/auth/cadastros',user).then((response)=>{
            console.log(response);
        }).catch((erro)=>{
            console.log(erro);
        })
    };

    return (
        <>
        <div className='bg-gray-800 min-h-screen flex  flex-col items-center justify-center text-white'>
            <h2>Registrar Usuário</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <label className="block mb-2">
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        value={user.nome}
                        onChange={handleChange}
                        className="bg-gray-700 text-white rounded-md px-3 py-2 w-full"
                    />
                </label>
                <br />
                <label className="block mb-2">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="bg-gray-700 text-white rounded-md px-3 py-2 w-full"
                    />
                </label>
                <br />
                <label className="block mb-2">
                    Senha:
                    <input
                        type="password"
                        name="senha"
                        value={user.senha}
                        onChange={handleChange}
                        className="bg-gray-700 text-white rounded-md px-3 py-2 w-full"
                    />
                </label>
                <br />
                <label className="block mb-2">
                    Tipo:
                    <select
                        name="tipo"
                        value={user.tipo}
                        onChange={handleChange}
                        className="bg-gray-700 text-white rounded-md px-3 py-2 w-full"
                    >
                        <option value="Aluno">Aluno</option>
                        <option value="Professor">Professor</option>
                        <option value="Administrador">Administrador</option>
                    </select>
                </label>
                <br />
                <label className="block mb-2">
                    Matrícula:
                    <input
                        type="text"
                        name="matricula"
                        value={user.matricula}
                        onChange={handleChange}
                        className="bg-gray-700 text-white rounded-md px-3 py-2 w-full"
                    />
                </label>
                <br />
                <label className="block mb-2">
                    Departamento:
                    <input
                        type="text"
                        name="departamento"
                        value={user.departamento}
                        onChange={handleChange}
                        className="bg-gray-700 text-white rounded-md px-3 py-2 w-full"
                    />
                </label>
                <br />
                <label className="block mb-2">
                    Cargo:
                    <input
                        type="text"
                        name="cargo"
                        value={user.cargo}
                        onChange={handleChange}
                        className="bg-gray-700 text-white rounded-md px-3 py-2 w-full"
                    />
                </label>
                <br />
                <button type="submit" className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Registrar
                </button>
            </form>
            <Link className='text-red-600 mt-4 block' to={"/login"}>Fazer login</Link>
        </div>
        </>

    );
};

export default RegisterUser;
