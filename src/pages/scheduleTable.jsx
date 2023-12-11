import React, { useContext, useState } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance.js";
import { GlobalContext } from "../context/globalContext";
import { useEffect } from "react";
import styled from 'styled-components';
import Carousel from "../components/Carousel/index.js";
import { PropagateLoader, SkewLoader, SyncLoader } from "react-spinners";

function ScheduleTable() {
    const { contextHolder } = useContext(GlobalContext);
    const [showTeachers, setShowTeachers] = useState([]); 
    const [schedule, setSchedule] = useState([]);
    const [colorButton, setColorButton] = useState(1)
    const mondaySched = schedule[0];
    const tuesdaySched = schedule[1];
    const wednesdaySched = schedule[2];
    const thursdaySched = schedule[3];
    const fridaySched = schedule[4];

    console.log(fridaySched);
  const [updataData, setUpdateData] = useState(false);
    useEffect(() => {
        axiosInstance.get('/show-schedules').then((response) => {
            console.log(response);
            setShowTeachers(response.data);
            setTimeout(() => {
                setUpdateData(false)
            }, 3500);
        }).catch((error) => {
            console.log(error);
        })
    }, [updataData]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get('/show-schedules');
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
    const updatePage = (semestre) =>{
        axiosInstance.get('/show-schedules',{params:{semestre}}).then((response)=>{
            setSchedule(response.data);
            setUpdateData(true)
        })
    }

    const Button = styled.button`        
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
        &:active {
            background-color: #ADD1A7;
        }
        `; 

    const ActiveButton = styled.button`
        color: white;
        font-size: 16px;        
        border-radius: 5px;
        margin: 10px 10px;
        cursor: pointer;
        text-align: center;
        height:30px;
        line-height:0px;

        &:hover {
            background-color: #30ab51;  
            color:white;
            box-shadow: 5px 3px 5px 3px #dcfadd;         
        }
    `

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
                    <Button className={colorButton === 1 ? "bg-green-600" : "bg-[#ADD1A7]"} onClick={()=>{updatePage("primeiro"); setColorButton(1);}} >1º Semestre</Button>
                    <Button className={colorButton === 2 ? "bg-green-600" : "bg-[#ADD1A7]"} onClick={()=>{updatePage("segundo"); setColorButton(2);}} >2º Semestre</Button>
                    <Button className={colorButton === 3 ? "bg-green-600" : "bg-[#ADD1A7]"} onClick={()=>{updatePage("terceiro"); setColorButton(3);}} >3º Semestre</Button>
                    <Button className={colorButton === 4 ? "bg-green-600" : "bg-[#ADD1A7]"} onClick={()=>{updatePage("quarto"); setColorButton(4);}} >4º Semestre</Button>
                    <Button className={colorButton === 5 ? "bg-green-600" : "bg-[#ADD1A7]"} onClick={()=>{updatePage("quinto"); setColorButton(5);}} >5º Semestre</Button>
                    <Button className={colorButton === 6 ? "bg-green-600" : "bg-[#ADD1A7]"} onClick={()=>{updatePage("sexto"); setColorButton(6);}} >6º Semestre</Button>
                    <Button className={colorButton === 7 ? "bg-green-600" : "bg-[#ADD1A7]"} onClick={()=>{updatePage("setimo"); setColorButton(7);}} >7º Semestre</Button>
                    <Button className={colorButton === 8 ? "bg-green-600" : "bg-[#ADD1A7]"} onClick={()=>{updatePage("oitavo"); setColorButton(8);}} >8º Semestre</Button>
            </Carousel>
                </div>                
                { updataData && <PropagateLoader color="orange" />}
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
                                                    <span class="flex flex-col items-center px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">13:20</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (                                                        
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.prim_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.prim_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.prim_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.prim_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.prim_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.prim_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.prim_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.prim_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.prim_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.prim_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr> 
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">                                                
                                                <span class="flex flex-col items-center px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">14:10</span>
                                                    </span>                                            
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.segu_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.segu_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>

                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.segu_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.segu_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>

                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.segu_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.segu_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.segu_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.segu_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.segu_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.segu_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr> 
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">                                                
                                                    <span class="flex flex-col items-center px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">15:10</span>
                                                    </span>                                                
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.terc_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.terc_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.terc_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.terc_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.terc_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.terc_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.terc_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.terc_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.terc_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.terc_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr>                                        
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    <span class="flex flex-col items-center px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">16:00</span>
                                                    </span>   
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.quar_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.quar_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.quar_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.quar_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.quar_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.quar_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.quar_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.quar_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.quar_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.quar_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr> 
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    <span class="flex flex-col items-center px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">16:50</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.quin_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.quin_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.quin_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.quin_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.quin_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.quin_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.quin_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.quin_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.quin_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.quin_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>                                            
                                        </tr>
                                        <tr class="bg-green-200 dark:bg-slate-800 dark:hover:bg-slate-800">
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    <span class="flex flex-col items-center px-12 py-5">
                                                        <span class="font-mono text-center text-sm text-black dark:text-blue-500">17:40</span>
                                                    </span>
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && mondaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.sext_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{mondaySched.sext_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && tuesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.sext_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{tuesdaySched.sext_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && wednesdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.sext_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{wednesdaySched.sext_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && thursdaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.sext_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{thursdaySched.sext_hor_materia}</p>
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                            <td class="h-px w-px whitespace-nowrap">
                                                <div class="flex items-center justify-center gap-x-2">
                                                    {schedule && schedule.length > 0 && fridaySched && (
                                                        <span class="flex flex-col items-center px-12 py-5">
                                                            <span class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.sext_hor}</span>
                                                            <p class="font-mono text-center text-sm text-black dark:text-blue-500">{fridaySched.sext_hor_materia}</p>
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