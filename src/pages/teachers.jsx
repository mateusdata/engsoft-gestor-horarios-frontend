import React, { useContext, useState, useEffect } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance.js";
import { GlobalContext } from "../context/globalContext";
import edit from "../image2/icon-edit.svg"
import {  Modal, Popconfirm, Space, Input} from 'antd';
const { Search } = Input;


function Teachers() {
    const { contextHolder, openNotificationWithIcon} = useContext(GlobalContext);
    
const onSearch = (value, _e, info) => console.log(info?.source, value);

    const [showSubjects, setShowSubjects] = useState([]); 

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedData, setSelectedData] = useState(null);

    const [teacher, setTeacher] = useState([])
    const [seach, setSeach] = useState("")


    const [updatePage, setUpdatePage] = useState(false)
    useEffect(() => {
        axiosInstance.get('/teacher_list').then((response) => {
            setShowSubjects(response.data);
        }).catch((error) => console.log(error))
    }, [updatePage]);
    

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => { 
        setIsModalOpen(false);
        updatedTeacher(selectedData)
        setSelectedData(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedData(null);
        setTeacher([])
    };

    const selectTeacher = (e) => {
        setTeacher( prevValue=> ({...prevValue, [e.target.name]:e.target.value }))
    }

    const selectedTeacher= (teacher) => {
        setSelectedData(teacher);
    };
    const seachTeacher= (nome) => {
        console.log(nome);
        axiosInstance.get('/seach-teacher', {
            params:{
                nome
            }
        }).then((response) => {
            setShowSubjects(response.data);
        }).catch((error) => console.log(error))
    };


    const updatedTeacher = () => {
        axiosInstance.put('/atualizarprofessor', teacher).then((response) => {
            setUpdatePage(true)
            openNotificationWithIcon({ message:  "Professor atualizado" }, "success");

        }).catch((error) => console.log(error))
    }

    const deleteTeacher = (id) => {
        axiosInstance.delete(`/delete-teacher/${id}`).then((response) => {
            setUpdatePage(true)
            openNotificationWithIcon({ message:  "Professor deletado" }, "error");
        }).catch((error) => console.log(error))
    }

    return (
        <Layouts>
            {contextHolder}
            <div class="flex flex-col items-center p-2 w-full overflow-hidden m-auto font-koho">
               <div className="flex justify-around w-full items-center">        
               <div>
                <Space direction="vertical">
                <Search
                addonBefore="SIFBA"
                placeholder="Pesquise por um professor"
                allowClear
                onSearch={seachTeacher}
                onChange={((e)=>seachTeacher(e.target.value))}
                style={{
                width: 304,
                }}
                />

                </Space>
            </div>

                <p class="text-xl px-8 top-4">Professores</p>
               </div>
                <div class="overflow-x-auto px-4 py-2 max-w-full my-2 mx-auto w-full ">                    
                    <div className="shadow-sm dark:bg-slate-900 dark:border-gray-700 w-full flex flex-wrap flex-ro">
                        <ul className="flex flex-row flex-wrap justify-evenly gap-2 ">
                            {showSubjects?.map((teacher) => (
                                <li key={teacher.matricula} className="flex p-8  shadow-lg flex-row content-start bg-gray-100  justify-start rounded">
                
                                   <div className="">
                                    <div className="">
                                            <h1 className="font-semibold text-le">{teacher.nome}</h1>
                                            <span>{teacher.departamento}</span>
                                        </div>
                                        <div className="flex flex-col justify-center w-60">
                                            <span>Cargo: {teacher.cargo}</span>
                                            <span>Email: {teacher.email}</span>
                                        </div>
                                   </div>
                                    <div className="flex flex-col gap-4 justify-center content-end w-20">
                                        <img src={edit} 
                                            alt="Pencil edit" 
                                            className="cursor-pointer" 
                                            width={20} 
                                            height={20} 
                                            onClick={() => {
                                                showModal()
                                                selectedTeacher(teacher)
                                                setTeacher(teacher)
                                            }} 
                                        />

                                    <Popconfirm
                                    title="Apagar professor"
                                    description={`Tem certeza que deseja apagar o professor(a°) ${teacher?.nome} ?`}
                                    onConfirm={() => deleteTeacher(teacher.id)}
                                    okButtonProps={{className:"bg-red-500"}}
                                    >
                                            <img src={"data:image/png;base64,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"}
                                            className="cursor-pointer" 
                                            width={20} 
                                            height={20} 
                                            alt="Trash" 
                                            />
                                    </Popconfirm>
                                      
                                    </div>
                                </li>
                            ))}
                        </ul> 
                    </div>
                    <Modal okButtonProps={{className: "bg-blue-500"}} title="Edição do professor" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Nome</span>
                                <input type="text" value={teacher?.nome} name="nome" onChange={selectTeacher}  className="border rounded px-2" />
                            </div>
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Email</span>
                                <input type="text" value={teacher?.email} name="email" onChange={selectTeacher}  className="border rounded px-2" />
                            </div>
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Cargo</span>
                                <input type="text" value={teacher?.cargo} name="cargo" onChange={selectTeacher} className="border rounded px-2" />
                            </div>
                            <div className="flex gap-2 content-center">
                                <span className="content-center">Departamento</span>
                                <input type="text" value={teacher?.departamento} name="departamento" onChange={selectTeacher} className="border rounded px-2" />
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>                           
        </Layouts>
    );
}
export default Teachers;


/*


import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const App = () => (
  <Space direction="vertical">
    <Search
      addonBefore="https://"
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 304,
      }}
    />
 
  </Space>
);
export default App;

*/