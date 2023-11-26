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
    const [schedule, setSchedule] = useState([]);

    const mondaySched = schedule[0];
    const tuesdaySched = schedule[1];
    const wednesdaySched = schedule[2];
    const thursdaySched = schedule[3];
    const fridaySched = schedule[4];

    console.log(fridaySched);

    useEffect(() => {
        axiosInstance.get('/teacher_list').then((response) => {
            console.log(response);
            setShowTeachers(response.data[0]);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/horarios');
                console.log(response);
    
                if (response.data !== undefined) {
                    setSchedule(response.data);
                } else {
                    console.log("Dados indefinidos");
                }
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
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

    const weekDays = [
        {day: 'Segunda'},{day: 'Terça'},{day: 'Quarta'},{day: 'Quinta'},{day: 'Sexta'},
    ]

    const semesters = [
        {number: '1º Semestre'},{number: '2º Semestre'},{number: '3º Semestre'},{number: '4º Semestre'},
        {number: '5º Semestre'},{number: '6º Semestre'},{number: '7º Semestre'},{number: '8º Semestre'},
    ]


    return (

        <Layouts>
            {/* {JSON.stringify(showTeachers)} */}
            {contextHolder}
            <div class="flex flex-col items-center p-2 w-full overflow-hidden m-auto">
                <p class="text-xl px-8 relative top-4">Escolha o semestre</p>
                <div class="w-full h-18 ps-4 pe-4 py-6 text-center">
                    <Carousel> 
                        {semesters.map((semester)=> (
                            <Button>{semester.number}</Button>
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
                                        {weekDays.map((week) => (
                                            <th scope="col" class="px-12 py-5 text-start">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        {week.day}
                                                    </span>
                                                </div>
                                            </th>
                                        ))}                                        
                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    <span class="block px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">13:20</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.prim_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.prim_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.prim_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.prim_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.prim_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr> 
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                
                                                    <span class="block px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">14:10</span>
                                                    </span>                                            
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.segu_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.segu_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.segu_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.segu_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.segu_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr> 
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">                                                
                                                    <span class="block px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">15:10</span>
                                                    </span>                                                
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.terc_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.terc_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.terc_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.terc_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.terc_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr>                                        
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    <span class="block px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">16:00</span>
                                                    </span>   
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.quar_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.quar_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.quar_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.quar_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.quar_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr> 
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    <span class="block px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">16:50</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.quin_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.quin_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.quin_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.quin_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.quin_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr>
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    <span class="block px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">17:40</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.sext_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.sext_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.sext_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.sext_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="block px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.sext_hor_materia}</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr>                                                                                                                   
                                </tbody>
                            </table>                    
                        </div>
                    </div>
                </div>                           
        </Layouts>
    );

}
export default ScheduleTable;