import React, { useContext, useState } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance.js";
import { GlobalContext } from "../context/globalContext";
import { useEffect } from "react";
import styled from 'styled-components';
import Carousel from "../components/Carousel/index.js";

function ScheduleTable() {
    const { contextHolder } = useContext(GlobalContext);
    const [showTeachers, setShowTeachers] = useState([]); 

    useEffect(() => {
        axiosInstance.get('/teacher_list').then((response) => {
            console.log(response);
            setShowTeachers(response.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    const Button = styled.button`        
        background-color: #CDCDCD;
        color: black;
        font-size: 14px;        
        border-radius: 5px;
        margin: 10px 10px;
        cursor: pointer;
        text-align: center;
        height:30px;
        line-height:0px;

        &:hover {
            background-color: #ADD1A7;  
            color:white;
            box-shadow: 5px 3px 5px 3px #dcfadd;         
        }
        `;
    
    const array = [
        {
            hora: '13:20',
            nome: 'Sistemas Distribuidos',
            age: 45,
            email: 'algo@algo.com',
            city: 'Salvador',
            state: 'Bahia',
        },
        {
            hora: '14:10',
            nome: 'Engenharia de Software',
            age: 35,
            email: 'algo@algo.com',
            city: 'Salvador',
            state: 'Bahia',
        },{
            hora: '15:10',
            nome: 'TCC I',
            age: 32,
            email: 'algo@algo.com',
            city: 'Salvador',
            state: 'Bahia',
        },{
            hora: '16:00',
            nome: 'Tecnologia Assistiva',
            age: 33,
            email: 'algo@algo.com',
            city: 'Salvador',
            state: 'Bahia',
        },{
            hora: '16:50',
            nome: 'Gestão de projetos',
            age: 55,
            email: 'algo@algo.com',
            city: 'Salvador',
            state: 'Bahia',
        },{
            hora: '17:40',
            nome: 'Banco de Dados I',
            age: 55,
            email: 'algo@algo.com',
            city: 'Salvador',
            state: 'Bahia',
        },
    ]


    return (

        <Layouts>
            {/* {JSON.stringify(showTeachers)} */}
            {contextHolder}
            <div class="flex flex-col items-center p-2 w-full overflow-hidden m-auto">
                <p class="text-xl px-8 relative top-4">Professores</p>
                <div class="w-full h-18 ps-4 pe-4 py-6 text-center">
                    <Carousel> 
                        {showTeachers.map((teacher)=> (
                            <Button>{teacher.nome}</Button>
                        ))} 
                    </Carousel>
                </div>
                <div class="overflow-x-auto px-4 py-2 max-w-full my-2 mx-auto">                    
                    <div class="shadow-sm dark:bg-slate-900 dark:border-gray-700">
                            <table class="rounded-2xl min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-inherit">
                                    <tr>
                                        <th scope="col" class="">                                
                                        </th>
                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Segunda
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Terça
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Quarta
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Quinta
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Sexta
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    {array.map((item)=> (
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                        <td class="h-px w-px whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">{item.hora}</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 dark:hover:bg-gray-300 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">{item.nome}</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 dark:hover:bg-gray-300 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">{item.nome}</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 dark:hover:bg-gray-300 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">{item.nome}</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 dark:hover:bg-gray-300 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">{item.nome}</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 dark:hover:bg-gray-300 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">{item.nome}</span>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    ))}                                                                                            
                                </tbody>
                            </table>                    
                        </div>
                    </div>
                </div>                           
        </Layouts>
    );

}
export default ScheduleTable;