import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../components/config/axiosInstance';
import { Context } from '../context/authContext';
const RegisterUser = () => {
    const { openNotificationWithIcon, contextHolder, login } = useContext(Context);
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

        axiosInstance.post('/cadastro', user).then((response) => {
            console.log(response);
            if (true) {
                openNotificationWithIcon({ message: response.data, description: "você já pode fazer login" }, "success");
                setTimeout(() => {
                    login(user.email, user.senha);
                }, 5000);
            }
        }).catch((erro) => {
            console.log(erro);
        })
    };

    return (
        <>
            {contextHolder}
            <div className='bg-white min-h-screen flex flex-col items-center justify-center text-black'>
                <h2>Registrar Usuário</h2>
                <form onSubmit={handleSubmit} className="mt-4 w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="nome" className="block text-sm font-medium mb-2">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={user.nome}
                            onChange={handleChange}
                            className="bg-gray-100 text-gray-800 border rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            className="bg-gray-100 text-gray-800 border rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="senha" className="block text-sm font-medium mb-2">
                            Senha:
                        </label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            value={user.senha}
                            onChange={handleChange}
                            className="bg-gray-100 text-gray-800 border rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tipo" className="block text-sm font-medium mb-2">
                            Tipo:
                        </label>
                        <select
                            id="tipo"
                            name="tipo"
                            value={user.tipo}
                            onChange={handleChange}
                            className="bg-gray-100 text-gray-800 border rounded-md px-3 py-2 w-full"
                        >
                            <option value="Aluno">Aluno</option>
                            <option value="Professor">Professor</option>
                            <option value="Administrador">Administrador</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="matricula" className="block text-sm font-medium mb-2">
                            Matrícula:
                        </label>
                        <input
                            type="text"
                            id="matricula"
                            name="matricula"
                            value={user.matricula}
                            onChange={handleChange}
                            className="bg-gray-100 text-gray-800 border rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="departamento" className="block text-sm font-medium mb-2">
                            Departamento:
                        </label>
                        <input
                            type="text"
                            id="departamento"
                            name="departamento"
                            value={user.departamento}
                            onChange={handleChange}
                            className="bg-gray-100 text-gray-800 border rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="cargo" className="block text-sm font-medium mb-2">
                            Cargo:
                        </label>
                        <input
                            type="text"
                            id="cargo"
                            name="cargo"
                            value={user.cargo}
                            onChange={handleChange}
                            className="bg-gray-100 text-gray-800 border rounded-md px-3 py-2 w-full"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        Registrar
                    </button>
                </form>
                <Link to={"/login"} className='text-red-600 mt-4 block' >Fazer login</Link>
            </div>
        </>

    );
};

export default RegisterUser;
