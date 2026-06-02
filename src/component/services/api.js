import axios from "axios";

const API = axios.create({
  baseURL: "write your ip address here /api/auth", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;