import React, { useContext, useState } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance.js";
import { GlobalContext } from "../context/globalContext";
import { useEffect } from "react";
import edit from "../image2/icon-edit.svg"
import { Modal } from 'antd';
import axios from "axios";
import trash from "../image2/icon-trash.svg"

/**
 * Este código React utiliza os hooks `useContext` e `useState` para gerenciar estados e contextos.
  Inclui funções auxiliares como `selectedTeacher`, `showModal`, `handleOk`, `handleCancel`, `esdras`, 
  além de efeitos colaterais usando o hook `useEffect`. 
 * @returns {JSX.Element} A renderização JSX exibe uma lista de professores com opções de edição e exclusão, 
    juntamente com um modal para editar os dados do professor selecionado.
 */
function Teachers() {
    const { contextHolder } = useContext(GlobalContext);
    const [showSubjects, setShowSubjects] = useState([]); 

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedData, setSelectedData] = useState(null);

    const [teacher, setTeacher] = useState([])

    const selectedTeacher= (teacher) => {
        console.log('selectedTeacher')
        console.log(teacher)
        setSelectedData(teacher);

        axiosInstance.get('/dadosatuais').then((response) => {
            console.log('/dadosatuais')
            console.log(response);
            //setShowSubjects(response.data[0]);
        }).catch((error) => console.log(error))
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => { 
        alert(JSON.stringify(teacher))
        setIsModalOpen(false);
        updatedTeacher(selectedData)
        setSelectedData(null);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedData(null);
        setTeacher([])
    };

    const esdras = (e) => {
        setTeacher( prevValue=> ({...prevValue, [e.target.name]:e.target.value }))
    }

    useEffect(() => {
        axiosInstance.get('/teacher_list').then((response) => {
            console.log('/teacher_list') 
            console.log(response.data[0]);
            setShowSubjects(response.data[0]);
        }).catch((error) => console.log(error))
    }, []);

    const updatedTeacher = (teacher) => {
        
        axios.post('https://ebbd-179-54-100-101.ngrok-free.app/atualizarprofessor', selectedData).then((response) => {
            console.log('/atualizarprofessor')
            console.log(response);
            //setShowSubjects(response.data[0]);
        }).catch((error) => console.log(error))
    }

    const deleteTeacher = (id) => {
        console.log('deleteTeacher')
        axios.delete(`https://ebbd-179-54-100-101.ngrok-free.app/delete-teacher/${id}`).then((response) => {
            console.log('/delete')
            console.log(response);
        }).catch((error) => console.log(error))
    }
    
    return (
        <Layouts>
            {contextHolder}
            <div class="flex flex-col items-center p-2 w-full overflow-hidden m-auto font-koho">
                <p class="text-xl px-8 top-4">Professores</p>
                <div class="overflow-x-auto px-4 py-2 max-w-full my-2 mx-auto">                    
                    <div className="shadow-sm dark:bg-slate-900 dark:border-gray-700">
                        <ul>
                            {showSubjects.map((teacher) => (
                                <li key={teacher.matricula} className="flex content-center bg-[#D9D9D9] p-10 justify-between rounded">
                                    <div className="w-60">
                                        <h1 className="font-semibold">{teacher.nome}</h1>
                                        <span>{teacher.departamento}</span>
                                    </div>
                                    <div className="flex flex-col justify-center w-60">
                                        {/* <span>Quantidade de materias: {teacher.materias}</span>
                                        <span>Horas disponíveis: {teacher.horasLivre}</span> */}
                                        <span>Cargo: {teacher.cargo}</span>
                                        <span>Email: {teacher.email}</span>
                                    </div>
                                    <div className="flex flex-col gap-4 justify-center content-end w-20">
                                        <img src={edit} 
                                            alt="Pencil edit" 
                                            className="cursor-pointer" 
                                            width={15} 
                                            height={15} 
                                            onClick={() => {
                                                showModal()
                                                selectedTeacher(teacher)
                                                setTeacher(teacher)
                                            }} 
                                        />
                                        <img src={trash}
                                            className="cursor-pointer" 
                                            width={15} 
                                            height={15} 
                                            alt="Trash" 
                                            onClick={() => deleteTeacher(teacher.id)}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul> 
                    </div>
                    <Modal okButtonProps={{className: "bg-blue-500"}} title="Edição do professor" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        {JSON.stringify(teacher)
                            
                        }
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Nome</span>
                                <input type="text" defaultValue={teacher?.nome} name="nome" onChange={esdras}  className="border rounded px-2" />
                            </div>
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Email</span>
                                <input type="text" defaultValue={teacher?.email} name="email" onChange={esdras}  className="border rounded px-2" />
                            </div>
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Cargo</span>
                                <input type="text" defaultValue={teacher?.cargo} name="cargo" onChange={esdras} className="border rounded px-2" />
                            </div>
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Departamento</span>
                                <input type="text" defaultValue={teacher?.departamento} name="departamento" onChange={esdras} className="border rounded px-2" />
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>                           
        </Layouts>
    );
}
export default Teachers;