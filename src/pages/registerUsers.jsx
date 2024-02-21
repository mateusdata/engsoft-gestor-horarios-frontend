import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import Layouts from '../layouts/layouts';
import { GlobalContext } from '../context/globalContext';
import axiosInstance from '../components/config/axiosInstance';

const FormularioCadastro = () => {
    const { contextHolder, openNotificationWithIcon } = useContext(GlobalContext);

    const schema = yup.object({
        nome: yup.string().required("Obrigatorio"),
        email: yup.string().email("Email invalido").required("Obrigatorio"),
        senha: yup.string().matches(/[0-9]/, { message: "Senha deve conter um número" }).matches(/[!@#$%^&*(),.?":{}|<>]/, { message: "Senha deve ter caractere especial" }).min(6).required("Obrigatorio"),
        administrador: yup.boolean(),
        cargo: yup.string().required("Obrigatorio"),
        matricula: yup.string().required("Obrigatorio"),
        departamento: yup.string().required("Obrigatorio"),
    });

    const { register, watch, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });



    const onSubmit = async (data) => {
        try {
            const response = await axiosInstance.post('/cadastro', data);
            console.log(response);
            openNotificationWithIcon({ message: "Cadastro realizado com sucesso!" }, "success");
            reset({
                administrador: false,
                cargo: "PROFESSOR EFETIVO",
                nome: "",
                email: "",
                senha: "",
                departamento: "PROGRAMAÇÃO",
                matricula: ""

            })
        } catch (error) {
            console.log(error);
            openNotificationWithIcon({ message: "Ocorreu um erro no servidor" }, "error");
        }
    };

    return (
        <Layouts>
            {contextHolder}
            <div className="flex justify-center items-center flex-col py-1 w-full ">
                <h1 className='font-semibold mb-10 text-2xl'>Cadastro de professores</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className='md:flex md:gap-2'>
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium mb-2 dark:text-white">Nome</label>
                            <input placeholder='Nome' type="text" {...register('nome')} id="nome" className="py-2 px-4 border outline-none block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                            {errors.nome && <p className="text-sm text-red-500 mt-1">{errors.nome.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium mb-2 dark:text-white">Email</label>
                            <input placeholder='Email' type="text" {...register('email')} id="email" className="py-2 px-4 border outline-none block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="senha" className="block text-sm font-medium mb-2 dark:text-white">Senha</label>
                            <input placeholder='Senha' type="password" {...register('senha')} id="senha" className="py-2 px-4 border outline-none block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                            {errors.senha && <p className="text-sm text-red-500 mt-1">{errors.senha.message}</p>}
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 md:flex-row'>
                        <div className='md:flex-1'>
                            <label htmlFor="matricula" className="block text-sm font-medium mb-2 dark:text-white">Matrícula</label>
                            <input placeholder='Ex: 20242BSIFSA00' type="text" {...register('matricula')} id="matricula" className="py-2 px-4 border outline-none block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />
                            {errors.matricula && <p className="text-sm text-red-500 mt-1">{errors.matricula.message}</p>}
                        </div>
                    </div>
                    <div class="flex md:flex:0.2 ">
                        <input type="checkbox" {...register('administrador')} id="administrador" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                        <label for="hs-default-checkbox" class="text-sm text-brack ms-3 dark:text-gray-400">Administrador</label>
                        {errors.administrador && <p className="text-sm text-red-500 mt-1">{errors.administrador.message}</p>}
                    </div>
                    <hr className='pb-2' />

                    <div className='md:flex justify-between md:gap-5'>
                        <div className='w-full'>
                            <label htmlFor="departamento" className="block text-sm font-medium mb-2 dark:text-white">Departamento</label>
                            <select {...register('departamento')} id="departamento" className="py-2 px-4 border outline-none block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                <option value="PROGRAMAÇÃO">PROGRAMAÇÃO</option>
                                <option value="TECNOLOGIA">TECNOLOGIA</option>
                                <option value="EXATAS">EXATAS</option>
                                <option value="HUMANAS">HUMANAS</option>
                            </select>
                            {errors.departamento && <p className="text-sm text-red-500 mt-1">{errors.departamento.message}</p>}
                        </div>

                        <div className='w-full'>
                            <label htmlFor="cargo" className="block text-sm font-medium mb-2 dark:text-white">Cargo</label>
                            <select {...register('cargo')} id="cargo" className="py-2 px-4 border outline-none block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                <option value="PROFESSOR EFETIVO">PROFESSOR EFETIVO</option>
                                <option value="PROFESSOR SUBSTITUTO">PROFESSOR SUBSTITUTO</option>

                            </select>
                            {errors.cargo && <p className="text-sm text-red-500 mt-1">{errors.cargo.message}</p>}
                        </div>

                    </div>
                    <pre>{ false && JSON.stringify(watch(), null, 2)}</pre>

                    <div className='md:w-full  flex justify-center md:py-4'>
                        <button type="submit" className="py-2 px-4 md:w-1/2 w-full bg-green-500 text-white rounded">Cadastrar</button>
                    </div>
                </form>
            </div >

        </Layouts>
    );
};

export default FormularioCadastro;
