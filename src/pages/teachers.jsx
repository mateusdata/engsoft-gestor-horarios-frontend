import React, { useContext, useState } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance.js";
import { GlobalContext } from "../context/globalContext";
import { useEffect } from "react";
import edit from "../image2/icon-edit.svg"
import { Modal } from 'antd';

function Teachers() {
    const { contextHolder } = useContext(GlobalContext);
    const [showSubjects, setShowSubjects] = useState([]); 

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedData, setSelectedData] = useState(null);

    const selectedTeacher= (teacher) => {
        console.log('selectedTeacher')
        console.log(teacher)
        setSelectedData(teacher);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => { 
        setSelectedData(null);
        setIsModalOpen(false);
        updatedTeacher(selectedData)
    };
    const handleCancel = () => {
        setSelectedData(null);
        setIsModalOpen(false);
    };

    useEffect(() => {
        axiosInstance.get('/teacher_list').then((response) => {
            console.log('/teacher_list') 
            console.log(response.data[0]);
            setShowSubjects(response.data[0]);
        }).catch((error) => console.log(error))

        axiosInstance.get('/dadosatuais').then((response) => {
            console.log('/dadosatuais')
            console.log(response);
            //setShowSubjects(response.data[0]);
        }).catch((error) => console.log(error))
    }, []);

    const updatedTeacher = (teacher) => {
        axiosInstance.post(`/atualizarprofessor`, {params: {selectedData}})
        .then((response) => {
            console.log('/atualizarprofessor')
            console.log(response);
            //setShowSubjects(response.data[0]);
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
                                    <div className="flex flex-col justify-center content-end w-20">
                                        <img src={edit} 
                                            alt="Pencil edit" 
                                            className="cursor-pointer" 
                                            width={15} 
                                            height={15} 
                                            onClick={() => {
                                                showModal()
                                                selectedTeacher(teacher)
                                            }} 
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul> 
                    </div>
                    <Modal okButtonProps={{className: "bg-blue-500"}} title="Edição do professor" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Nome</span>
                                <input type="text" defaultValue={selectedData?.nome} className="border rounded px-2" />
                            </div>
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Email</span>
                                <input type="text" defaultValue={selectedData?.email} className="border rounded px-2" />
                            </div>
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Cargo</span>
                                <input type="text" defaultValue={selectedData?.cargo} className="border rounded px-2" />
                            </div>
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Departamento</span>
                                <input type="text" defaultValue={selectedData?.departamento} className="border rounded px-2" />
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>                           
        </Layouts>
    );
}
export default Teachers;