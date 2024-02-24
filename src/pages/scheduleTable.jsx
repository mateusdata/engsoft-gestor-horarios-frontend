import React, { useEffect, useState } from 'react'
import Layouts from '../layouts/layouts'
import { EditFilled, EditOutlined, FilePdfOutlined } from '@ant-design/icons'
import MyDocument from './pdf'
import { Form, Input, Button, Select, Modal, Checkbox } from 'antd';
import { useForm } from 'react-hook-form';
import { Option } from 'antd/es/mentions';
import axiosInstance from '../components/config/axiosInstance';

import ptBR from 'antd/lib/locale/pt_BR';
import 'moment/locale/pt-br';
import moment from 'moment';


const ScheduleTable = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState([]);
  const [updatePage, setUpdatePage] = useState(true);
  const [isFormActive, setIsFormActive] = useState(false);
  const [dateRange, setDateRange] = useState({ start: null, end: null });

  useEffect(() => {
      const storedStartDate = localStorage.getItem('semestreduracao_start');
      const storedEndDate = localStorage.getItem('semestreduracao_end');

      if (storedStartDate && storedEndDate) {
          setDateRange({
              start: moment(storedStartDate, 'DD/MM/YYYY'),
              end: moment(storedEndDate, 'DD/MM/YYYY')
          });
      }
  }, []);

  const { register, handleSubmit, watch } = useForm({
    defaultValues: "semestre"
  });
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/search-schedules/${watch("semestre")}`)
        console.log('Resposta completa:', response);
        const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const dadosOrdenados = response.data.sort((a, b) => diasDaSemana.indexOf(a.dia) - diasDaSemana.indexOf(b.dia));
        setUpdatePage(false)
        setData(dadosOrdenados)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();
  }, [updatePage, watch("semestre")])

  const onFinish = async (values) => {
    console.log('Received values of form: ', { ...values, semestre: watch("semestre") });
    try {
      const response = await axiosInstance.post("/create-schedules", { ...values, semestre: watch("semestre") });
      console.log(response)
      !isFormActive && setOpen(false);
      setUpdatePage(true)
    } catch (error) {
      console.log(error)
    }

  };
  const rowDays = [
    "SEGUNDA",
    "TERÇA",
    "QUARTA",
    "QUINTA",
    "SEXTA",
  ]
  if (!data | rowDays) {
    return null
  }
  return (
    <Layouts>

      <div class="lg:max-w-[85rem] md:max-w-[100%] sm:max-w-[100%] max-w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
             
                <div class="px-6 py-4 grid gap-3 md:flex md:justify-between  md:items-center border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <div>
                      <select className='border-green-800  focus:border-blue-500 border-2  p-1' {...register("semestre")} defaultValue="1">
                        <option className='py-1' value="1">1° SEMESTRE</option>
                        <option className='py-1' value="2">2° SEMESTRE</option>
                        <option className='py-1' value="3">3° SEMESTRE</option>
                        <option className='py-1' value="4">4° SEMESTRE</option>
                        <option className='py-1' value="5">5° SEMESTRE</option>
                        <option className='py-1' value="6">6° SEMESTRE</option>
                        <option className='py-1' value="7">7° SEMESTRE</option>
                        <option className='py-1' value="8">8° SEMESTRE</option>
                      </select>

                    </div>
                    <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {`BSI ${watch("semestre")}° SEMESTRE`}
                    </h2>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                    {dateRange.start && dateRange.end && (
                        <p>
                            Período letivo: {dateRange.start.format('DD/MM/YYYY')} - {dateRange.end.format('DD/MM/YYYY')}
                        </p>
                    )}
                    </p>
                  </div>

                  <div>
                    <div onClick={() => { }} class="inline-flex gap-x-2">
                      <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg  bg-white  text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">

                        <MyDocument />
                      </a>


                      <a onClick={() => setOpen(!open)} class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        Criar horário
                      </a>

                      <Modal footer={false} okButtonProps={{ className: "bg-blue-600" }} onCancel={() => setOpen(false)} onOk={() => setOpen(false)} open={open}>
                        <span className='text-center flex w-full justify-center items-center mb-5 text-2xl'>Cadastrar Horários</span>
                        <Form
                          name="cadastro"
                          onFinish={onFinish}
                          className='p-12'
                        >
                          <Form.Item
                            name="dia"
                            rules={[{ required: true, message: 'Por favor, selecione o dia!' }]}
                          >

                            <Select placeholder="Selecione o dia">
                              <Option value="segunda">Segunda</Option>
                              <Option value="terca">Terça</Option>
                              <Option value="quarta">Quarta</Option>
                              <Option value="quinta">Quinta</Option>
                              <Option value="sexta">Sexta</Option>
                            </Select>
                          </Form.Item>

                          <Form.Item
                            name="professor"
                            rules={[{ required: true, message: 'Por favor, insira o nome do professor!' }]}
                          >
                            <Input placeholder="Nome do professor" />
                          </Form.Item>

                          <Form.Item
                            name="disciplina"
                            rules={[{ required: true, message: 'Por favor, insira a disciplina!' }]}
                          >
                            <Input placeholder="Disciplina" />
                          </Form.Item>

                          <Form.Item
                            name="horario"
                            rules={[{ required: true, message: 'Por favor, selecione a horario!' }]}
                          >
                            <Select placeholder="Selecione a horario">
                              <Option value="13:20 - 14:10">13:20 - 14:10</Option>
                              <Option value="14:10 - 15:00">14:10 - 15:00</Option>
                              <Option value="15:10 - 16:00">15:10 - 16:00</Option>
                              <Option value="16:00 - 16:50">16:00 - 16:50</Option>
                              <Option value="16:50 - 17:50">16:50 - 17:50</Option>
                              <Option value="17:50 - 18:30">17:50 - 18:30</Option>
                            </Select>
                          </Form.Item>

                          <Form.Item>
                            <Button className='bg-blue-600 w-full' type="primary" htmlType="submit">
                              Cadastrar
                            </Button>
                          </Form.Item>
                        </Form>
                        
                          <Checkbox className={`${isFormActive&& "text-green-700"}`} onChange={()=>setIsFormActive(!isFormActive)}>Permanecer ativo</Checkbox>
                      </Modal>
                    </div>
                  </div>
                </div>

                <table class="min-w-full divide-y  divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      { <th className="px-4 text-sm text-gray-700 py-2">HORÁRIO</th>}
                      {false &&  data.map((item, index) => (
                        <th key={index} className="px-4 text-sm text-gray-700 py-2">{item?.dia}</th>
                      ))}

                      {true && rowDays.map((item, index) => (
                        <th key={index} className="px-4 text-sm text-gray-700 py-2">{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='border border-red-600 '>
                    {data.length > 0 && Array.from({ length: 6 }).map((_, index) => (
                      <tr key={index}>
                        <td className={`border-y    border-x px-4 py-2  h-12`}>
                          {data.length > 0 && data[0].aulas[index] ? (
                            <div className='border border-gray-100 flex flex-row flex-nowrap w-28'>
                              <span className='text-sm'>🕓{data[0]?.aulas[index]?.horario}</span>
                            </div>
                          ) : null}
                        </td>
                        {data.length > 0 && data.map((item, diaIndex) => (
                          <td key={diaIndex} className={`border-y ${false && "bg-gray-100"} text-center text-sm px-4 py-2`}>
                            {item?.aulas[index] ? (
                              <div className='flex flex-col'>
                                <span>{item?.aulas[index].name}</span>
                                <span className='text-blue-400 text-sm'>{item?.aulas[index].disciplina}</span>
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
                      <span class="font-semibold text-gray-800 dark:text-gray-200">{data?.length}</span> resultados
                    </p>
                  </div>

                  <div>
                    <div class="inline-flex gap-x-2">
                      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        Proximo
                      </button>

                      <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        Anterior
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
