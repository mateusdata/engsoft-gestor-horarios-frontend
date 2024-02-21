import React, { useState } from 'react'
import Layouts from '../layouts/layouts'
import { Modal, Select } from 'antd'
import { EditFilled, EditOutlined } from '@ant-design/icons'

const ScheduleTable = () => {
  const [open, setOpen] =  useState(false)
  const days = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
  ];
  const data = [
    {
      segunda: [
        { name: "Alessa", disciplina: "PRogramação mobile", hora: "13:20",},
        { name: "Moises", disciplina: "PRogramação web", hora: "13:20" },
        { name: "Ana", disciplina: "PRogramação web", hora: "13:20" },
      ]
    },
    {
      terca: [
        { name: "maria", disciplina: "PRogramação web", hora: "13:20" },
        { name: "jonas", disciplina: "PRogramação web", hora: "13:20" },
        { name: "Mateus", disciplina: "PRogramação web", hora: "13:20" },
      ]
    },
    {
      quarta: [
        { name: "pedro", disciplina: "PRogramação web", hora: "13:20" },
        { name: "paulo", disciplina: "PRogramação web", hora: "13:20" },
        { name: "Mateus", disciplina: "PRogramação web", hora: "13:20" },
      ]
    },
    {
      quita: [
        { name: "lucas", disciplina: "PRogramação web", hora: "13:20" },
        { name: "joao", disciplina: "PRogramação web", hora: "13:20" },
        { name: "Mateus", disciplina: "PRogramação web", hora: "13:20" },
      ]
    },
    {
      sexta: [
        { name: "patricia", disciplina: "PRogramação web", hora: "13:20" },
        { name: "Mateus", disciplina: "PRogramação web", hora: "13:20" },
        { name: "Mateus", disciplina: "PRogramação web", hora: "13:20" },
      ]
    }
  ]
  return (
    <Layouts>
      
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
                        Keys you have generated to connect with third-party clients or access the <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="#">Preline API.</a>
                      </p>
                    </div>

                    <div>
                      <div class="inline-flex gap-x-2">
                        <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                          View all
                        </a>

                        <a onClick={()=>setOpen(!open)} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                          Create
                        </a>

                        <Modal onCancel={()=>setOpen(false)} open={open}>

                          Cria horarios
                        </Modal>
                      </div>
                    </div>
                  </div>
                  

                  
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-slate-900">
                      <tr>
                        <th scope="col" class="ps-6 py-3 text-start">
                          <label for="hs-at-with-checkboxes-main" class="flex">
                            <input type="checkbox"  disabled class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main"/>
                            <span class="sr-only"></span>
                          </label>
                        </th>

                      {days?.map((item)=>(
                          <th scope="col" class="px-6 py-3 text-start">
                          <div class="flex items-center gap-x-2">
                            <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              {item}
                            </span>
                          </div>
                        </th>
                      ))}
                        <th scope="col" class="px-6 py-3 text-end"></th>
                      </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                    
                      {data.map((item)=>(
                            <tr>
                            <td class="h-px w-px whitespace-nowrap">
                              <div class="ps-6 py-3">                      
                                  <span class="">{"13:00 - 15:50"}</span>
                              </div>
                            </td>
    
                           {
                            item?.segunda?.map((item)=>(
                              <td class="h-px w-px whitespace-nowrap">
                              <div class="px-6 py-3 flex flex-col">
                                <span class="text-sm text-gray-900 dark:text-gray-400">{item.name}</span>
                                <span class="text-sm text-gray-400 dark:text-gray-400">{item.disciplina}</span>
                              </div>
                            </td>
                            ))
                           }

                            <td class="h-px w-px whitespace-nowrap">
                              <div class="px-6 py-1.5">
                                <div class="hs-dropdown relative inline-block [--placement:bottom-right]">
                                  <button id="hs-table-dropdown-6" type="button" class="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                   <EditOutlined className='text-orange-600'/>
                                  </button>
                                 
                                </div>
                              </div>
                            </td>
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
                          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                          Prev
                        </button>

                        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                          Next
                          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
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
