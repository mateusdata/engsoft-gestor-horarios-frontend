import { useContext, useEffect, useState } from "react";
import axiosInstance from "../components/config/axiosInstance";
import { Link } from "react-router-dom";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { Context } from "../context/authContext";
import GlobalLayouts from "../layouts/layouts";
import { MdMarkEmailUnread } from "react-icons/md";
import { QRCode, Space, theme } from 'antd';

const { useToken } = theme;
function Home() {

  const { user, logout } = useContext(Context);
  const [users, setUsers] = useState([]);
  const [responseToken, setResponseToken] = useState([]);
  const { token } = useToken();


  useEffect(() => {
    axiosInstance.post("/lista-usuarios").then((response) => {
      setUsers(response?.data);
      console.log(response.data);
    }).catch((erro) => {
      console.log(erro?.response);
      if (erro?.response?.status === 401) {

        setTimeout(() => {
          logout();
        }, 1500);
      }
      setResponseToken(erro?.response?.data?.message);
    })
  }, [logout])
  const getUsers = () => {

    axiosInstance.get("/teste").then((response) => {
      setResponseToken(response?.data);


    }).catch((erro) => {
      console.log(erro?.response);
      if (erro?.response?.status === 401) {

        setTimeout(() => {
          logout();
        }, 1500);
      }
      setResponseToken(erro?.response?.data?.message);
    })
  }
  return (

    <GlobalLayouts>
      
      <div class="bg-white min-h-screen flex flex-col justify-center items-center text-gray-800">
      <Space>
      <span>API</span>
        <QRCode value="https://github.com/mateusdata/engsoft-gestor-horarios-backend/tree/main" color={token.colorSuccessText} />
        <br /> <br /> <br />
        <QRCode
          value="https://gestaodehorarios.vercel.app/"
          color={token.colorInfoText}
          bgColor={token.colorBgLayout}
        />
          <span>WEB</span>
      </Space>
        <h1 class="text-4xl font-bold mb-4">Gestão de Horários Acadêmicos</h1>
        <p class="text-lg">Bem-vindo ao nosso site de Engenharia de Software</p>

        <div class="flex flex-row flex-nowrap items-center justify-center gap-2">
          <AiOutlineUserSwitch class="bg-orange-500" size="18" />
          <p>Meu usuário {user?.nome}</p>
        </div>

        <div class="flex flex-row flex-nowrap items-center justify-center gap-2 mt-5">
          <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={getUsers}>Verificar token</button>
          <Link class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/teste">Voltar</Link>
          <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => logout()}>Sair</button>

        </div>

        <span class="text-green-800 text-2xl mt-8">{responseToken}</span>

        <div class="bg-gray-50 rou p-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users?.map((item) => (
              <div key={item?.email} class="bg-white p-4 rounded-lg shadow-md">
                <span class="text-blue-500 text-lg font-bold mb-2">{`${item?.nome} `}</span>
                <div class="flex flex-row flex-nowrap gap-2">
                  <MdMarkEmailUnread color="orange" size="24" />
                  <span class="text-gray-600">{`Email: ${item?.email}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </GlobalLayouts>

  );
}

export default Home;
