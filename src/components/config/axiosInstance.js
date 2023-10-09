import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

const recoverUser = JSON.parse(localStorage.getItem("usuario"));
if (recoverUser && recoverUser.token) {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${recoverUser.token}`;
}
//alert(recoverUser.token)
export default axiosInstance;
