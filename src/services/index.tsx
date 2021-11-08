import axios from "axios";

const api = axios.create({
  baseURL: "https://gustavo-burguer-api.herokuapp.com/",
});

export default api;

// baseURL: "http://localhost:3001",
