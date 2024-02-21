import React, { useState } from 'react'
import Layouts from '../layouts/layouts'
import { Modal, Select } from 'antd'
import { EditFilled, EditOutlined, FilePdfOutlined } from '@ant-design/icons'
import MyDocument from './pdf'

const ScheduleTable = () => {
  const [open, setOpen] = useState(false)
  const data = [
    { dia: 'Segunda', aulas: [{ name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Alessa", disciplina: "Programação Mobile", hora: "13:20 - 14:50" }, { name: "Moises", disciplina: "Programação Web", hora: "14:30 - 13:50" }] },
    { dia: 'Terça', aulas: [{ name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Jonas", disciplina: "Inteligência Artificial", hora: "11:30 -20:00" }] },
    { dia: 'Quarta', aulas: [{ name: "Pedro", disciplina: "Banco de Dados", hora: "15:40 - 15:50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Paulo", disciplina: "Estrutura de Dados", hora: "16:50 -50" }] },
    { dia: 'Quinta', aulas: [{ name: "Lucas", disciplina: "Redes de Computadores", hora: "09:10 - 15:50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "João", disciplina: "Sistemas Operacionais", hora: "10:20 -50" }] },
    { dia: 'Sexta', aulas: [{ name: "Patricia", disciplina: "Engenharia de Software", hora: "14:00 - 15:50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Maria", disciplina: "Ciência de Dados", hora: "10:00  - 15: 50" }, { name: "Mateus", disciplina: "Compiladores", hora: "15:10 -50 " }] },
  ];

  const maxAulas = Math.max(...data.map(item => item.aulas.length));
  return (
    <Layouts>
 <MyDocument/>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div class="flex flex-col">
          <Select
            defaultValue="TIPO DE CURSO"
            style={{ width: 120 }}
            options={[{ value: 'SISTEMAS DE INBFORMAÇÃO', label: 'SISTEMAS DE INBFORMAÇÃO' }, { value: 'INTEGRADO', label: 'INTEGRADO' }, { value: 'SUBSEQUENTE', label: 'SUBSEQUENTE' }]}
          />
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">

                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <div>
                      <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}

                        options={[{ value: '1 SEMESTRE', label: ' 2 SEMESTRE' }]}
                      />
                    </div>
                    <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      BSI PRIMEIRO SEMESTRE
                    </h2>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                     Horarios de aulas  
                     <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="https://suap.ifba.edu.br/">
                     {":"} Suap
                      </a>
                    </p>
                  </div>

                  <div>
                    <div onClick={()=>alert("oi")} class="inline-flex gap-x-2">
                      <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  bg-white  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                      <FilePdfOutlined className='text-red-600'  style={{ fontSize: '26px',  }}   />
                      </a>
                     

                      <a onClick={() => setOpen(!open)} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        Criar orário 
                      </a>

                      <Modal onCancel={() => setOpen(false)} open={open}>

                        Cria horarios
                      </Modal>
                    </div>
                  </div>
                </div>

                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-4 text-sm text-gray-700 py-2">Horário</th>
                      {data.map((item, index) => (
                        <th key={index} className="px-4 text-sm text-gray-700 py-2">{item.dia}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <tr key={index}>
                        <td className={`border-y  ${false && "bg-gray-100"} border-x px-4 py-2  h-12`}>
                          {data[0].aulas[index] ? (
                            <div>
                              <span className='text-sm'>{data[0].aulas[index].hora}</span>
                            </div>
                          ) : null}
                        </td>
                        {data.map((item, diaIndex) => (
                          <td key={diaIndex} className={`border-y ${false && "bg-gray-100"} text-center text-sm px-4 py-2`}>
                            {item.aulas[index] ? (
                              <div className='flex flex-col'>
                                <span>{item.aulas[index].name}</span>
                                <span className='text-blue-400 text-sm'>{item.aulas[index].disciplina}</span>
                              </div>
                            ) : null}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>




                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      <span class="font-semibold text-gray-800 dark:text-gray-200">6</span> results
                    </p>
                  </div>

                  <div>
                    <div class="inline-flex gap-x-2">
                      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        Prev
                      </button>

                      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        Next
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

    </Layouts>
  )
}

export default ScheduleTable
