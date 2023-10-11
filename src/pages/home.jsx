import { useContext, useEffect, useState } from "react";
import axiosInstance from "../components/config/axiosInstance";
import { Link } from "react-router-dom";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { Context } from "../context/authContext";
import GlobalLayouts from "../layouts/layouts";
import { MdMarkEmailUnread } from "react-icons/md";
function Home() {

  const { user, logout } = useContext(Context);
  const [users, setUsers] = useState([]);
  const [responseToken, setResponseToken] = useState([]);

  useEffect(() => {
    axiosInstance.get("/lista-usuarios").then((response) => {
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

      <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center text-white">
        { }
        <h1 className="text-4xl font-bold mb-4">Gestão de Horários Acadêmicos</h1>
        <p className="text-lg">Bem-vindo ao nosso site de Engenharia de Software</p>

        <div className="flex flex-row flex-nowrap items-center justify-center gap-2">
          <AiOutlineUserSwitch className="bg-orange-500" size={18} />
          <p> Meu usuario {user?.nome}</p>
        </div>

        <div className="flex flex-row flex-nowrap items-center justify-center gap-2 mt-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => logout()}>Sair</button>
          <br />
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={getUsers}>Vefificar token </button>

          <br />
          <Link className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" to={"/teste"}>Voltar</Link>
        </div>
        <span className="text-green-800 text-2xl mt-8">  {responseToken}</span>

        <div className="bg-gray-800 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users?.map((item) => (
              <div key={item.email} className="bg-white p-4 rounded-lg shadow-md">
                <span className="text-blue-500 text-lg font-bold mb-2">{`${item?.nome} `}</span>
                <div className="flex flex-row flex-nowrap gap-2">
                  
                <MdMarkEmailUnread color="orange" size={24} />
                <span className="text-gray-600"> {`Email: ${item?.email}`}</span>
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
