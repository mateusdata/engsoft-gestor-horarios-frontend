import { Avatar } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import { MdDarkMode } from 'react-icons/md';
import { Dropdown, Space } from 'antd';
import { Context } from '../context/authContext';
import { GlobalContext } from '../context/globalContext';
import Header from '../components/header';
import logoIfba from "../images/sifba.png"
function Layouts({ children }) {
  const [showMenu, setSHowMenu] = useState(true);
  const { currenPage, setCurrentPage} = useContext(GlobalContext);


  return (
    <div>
      <body className="bg-gray-[#D9D9D9] dark:bg-[#D9D9D9]">
        <div className="sticky top-0 inset-x-0 z-20 bg-[#D9D9D9] dark:bg-[#D9D9D9] border-y px-4 sm:px-6 md:px-8   border ">
          <div className="flex items-center py-4  justify-between" >

            <div className='flex items-center justify-center'>
              <button type="button" className=" text-gray-500 hover:text-gray-600" data-hs-overlay="#application-sidebar-dark" aria-controls="application-sidebar-dark" aria-label="Toggle navigation">
                <span className="sr-only">Toggle Navigation</span>
                <svg onClick={() => { setSHowMenu(false); }} className="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
              </button>

              <ol className=" flex items-center whitespace-nowrap min-w-0  " aria-label="Breadcrumb">
              <img  className='h-14 w-14 ' src={logoIfba} alt="" />
               
              </ol>

            </div>

           <div className='flex '>
             <Header/>
           </div>
          </div>

        </div>



        <div id="application-sidebar-dark"
          className={`${showMenu ? "hs-overlay  bg-[#D9D9D9] dark:bg-[#238662] hs-overlay-open:translate-x-0   border-none -translate-x-full hidden transition-all duration-300 transform "
            : ""} fixed top-0 left-0 bottom-0 z-[60] w-64 bg-[#136CAD] dark:bg-gray-800 border-r border-gray-800 pt-7 pb-10 overflow-y-auto scrollbar-y md:block 
          md:translate-x-0 md:right-auto md:bottom-0`}>
          <div className=" text-center flex items-center justify-center">
          <img  className='h-14 w-14 ' src={logoIfba} alt=""/>
          </div>

          <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
            <ul className="space-y-1.5">
              <li>
                <Link onClick={()=> {setCurrentPage(1)}} to={"/table"} className={`flex items-center gap-x-3 py-2 px-2.5 ${currenPage ===1 && "bg-[#0a5f9b]  dark:bg-blue-700 " } hover:bg-gray-800 text-sm text-white rounded-md`}>

                  <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                  </svg>
                  Painel
                </Link>
                  

              </li>

              <li className="hs-accordion" id="users-accordion">
                <Link onClick={()=> {setCurrentPage(2)}} to={"/"} className={` ${currenPage ===2 && "bg-[#0a5f9b]  dark:bg-blue-700 "}  hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm  dark:text-white rounded-md hover:bg-gray-800 hover:text-white`}>
                  <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
                  </svg>
                  Professores

                  <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>

                  {false && <svg className="ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>}
                </Link>

                <div id="users-accordion-child" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden">
                  <ul className="hs-accordion-group pl-3 pt-2" data-hs-accordion-always-open>
                    <li className="hs-accordion" id="users-accordion-sub-1">
                      <Link onClick={()=> {setCurrentPage(3)}} to={"/"} className={` ${currenPage === 3 && "bg-[#0a5f9b]  dark:bg-blue-700 "}  hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm dard rounded-md hover:bg-gray-800 hover:text-white`}>
                        Sub Menu 1

                        <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                        </svg>

                        <svg className="ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="hs-accordion" id="account-accordion">
                <Link onClick={()=> {setCurrentPage(3)}} to={"/"} className={` ${currenPage === 3  && "bg-[#0a5f9b]  dark:bg-blue-700 "}  hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm dard rounded-md hover:bg-gray-800 hover:text-white`}>
                  <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                  Conta

                  <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>

                  {false && <svg className="ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>}
                </Link>
              </li>

              <li className="hs-accordion" id="projects-accordion">
                <Link onClick={()=> {setCurrentPage(4)}} to={"/register"} className={` ${currenPage === 4 && "bg-[#0a5f9b]  dark:bg-blue-700 "}  hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm dard rounded-md hover:bg-gray-800 hover:text-white`}>
                  <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"></path>
                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"></path>
                  </svg>
                  Cadastro

                  <svg className="hs-accordion-active:block ml-auto hidden w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>

                  {false && <svg className="ml-auto block w-3 h-3 text-gray-600 group-hover:text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>}
                </Link>
              </li>

              <li>
                <Link onClick={()=> {setCurrentPage(5)}} to={"/"} className={` ${currenPage === 5 && "bg-[#0a5f9b]  dark:bg-blue-700 "}  hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm dard rounded-md hover:bg-gray-800 hover:text-white`}>
                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                Calendario
              </Link></li>
              <li><Link onClick={()=> {setCurrentPage(6)}} to={"/"} className={` ${currenPage === 6 && "bg-[#0a5f9b]  dark:bg-blue-700 "}  hs-accordion-toggle flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-white hs-accordion-active:hover:bg-transparent text-sm dard rounded-md hover:bg-gray-800 hover:text-white`}>
                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                </svg>
                Documentação
              </Link></li>
            </ul>
          </nav>
        </div>
        <div onClick={() => { setSHowMenu(true); }} className="pt-0  mt-5 md:mt-0 md:ml-5 px-4 sm:px-6 md:px-8 md:pl-64 break-words bg-[#D9D9D9] dark:bg-[#D9D9D9]">
         

          <div className='flex flex-col justify-between  dark:border-gray-200 rounded-md min-h-[90vh]  '>
            <div className='p-0 rounded-md min-h-[8vh] break-words flex flex-row'>
              {children}
            </div>

            <div className=''>
              {true && <Footer />}
            </div>
          </div>

        </div>
      </body>
    </div>
  )
}

export default Layouts
