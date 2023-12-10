import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

axiosInstance.interceptors.request.use((config) => {
  const recoverUser = JSON.parse(localStorage.getItem("usuario"));
  if (recoverUser && recoverUser.token) {
    config.headers.Authorization = `Bearer ${recoverUser.token}`;
  }
  return config;
});

export default axiosInstance;
