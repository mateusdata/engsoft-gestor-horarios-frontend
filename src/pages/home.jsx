import { useContext, useState } from "react";
import { Context } from "../context/authContext";
import axiosInstance from "../components/config/axiosInstance";
import { Link } from "react-router-dom";
import { AiOutlineUserSwitch } from "react-icons/ai"; function Home() {

  const { user, logout } = useContext(Context);
  const [users, setUsers] = useState([]);
  const { openNotificationWithIcon, contextHolder } = useContext(Context);

  const getUsers = () => {
    axiosInstance.get("/user/teste").then((response) => {
      setUsers(response?.data);

    }).catch((erro) => {
      console.log(erro?.response);
      if (erro?.response?.status === 401) {
        openNotificationWithIcon({ message: "tokem expirado", description: "você sera desautenticado." }, "warning");
        setTimeout(() => {
          logout();
        }, 1500);
      }
      setUsers(erro?.response?.data?.message);
    })
  }
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center text-white">
      {contextHolder}
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
        <span className="text-green-800 text-2xl mt-8">  {users}</span>
    </div>
  );
}

export default Home;
