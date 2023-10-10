import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://3338-2804-7d74-e3-9900-e53f-65e6-9294-688f.ngrok-free.app/',
});

axiosInstance.interceptors.request.use((config) => {
  const recoverUser = JSON.parse(localStorage.getItem("usuario"));
  if (recoverUser && recoverUser.token) {
    config.headers.Authorization = `Bearer ${recoverUser.token}`;
  }
  return config;
});

export default axiosInstance;
