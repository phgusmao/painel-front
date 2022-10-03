import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3333/painel",
});

export default api;