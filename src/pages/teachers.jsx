import React, { useContext, useState } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance.js";
import { GlobalContext } from "../context/globalContext";
import { useEffect } from "react";

function Teachers() {
    const { contextHolder } = useContext(GlobalContext);
    const [showSubjects, setShowSubjects] = useState([]); 

    useEffect(() => {
        axiosInstance.get('/professor').then((response) => {
            console.log(response);
            setShowSubjects(response.data);
        }).catch((error) => console.log(error))
    }, []);
    
    const array = [
        {
            nome: 'Tiago Chagas',
            disponibilidade: 'Disponível no Integrado e BSI',
            materias: '3',
            horasLivre: '2h',
        },
        {
            nome: 'Ana Carvalho',
            disponibilidade: 'Disponível no Integrado e BSI',
            materias: '3',
            horasLivre: '2h',
        },{
            nome: 'Jailson Mendes',
            disponibilidade: 'Disponível no Integrado e BSI',
            materias: '3',
            horasLivre: '2h',
        },{
            nome: 'Diego Silva',
            disponibilidade: 'Disponível no Integrado e BSI',
            materias: '3',
            horasLivre: '2h',
        },{
            nome: 'Luiz Gustavo',
            disponibilidade: 'Disponível no Integrado e BSI',
            materias: '3',
            horasLivre: '2h',
        },{
            nome: 'Alessa Silva',
            disponibilidade: 'Disponível no Integrado e BSI',
            materias: '3',
            horasLivre: '2h',
        },
    ]

    return (
        <Layouts>
            {contextHolder}
            <div class="flex flex-col items-center p-2 w-full overflow-hidden m-auto font-koho">
                <p class="text-xl px-8 top-4">Professores</p>
                <div class="overflow-x-auto px-4 py-2 max-w-full my-2 mx-auto">                    
                    <div class="shadow-sm dark:bg-slate-900 dark:border-gray-700">
                        <ul>
                            {array.map((teacher) => (
                                <li className="flex justify-center content-center bg-[#D9D9D9] p-10 w-auto gap-80 rounded">
                                    <div>
                                        <h1 className="font-semibold">{teacher.nome}</h1>
                                        <span>{teacher.disponibilidade}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Quantidade de materias: {teacher.materias}</span>
                                        <span>Horas disponíveis: {teacher.horasLivre}</span>
                                    </div>
                                </li>
                            ))}
                        </ul> 
                    </div>
                </div>
            </div>                           
        </Layouts>
    );
}
export default Teachers;