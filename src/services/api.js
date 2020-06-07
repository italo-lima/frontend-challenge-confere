import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3333"
})

api.interceptors.request.use((response) => {   
  const token = localStorage.getItem('@confere:token');   
  response.headers.Authorization = token ? `Bearer ${token}` : '';   
  return response; 
});

export default api;