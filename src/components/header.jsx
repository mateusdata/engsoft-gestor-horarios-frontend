import { Avatar } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { MdDarkMode } from 'react-icons/md';
import { Dropdown, Space } from 'antd';
import { Context } from '../context/authContext';
import { Link } from 'react-router-dom';

function Header() {
    const [darkMode, setDarkMode] = useState(localStorage.theme === 'dark');
    const { logout, user } = useContext(Context);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [darkMode]);
    const items = [
        {
          label: (
            <Link to={"/"}>
              Painel
            </Link>
          ),
          key: '0',
        },
        {
          label: (
            <Link to={"/"}>
              Configurações
            </Link>
          ),
          key: '1',
        },
        {
          label: (
            <div onClick={() => logout()}>
              <hr className='w-full p-[0.4px]' />
              <button className='mt-1  hover:text-red-300'>Sair</button>
            </div>
          ),
          key: '2',
        },
    
    
      ];
    
    return (
        <div className=' w-full items-center gap-4 justify-end    md:flex flex '>
            <div className='flex  '>
                <button className='dark:text-black pr-1 ronde flex flex-row flex-nowrap justify-center items-center gap-1' onClick={() => setDarkMode(!darkMode)}>
                    <span className={`hidden  md:flex ${darkMode && "text-gray-800"}`}>{`Modo ${darkMode ? "light" : "Dark"}`}</span>
                    
                    <MdDarkMode size={26} color={`${!darkMode ? 'black' : '#0a5f9b'}`} />
                </button>
                <span className='font-semibold text-lgtext-black'  >{
                    user.nome?.replace(/(\w)(\w*)/g, (_, firstChar, restOfWord) => firstChar.toUpperCase() + restOfWord.toLowerCase())
                }</span>

            </div>
            <div className=''>
                <Dropdown
                    menu={{ items }}
                    trigger={["click"]}
                >
                    <button onClick={(e) => e.preventDefault()}>
                        <Space className="cursor-pointer">
                            <Avatar
                                size={40}
                                style={{ backgroundColor: "black" }}
                                icon={<UserOutlined />}
                            />
                        </Space>
                    </button>
                </Dropdown>
            </div>

        </div>
    )
}

export default Header